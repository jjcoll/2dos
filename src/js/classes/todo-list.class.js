// El proposito de esta clase es manejar nuestra lista de Todos
// por ejemplo a la hora de escribir filtrar la lista etc. 

import {Todo} from './todo.class'

export class TodoList {

  constructor() {
    this.loadLocalStorage()
  }

  newTodo(todo) {
    this.todos.push(todo);
    this.saveLocalStorage()
  }
  
  removeTodo ( id ) {
    this.todos = this.todos.filter(todo => todo.id != id)
    this.saveLocalStorage()
  }

  toggleTodo ( id ) {  // marca y desmarca el todo como completado
    
    for (const todo of this.todos) {

      if (todo.id == id) {
        todo.completed = !todo.completed
        break;
      }
    }

    this.saveLocalStorage()

  }

  deleteCompleted() {
    this.todos = this.todos.filter(todo => !todo.completed)
    this.saveLocalStorage()
  }

  saveLocalStorage() {
    localStorage.setItem('todo', JSON.stringify( this.todos ))
  }

  loadLocalStorage() {
    
      this.todos = ( localStorage.getItem('todo') )
      ? JSON.parse( localStorage.getItem('todo') ) 
      : [];

    this.todos = this.todos.map( Todo.fromJSON )

  }

}
