const express = require("express");
const authRouter = require("./routes/auth");
const homeRouter = require("./routes/home");
const adminRouter = require("./routes/admin");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/auth', authRouter);
app.use(homeRouter);
app.use('/admin', adminRouter);

app.listen(PORT, () => console.log(`server running on http://localhost:${PORT}`));
