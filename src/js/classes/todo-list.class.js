// El proposito de esta clase es manejar nuestra lista de Todos
// por ejemplo a la hora de escribir filtrar la lista etc. 

export class TodoList {

  constructor() {
    this.todos = []
  }

  newTodo(todo) {
    this.todos.push(todo);
  }
  
  removeTodo ( id ) {

  }

  toggleTodo ( id ) {

  }

  deleteCompleted() {

  }

}
