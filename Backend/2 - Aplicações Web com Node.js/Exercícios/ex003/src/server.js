const express = require("express");
const router = require("./routes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(router);

app.listen(PORT, () => console.log(`server running on http://localhost:${PORT}`));