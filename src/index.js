import './styles.css';
import { TodoList } from './classes/todo-list.class';
import { crearTodoHTML } from './js/componentes';

export const todoList = new TodoList();
todoList.todos.forEach(crearTodoHTML);