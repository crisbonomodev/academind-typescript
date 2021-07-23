"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todosController_1 = require("../controllers/todosController");
const router = express_1.Router();
router.post('/', [], todosController_1.createTodo);
router.get('/', [], todosController_1.getTodo);
router.put('/:id', todosController_1.updateTodo);
router.delete('/:id', todosController_1.deleteTodo);
exports.default = router;
//# sourceMappingURL=todos.js.map