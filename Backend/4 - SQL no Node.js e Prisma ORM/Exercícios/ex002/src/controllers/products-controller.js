const HttpError = require("../errors/HttpError");
const Product = require("../models/products-model");
const z = require("zod");

const saveProductSchema = z.object({
    name: z.string(),
    description: z.string(),
    price: z.int(),
    stockQuantity: z.int(),
    isActive: z.boolean()
});

const updateProductSchema = z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    price: z.int().optional(),
    stockQuantity: z.int().optional(),
    isActive: z.boolean().optional()
});

const productsController = {
    // GET /api/products
    index: async (req, res) => {
        const products = await Product.findAll();

        return res.status(200).json(products);
    },

    // GET /api/products/:id
    show: async (req, res) => {
        const product = await Product.findById(+req.params.id);
        if (!product) throw new HttpError(404, "Product Not Found");

        return res.status(200).json(product);
    },

    // POST /api/products
    create: async (req, res) => {
        if (!req.body) throw new HttpError(400, "No Body Req");

        const parsedBody = saveProductSchema.parse(req.body);
        const newProduct = await Product.create(parsedBody);

        return res.status(201).json(newProduct);
    },

    // PUT /api/products/:id
    update: async (req, res) => {
        if (!req.params || !req.body) throw new HttpError(400, "No Req Params/Body");

        const parsedBody = updateProductSchema.parse(req.body);
        const updatedProduct = await Product.update(+req.params.id, parsedBody);

        if (!updatedProduct) throw new HttpError(404, "Product Not Found");

        return res.status(200).json(updatedProduct);
    },

    // DELETE /api/products/:id
    delete: async (req, res) => {
        if (!req.params) throw new HttpError(400, "No Req Params");

        const result = await Product.delete(+req.params.id);

        return res.status(200).json(result);
    }
};

module.exports = productsController;
