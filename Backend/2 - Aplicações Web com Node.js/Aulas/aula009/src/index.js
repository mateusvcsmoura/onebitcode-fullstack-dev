const express = require("express");
const uploadMiddlewares = require("./middlewares/upload-middleware");
const PORT = process.env.PORT || 3000;
const app = express();

// const middlewareC = require("./middlewares/middlewareC");

// app.use(middlewareC);

// app.use(function (req, res, next) {
//     console.log("running middleware a");
//     req.middlewareA = "Ok";
//     next();
// });

// function middlewareB(req, res, next) {
//     console.log("running middleware b");
//     req.middlewareB = "Ok";
//     next();
// }

// app.get('/testA', (req, res) => {
//     console.log({ a: req.middlewareA, b: req.middlewareB });
//     throw new Error("shibal | route a");
//     res.end();
// });

// app.get('/testB', middlewareB, (req, res) => {
//     console.log({ a: req.middlewareA, b: req.middlewareB });
//     throw new Error("shibal | route b");
//     res.end();
// });

// app.use(function (e, req, res, next) {
//     if (e) {
//         console.log(e.message);
//         res.status(400).json({ message: e.message });
//     } else {
//         next();
//     }
// });

app.use(express.static('public'));

app.post('/upload', uploadMiddlewares.single('avatar'), (req, res) => {
    console.log(req.file, req.body);
    res.json({ message: "file successfully uploaded" });
});

app.listen(PORT, () => console.log(`app running on http://localhost:${PORT}`));
