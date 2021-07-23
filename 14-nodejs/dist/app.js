"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todos_1 = __importDefault(require("./routes/todos"));
const app = express_1.default();
const port = 3000;
//body parser
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
//Routes
app.use('/todos', todos_1.default);
//Middlewares de error handling
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map