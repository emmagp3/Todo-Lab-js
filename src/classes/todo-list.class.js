export class TodoList {
  constructor() {
    this.todos = [];
  }

  nuevoTodo(todo) {
    this.todos.push(todo);
  }

  eliminarTodo(id) {
    
  }

  marcarCompletado(id) {
    this.todos.map((todo) => {
      if (todo.id === id) {
        todo.completado = !todo.completado;
      }
    })
  }

  eliminarCompletados() {}
}