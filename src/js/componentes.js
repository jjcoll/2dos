import {Todo} from './classes/todo.class.js' 
import {todoList} from '../index.js' 

// Referencias en HTML
const todoListEl = document.querySelector('.todo-list')
const todoInput = document.querySelector('.add-todo__input')

// crear en HTML todo
export const crearTodoHtml = (todo) => {
  let html = ` 
          <p class="task-name ${ (todo.completed) ? "completed" : "" }">${todo.task}</p>
          <ion-icon class="close-icon" name="close-outline"></ion-icon>
        `

  const div = document.createElement('div')
  div.classList.add('todo')
  div.innerHTML = html;

  todoListEl.append( div )

  return html
}

// manejar input del todo
todoInput.addEventListener('keyup', (ev) => {
  if (ev.key === "Enter" && todoInput.value) { // "" es falso en JS 
  
    console.log("enter pressed")
    const nuevoTodo = new Todo( todoInput.value )
    todoInput.value = ""
    todoList.newTodo( nuevoTodo )
    crearTodoHtml( nuevoTodo )
  }
})
