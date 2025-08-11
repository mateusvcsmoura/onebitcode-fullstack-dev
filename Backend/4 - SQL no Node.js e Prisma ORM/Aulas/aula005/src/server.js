const express = require("express");
const userRouter = require("./routes/users");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/users', userRouter);

app.listen(PORT, () => console.log(`server running on http://localhost:${PORT}`));

