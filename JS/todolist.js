const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todolist");
const TODOS_KEY = "todos"
let toDos = [];

function saveTodo() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); 
}

function deleteTodo(event) {
const li = event.target.parentElement; 
li.remove();
toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
saveTodo();
}

function paintTodo(newTodo) {
const li = document.createElement("li");
li.id = newTodo.id ;
const span = document.createElement("span");
const todoBtn = document.createElement("button");
todoBtn. innerText = "OK";
li.appendChild(span);
li.appendChild(todoBtn);
todoBtn.addEventListener("click", deleteTodo); 
span.innerText = newTodo.text;
todoList.appendChild(li);
}

function onSubmitEvent(event) {
  event.preventDefault();  
  const newTodo = todoInput.value;
  todoInput.value = ""; 
  const newTodoObj = {
    text: newTodo, 
    id: Date.now(),
  };
  toDos.push(newTodoObj); 
  paintTodo(newTodoObj);  
  saveTodo();
}

todoForm.addEventListener("submit", onSubmitEvent);

const todoArray = localStorage.getItem(TODOS_KEY); 
if(todoArray !== null) {
  const parsedTodos = JSON.parse(todoArray);
  toDos = parsedTodos;
  parsedTodos.forEach(paintTodo);
}                                  

