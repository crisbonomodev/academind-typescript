import {Router} from 'express';
import {getTodo,createTodo, updateTodo, deleteTodo} from '../controllers/todosController';
const router = Router();

router.post('/',[],createTodo);
router.get('/',[],getTodo);
router.put('/:id', updateTodo);
router.delete('/:id', deleteTodo);


export default router;