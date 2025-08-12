const { Router } = require("express");
const prisma = require("../database");

const postsRouter = Router();

postsRouter.get('/', async (req, res) => {
    const page = Number(req.query.page) || 1;
    const pageSize = Number(req.query.pageSize) || 10;

    const skip = (page - 1) * pageSize;
    const take = pageSize;

    const posts = await prisma.post.findMany({
        select: {
            id: true,
            title: true,
            content: true,
            slug: true,
            published: true,
            authorId: true
        },
        orderBy: { createdAt: "desc" },
        take: take,
        skip: skip
    });

    const totalPosts = await prisma.post.count();
    const totalPages = Math.ceil(totalPosts / pageSize);

    return res.status(200).json({ posts, pagination: { page, pageSize, totalPosts, totalPages } });
});

postsRouter.get('/search', async (req, res) => {
    const { title, authorId, published, startDate, endDate } = req.query;
    const filter = {};

    if (title) {
        filter.title = {
            contains: title,
            mode: "insensitive"
        };
    };

    if (authorId) {
        filter.authorId = Number(authorId);
    };

    if (published) {
        filter.published = published === "true"
    };

    if (startDate || endDate) {
        filter.createdAt = {};

        if (startDate) {
            filter.createdAt.gte = new Date(startDate);
        };

        if (endDate) {
            filter.createdAt.lte = new Date(endDate);
        };
    };

    console.log("filters", filter);

    const posts = await prisma.post.findMany({
        where: filter,
        orderBy: { createdAt: "desc" }
    });

    return res.status(200).json(posts);
});

postsRouter.get('/:id', async (req, res) => {
    const post = await prisma.post.findUnique({ where: { id: +req.params.id } });

    if (!post) return res.status(404).json({ message: "Post not found" });

    return res.status(200).json(post);
});

postsRouter.post('/create', async (req, res) => {
    const { title, content, authorId } = req.body;

    const baseSlug = title
        .toLowerCase()
        .normalize("NFD") // separa acentos das letras
        .replace(/[\u0300-\u036f]/g, "") // remove acentos
        .replace(/\s+/g, "-") // troca espaços por '-'
        .replace(/[^a-z0-9\-]/g, "") // remove caracteres inválidos
        .replace(/\-+/g, "-") // evita múltiplos '-'
        .replace(/^\-+|\-+$/g, ""); // remove '-' do início/fim

    const slug = `${baseSlug}-${Date.now()}`;

    const newPost = await prisma.post.create({
        data: { title, content, slug, authorId }
    });

    return res.status(201).json(newPost);
});

postsRouter.put('/:id', async (req, res) => {
    const { title, content } = req.body;

    const updatedPost = await prisma.post.update({
        data: { title, content },
        where: { id: +req.params.id }
    });

    return res.status(200).json(updatedPost);
});

postsRouter.delete('/:id', async (req, res) => {
    const deletedPost = await prisma.post.delete({ where: { id: +req.params.id } });

    return res.status(200).json(deletedPost);
});

module.exports = postsRouter;