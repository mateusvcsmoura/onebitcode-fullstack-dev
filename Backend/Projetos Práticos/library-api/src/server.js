require('dotenv').config();

const express = require("express");
const authRouter = require('./routes/auth');
const apiRouter = require('./routes/api');
const errorMiddleware = require('./middlewares/error-middleware');
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use('/auth', authRouter);
app.use('/api', apiRouter);

app.use(errorMiddleware);

app.listen(PORT, () => console.log(`server running on http://localhost:${PORT}`));
