require('dotenv').config();

const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()
// use `prisma` in your application to read and write data in your DB

async function main() {
    await prisma.post.createMany({
        data: [
            {
                title: "Olá, Mundo!",
                content: "Primeiro Post criado com PrismaORM",
                published: true
            },

            {
                title: "Post 2",
                content: null
            }
        ]
    });
}

main().then(async () => {
    const result = await prisma.post.findMany();
    console.table(result);
});

