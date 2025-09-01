import cors from "cors";
import express from "express";
import { router } from "./router";
import { errorHandlerMiddleware } from "./middlewares/error-handler";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use('/api', router);
app.use(errorHandlerMiddleware);

app.listen(PORT, () => console.log(`server running on http://localhost:${PORT}`));

