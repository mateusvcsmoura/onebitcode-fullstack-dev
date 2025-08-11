require('dotenv').config();

const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()
// use `prisma` in your application to read and write data in your DB

async function main() {
    // await prisma.post.createMany({
    //     data: [
    //         {
    //             title: "Olá, Mundo!",
    //             content: "Primeiro Post criado com PrismaORM",
    //             published: true
    //         },

    //         {
    //             title: "Post 2",
    //             content: null
    //         }
    //     ]
    // });

    await prisma.user.create({
        data: {
            name: "mateus",
            email: "mateus" + Date.now() + "@gmail.com",
            posts: {
                create: [
                    { title: "Post 1", content: "Conteudo post 1", slug: "post1" }
                ]
            }
        }
    });
}

main();

async function getResult() {
    const result = await prisma.user.findMany({ include: { posts: true } });
    console.log(result);
}

getResult();