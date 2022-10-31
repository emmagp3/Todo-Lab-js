import { Todo } from "../classes/todo.class";
import { todoList } from "../index"

const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');
const bntEliminarCompletados = document.querySelector('.clear-completed');
const ulFiltros = document.querySelector('.filters');
const anchorFiltros = document.querySelectorAll('.filtro');

export const crearTodoHTML = (todo) => {
  const todoHTML = `
  <li class="${ todo.completado ? 'completed' : '' }" data-id="${ todo.id }">
    <div class="view">
      <input class="toggle" type="checkbox" ${ todo.completado ? 'checked' : '' }>
      <label>${ todo.tarea }</label>
      <button class="destroy"></button>
    </div>
    <input class="edit" value="Create a TodoMVC template">
  </li>
  `;

  const div = document.createElement('div');
  div.innerHTML = todoHTML;
  divTodoList.append(div.firstElementChild);
  return div.firstElementChild;
}

txtInput.addEventListener('keyup', (event) => {
  // console.log(event.key === 'Enter' && txtInput.value.length > 0);
  if (event.key === 'Enter' && txtInput.value.length > 0) {
    const newTodo = new Todo(txtInput.value)
    todoList.nuevoTodo(newTodo);
    crearTodoHTML(newTodo);
    txtInput.value = '';
  }
});

divTodoList.addEventListener('click', (event) => {
  const elem = event.target.localName;
  const todoElem = event.target.parentElement.parentElement;
  const todoId = todoElem.getAttribute('data-id');

  if (elem.includes('input')) {
    todoList.marcarCompletado(todoId);
    todoElem.classList.toggle('completed');
  }
  else if (elem.includes('button')) {
    todoList.eliminarTodo(todoId);
    // todoElem.remove(); 
    divTodoList.removeChild(todoElem);
  }
});

bntEliminarCompletados.addEventListener('click', () => {
  todoList.eliminarCompletados();
  const completadosHTML = document.querySelectorAll('.completed');
  completadosHTML.forEach((completadoHtml) => completadoHtml.remove());
});

ulFiltros.addEventListener('click', (event) =>  {
  const filter = event.target.text;
  if (!filter) return;

  anchorFiltros.forEach(el => el.classList.remove('selected'));
  event.target.classList.add('selected');
  
  for (const el of divTodoList.children) {
    el.classList.remove('hidden');
    const completado = el.classList.contains('completed');
    
    if (filter === 'Pendientes') {
      if (completado) {
        el.classList.add('hidden');
      }
    }
    else if (filter === 'Completados') {
      if (!completado) {
        el.classList.add('hidden');
      }
    }
  }
});