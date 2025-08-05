const HttpError = require("../errors/HttpError");
const Customer = require("../models/customers-model");
const z = require("zod");

const saveUserSchema = z.object({
    name: z.string().regex(/^[a-zA-Z0-9_]{3,16}$/, "Invalid Name"),
    email: z.string().regex(/^[\w.-]+@[\w.-]+\.\w+$/, "Invalid E-mail")
});

const updateUserSchema = z.object({
    name: z.string().regex(/^[a-zA-Z0-9_]{3,16}$/, "Invalid Name").optional(),
    email: z.string().regex(/^[\w.-]+@[\w.-]+\.\w+$/, "Invalid E-mail").optional()
});

const customerController = {
    // GET /api/customers
    index: async (req, res) => {
        const customers = await Customer.findAll();

        return res.status(200).json(customers);
    },

    // GET /api/customers/:id
    show: async (req, res) => {
        if (!req.params) throw new HttpError(400, "No Req Params");

        const customer = await Customer.findById(+req.params);

        if (!customer) throw new HttpError(404, "Customer Not Found");

        return res.status(200).json(customer);
    },

    // POST /api/customers
    create: async (req, res) => {
        if (!req.body) throw new HttpError(400, "No Req Body");

        const parsedBody = saveUserSchema.parse(req.body);
        const newCustomer = await Customer.create(parsedBody);

        if (!newCustomer) throw new HttpError(500, "Could not create Customer");

        return res.status(201).json(newCustomer);
    },

    // PUT /api/customers/:id
    update: async (req, res) => {
        if (!req.params || !req.body) throw new HttpError(400, "No Req Params/Body");

        const parsedBody = updateUserSchema.parse(req.body);
        const updatedCustomer = await Customer.update(+req.params.id, parsedBody);

        if (!updatedCustomer) throw new HttpError(404, "Customer Not Found");

        return res.status(200).json(updatedCustomer);
    },

    // DELETE /api/customers/:id
    delete: async (req, res) => {
        if (!req.params) throw new HttpError(400, "No Req Params");

        const result = await Customer.delete(+req.params.id);

        if (!result) throw new HttpError(404, "Customer Not Found");

        return res.status(200).json(result);
    }
};

module.exports = customerController;