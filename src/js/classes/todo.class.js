// El proposito de esta clase, es ser la clase que tengan todos los todos de la lista de tareas

export class Todo {

  constructor( task ) {
    // Solo se tiene que pasar la tarea a la hora de crear una tarea
    this.task = task;

    // Se crea automaticamente
    this.id = new Date().getTime(); 
    this.completed = false;
    this.creado = new Date();
  }

}
