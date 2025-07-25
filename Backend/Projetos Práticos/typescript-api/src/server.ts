import express from "express";
import { router } from "./routes";
import { errorHandler } from "./middlewares/error-handler";

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use('/api', router);
app.use(errorHandler);

app.listen(PORT, () => console.log(`server running on http://localhost:${PORT}`));