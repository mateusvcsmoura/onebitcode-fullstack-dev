const Product = require("../models/products-model");

const productsController = {
    // GET /api/products
    index: async (req, res) => {
        const products = await Product.findAll();

        return res.status(200).json(products);
    },

    // GET /api/products/:id
    show: async (req, res) => {
        const product = await Product.findById(+req.params.id);
        if (!product) return res.status(404).json({ message: "Product Not Found" });

        return res.status(200).json(product);
    },

    // POST /api/products
    create: async (req, res) => {
        if (!req.body) return res.status(400).json({ message: "No Req Body" });

        const newProduct = await Product.create(req.body);

        return res.status(201).json(newProduct);
    },

    // PUT /api/products/:id
    update: async (req, res) => {
        if (!req.params || !req.body) return res.status(400).json({ message: "No Req Body/Params" });

        const updatedProduct = await Product.update(+req.params.id, req.body);

        if (!updatedProduct) return res.status(404).json({ message: "Product Not Found" });

        return res.status(200).json(updatedProduct);
    },

    // DELETE /api/products/:id
    delete: async (req, res) => {
        if (!req.params) return res.status(400).json({ message: "No Req Params" });

        const result = await Product.delete(+req.params.id);

        return res.status(200).json(result);
    }
};

module.exports = productsController;
