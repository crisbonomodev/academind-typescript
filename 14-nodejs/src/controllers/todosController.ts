import { RequestHandler } from 'express';
import {Todo} from '../models/todo';

const TODOS: Todo[] = [];

// usamos RequestHandler para no tener que indicar cada uno de los tipos de req,res y next
export const createTodo: RequestHandler = (req, res, next) => {
    const text = (req.body as {text: string}).text;
    const newTodo = new Todo(Math.random().toString(),text);

    TODOS.push(newTodo);
    res.status(201).json({
        newTodo
    });
};

export const getTodo: RequestHandler = (req, res, next) => {
    res.status(200).json({
        todos: TODOS
    });
};

//Usamos generics para indicarle al RequestHandler que parametros recibimos
export const updateTodo: RequestHandler<{id: string}> = (req, res, next) => {
    const {id} = req.params;

    const updatedText = (req.body as {text: string}).text;

    const todoIndex = TODOS.findIndex(todo => todo.id === id);

    if (todoIndex < 0) {
        throw new Error('Todo not found');
    }

    TODOS[todoIndex] = new Todo(TODOS[todoIndex].id,updatedText);

    res.status(200).json({
        updatedTodo : TODOS[todoIndex]
    });
};

export const deleteTodo: RequestHandler<{id: string}> = (req, res, next) => {
    const {id} = req.params;
    const todoIndex = TODOS.findIndex(todo => todo.id === id);

    if (todoIndex < 0) {
        throw new Error('Todo not found');
    }

    TODOS.splice(todoIndex,1)

    res.status(200).json({
        message: 'Todo Deleted!'
    });
}; 