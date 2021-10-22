const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todolist");

function paintTodo(newTodo) {
const li = document.createElement("li");
const span = document.createElement("span");
li.appendChild(span);
span.innerText = newTodo;
todoList.appendChild(li);
}

function onSubmitEvent(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  paintTodo(newTodo);
}



todoForm.addEventListener("submit", onSubmitEvent);