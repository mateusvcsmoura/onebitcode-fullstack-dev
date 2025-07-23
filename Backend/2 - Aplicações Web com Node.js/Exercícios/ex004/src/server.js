const express = require("express");
const authRouter = require("./routes/auth");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/auth', authRouter);

app.listen(PORT, () => console.log(`server running on http://localhost:${PORT}`));
