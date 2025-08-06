const HttpError = require("../errors/HttpError");
const Order = require("../models/order-model");

const ordersController = {
    // GET /api/orders
    index: async (req, res) => {
        const orders = await Order.findAll();

        return res.status(200).json(orders);
    },

    // POST /api/orders
    create: async (req, res) => {
        if (!req.body) throw new HttpError(400, "No body req");

        const newOrder = await Order.create(req.body.customerId, req.body.products);

        if (!(newOrder instanceof Order)) throw new HttpError(400, newOrder.message);

        return res.status(201).json(newOrder);
    },

    // GET /api/orders/:id
    show: async (req, res) => {
        if (!req.params) throw new HttpError(400, "no req params");

        const order = await Order.findById(req.params.id);
        if (!order) throw new HttpError(404, "order not found");

        return res.status(200).json(order);
    },

    // DELETE /api/orders/:id
    delete: async (req, res) => {
        if (!req.params) throw new HttpError(400, "No req params");

        const result = await Order.delete(+req.params.id);

        return res.json(result);
    }
};

module.exports = ordersController;

