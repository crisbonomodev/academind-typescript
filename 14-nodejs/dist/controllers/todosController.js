"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.getTodo = exports.createTodo = void 0;
const todo_1 = require("../models/todo");
const TODOS = [];
// usamos RequestHandler para no tener que indicar cada uno de los tipos de req,res y next
const createTodo = (req, res, next) => {
    const text = req.body.text;
    const newTodo = new todo_1.Todo(Math.random().toString(), text);
    TODOS.push(newTodo);
    res.status(201).json({
        newTodo
    });
};
exports.createTodo = createTodo;
const getTodo = (req, res, next) => {
    res.status(200).json({
        todos: TODOS
    });
};
exports.getTodo = getTodo;
//Usamos generics para indicarle al RequestHandler que parametros recibimos
const updateTodo = (req, res, next) => {
    const { id } = req.params;
    const updatedText = req.body.text;
    const todoIndex = TODOS.findIndex(todo => todo.id === id);
    if (todoIndex < 0) {
        throw new Error('Todo not found');
    }
    TODOS[todoIndex] = new todo_1.Todo(TODOS[todoIndex].id, updatedText);
    res.status(200).json({
        updatedTodo: TODOS[todoIndex]
    });
};
exports.updateTodo = updateTodo;
const deleteTodo = (req, res, next) => {
    const { id } = req.params;
    const todoIndex = TODOS.findIndex(todo => todo.id === id);
    if (todoIndex < 0) {
        throw new Error('Todo not found');
    }
    TODOS.splice(todoIndex, 1);
    res.status(200).json({
        message: 'Todo Deleted!'
    });
};
exports.deleteTodo = deleteTodo;
//# sourceMappingURL=todosController.js.map