const Author = require("./classes/Author");

// Comments Authors
const adobe = new Author("adobe", "Adobe Enterprises", "adobe@gmail.com");
const batman = new Author("batman", "Bruce Wayne", "batman@gmail.com");
const superman = new Author("superman", "Clark Kent", "superman@gmail.com");
const wonderwoman = new Author("wonderwoman", "Princess Diana", "wonderwoman@gmail.com");

// Post Authors
const mats = new Author("mats", "Mateus Moura", "mateus@gmail.com");
const sofia = new Author("sofi", "Lara Sofia", "sofia@gmail.com");

// Posts
const matsPost1 = mats.createPost("assunto1", "blablabla");
const matsPost2 = mats.createPost("assunto2", "blablabla2");
matsPost1.addComment(batman, "post muito legal");
matsPost2.addComment(superman, "interessante");
matsPost1.addComment(wonderwoman, "parabéns");

const sofiaPost1 = sofia.createPost("design ux/ui", "é um tema importante e interessante");
sofiaPost1.addComment(mats, "concordo");
sofiaPost1.addComment(adobe, "é fundamental na atualidade");

console.dir(mats, { depth: null });
console.dir(sofia, { depth: null });

