const { Router } = require("express");
const prisma = require("../database");

const router = Router();

router.get("/", async (req, res) => {
    const tags = await prisma.tag.findMany();
    res.json(tags);
});

router.post("/", async (req, res) => {
    const newTag = await prisma.tag.create({
        data: { name: req.body.name }
    });
    res.status(201).json(newTag);
});

router.get("/:id", async (req, res) => {
    const tag = await prisma.tag.findUnique({
        where: { id: +req.params.id },
        include: {
            posts: {
                include: { author: { select: { id: true, name: true } } }
            }
        }
    });

    res.json(tag);
});

router.put("/:id", async (req, res) => {
    const updatedTag = await prisma.tag.update({
        data: { name: req.body.name },
        where: { id: +req.params.id }
    });
    res.json(updatedTag);
});

router.delete("/:id", async (req, res) => {
    await prisma.tag.delete({ where: { id: +req.params.id } });
    res.json({ message: "tag deleted successfully" });
});

module.exports = router;