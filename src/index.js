import './styles.css';
import { Todo } from './classes/todo.class';
import { TodoList } from './classes/todo-list.class';

const todoList = new TodoList();
const tarea = new Todo('Aprender JavaScript');
todoList.nuevoTodo(tarea);