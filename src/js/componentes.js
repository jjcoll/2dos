import {Todo} from './classes/todo.class.js' 
import {todoList} from '../index.js' 

// Referencias en HTML
const todoListEl = document.querySelector('.todo-list')
const todoInput = document.querySelector('.add-todo__input')
const remveCompletedBtn = document.querySelector("#remove-completed")

// crear en HTML todo
export const crearTodoHtml = (todo) => {
  let html = `<div class="todo" data-id=${todo.id}> 
          <p class="task-name">${todo.task}</p>
          <ion-icon class="close-icon" name="close-outline"></ion-icon>
          </div>
        `

  const div = document.createElement('div')
  div.innerHTML = html;

  todoListEl.append( div.firstChild )

  return html
}

// manejar input del todo
todoInput.addEventListener('keyup', (ev) => {
  if (ev.key === "Enter" && todoInput.value) { // "" es falso en JS 
  
    const nuevoTodo = new Todo( todoInput.value )
    todoInput.value = ""
    todoList.newTodo( nuevoTodo )
    crearTodoHtml( nuevoTodo )
  }
})

// Manejar clicks en todo list
todoListEl.addEventListener('click', (ev) => {
  
  const todoElement = ev.target.parentElement
  const todoName = ev.target.localName
  const todoId = todoElement.getAttribute("data-id")
 
  if (todoName === "p") {
    ev.target.classList.toggle("completed")
    todoList.toggleTodo( todoId )
    console.log(todoList)
  } else if(todoName === "ion-icon") {
    todoElement.remove()
    todoList.removeTodo( todoId )
    console.log(todoList)
  }
})


// Eliminar todos completados

remveCompletedBtn.addEventListener('click', () => {
  todoList.deleteCompleted()
  // tiene que ir al reves para evitar que se rompa 
  for ( let i = todoListEl.children.length - 1; i >= 0; i-- ) {
    console.log(todoListEl.children[i].children[0])
    if (todoListEl.children[i].children[0].classList.contains("completed")) {
      todoListEl.children[i].remove()
    }
  }
})




