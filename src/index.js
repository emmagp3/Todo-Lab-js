import './styles.css';
import { Todo } from './classes/todo.class';
import { TodoList } from './classes/todo-list.class';
import { crearTodoHTML } from './js/componentes';

export const todoList = new TodoList();
const tarea = new Todo('Aprender JavaScript');
todoList.nuevoTodo(tarea);
console.log(tarea);
console.log(tarea);
crearTodoHTML(tarea);