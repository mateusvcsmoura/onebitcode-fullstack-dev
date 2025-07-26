"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const error_handler_1 = require("./middlewares/error-handler");
const PORT = process.env.PORT || 3000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/api', routes_1.router);
app.use(error_handler_1.errorHandler);
app.listen(PORT, () => console.log(`server running on http://localhost:${PORT}`));
