const { Router } = require("express");
const prisma = require("../database");

const userRouter = Router();

userRouter.get('/', async (req, res) => {
    const users = await prisma.user.findMany();

    return res.status(200).json(users);
});

userRouter.post('/register', async (req, res) => {
    const { name, email } = req.body;

    const newUser = await prisma.user.create({
        data: { name, email }
    });

    return res.status(201).json(newUser);
});

userRouter.get('/:id', async (req, res) => {
    const user = await prisma.user.findUnique({ where: { id: +req.params.id }, include: { posts: true } });

    if (!user) return res.status(404).json({ message: "User not found" });

    return res.status(200).json(user);
});

userRouter.put('/:id', async (req, res) => {
    const { name, email } = req.body;

    const updatedUser = await prisma.user.update({
        data: { name, email },
        where: { id: Number(req.params.id) }
    });

    return res.status(200).json(updatedUser);
});

userRouter.delete('/:id', async (req, res) => {
    const deletedUser = await prisma.user.delete({ where: { id: Number(req.params.id) } });

    return res.status(200).json(deletedUser);
});

module.exports = userRouter;