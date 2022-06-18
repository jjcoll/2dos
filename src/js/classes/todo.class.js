// El proposito de esta clase, es ser la clase que tengan todos los todos de la lista de tareas

export class Todo {
  static fromJSON({ id, task, completed, created }) {
    const tempTodo = new Todo( task )
    tempTodo.id = id
    tempTodo.completed = completed
    tempTodo.creado = created
  }

  constructor(task) {
    // Solo se tiene que pasar la tarea a la hora de crear una tarea
    this.task = task

    // Se crea automaticamente
    this.id = new Date().getTime()
    this.completed = false
    this.created = new Date()
  }
}
