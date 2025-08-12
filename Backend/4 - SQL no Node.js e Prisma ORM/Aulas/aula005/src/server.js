const express = require("express");
const userRouter = require("./routes/users");
const postsRouter = require("./routes/posts");
const tagsRouter = require("./routes/tags");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/users', userRouter);
app.use('/api/posts', postsRouter);
app.use('/api/tags', tagsRouter);

app.listen(PORT, () => console.log(`server running on http://localhost:${PORT}`));

