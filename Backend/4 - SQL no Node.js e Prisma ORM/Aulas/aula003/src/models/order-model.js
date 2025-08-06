const { query, getClient } = require("../database");
const Customer = require("./customers-model");
const Product = require("./products-model");

class Order {
    constructor(orderRow, populateCustomer, populateProducts) {
        this.id = orderRow.id;
        this.customerId = orderRow.customer_id;
        this.total = +orderRow.total;
        this.createdAt = new Date(orderRow.created_at);
        this.updatedAt = new Date(orderRow.updated_at);

        this.customer = undefined;

        if (populateCustomer) {
            this.customer = populateCustomer;
        }

        this.products = undefined;

        if (populateProducts) {
            this.products = populateProducts;
        }
    }

    static async findAll() {
        // result ["customer.id"]
        const result = await query(
            `SELECT 
                orders.*, 
                customers.id AS customers.id, 
                customers.name AS customer.name, 
                customers.email AS customer.email,
                customers.created_at AS customer.created_at,
                customers.updated_at AS customer.updated_at
            FROM orders JOIN customers ON customers.id = orders.customer_id;
            `
        );

        return result.rows.map(row => new Order(row));
    }

    /**
     * 
     * @param {number} customerId 
     * @param {{id: number, quantity: number}[]} orderProducts 
     */

    static async create(customerId, orderProducts) {
        const storedOrderProducts = await query(
            `SELECT * FROM products WHERE id = ANY($1::int[]);`, // ANY (1, 3, 6)
            [orderProducts.map(product => product.id)]
        );

        let orderTotal = 0;

        const populatedOrderProducts = storedOrderProducts.rows.map((row) => {
            const { quantity } = orderProducts.find((product) => product.id === row.id);
            orderTotal += +row.price * +quantity;

            return { product: new Product(row), quantity };
        });

        const dbClient = await getClient();
        let response;

        try {
            await dbClient.query("BEGIN");

            const orderCreationResult = await dbClient.query(
                `INSERT INTO order (customer_id, total) VALUES ($1, $2) RETURNING *;`, [customerId, orderTotal]
            );

            const order = new Order(orderCreationResult.rows[0], null, populatedOrderProducts);

            for (const entry of populatedOrderProducts) {
                await dbClient.query(
                    `INSERT INTO order_products (order_id, product_id, quantity) VALUES ($1, $2, $3);`,
                    [order.id, entry.product.id, entry.quantity]
                );
            }

            await dbClient.query("COMMIT");

            response = order;
        } catch (e) {
            await dbClient.query("ROLLBACK");
            response = { message: `Error while creating order: ${e.message} ` };
        } finally {
            dbClient.release();
        }

        return response;
    }

};

module.exports = Order;
