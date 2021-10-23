const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todolist");
const TODOS_KEY = "todos"
let toDos = [];

function saveTodo() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //toDos배열을 string으로 바꿔서 localStorage에 저장
}

function deleteTodo(event) {
const li = event.target.parentElement; //방금 일어난 이벤트의 객체(button)의 부모요소
li.remove();
toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
saveTodo();
}

function paintTodo(newTodo) {
const li = document.createElement("li");
li.id = newTodo.id ;
const span = document.createElement("span");
const todoBtn = document.createElement("button")
todoBtn. innerText = "X";
li.appendChild(span);
li.appendChild(todoBtn);
todoBtn.addEventListener("click", deleteTodo);  //버튼을 누르면 list 삭제하는 함수호출
span.innerText = newTodo.text;
todoList.appendChild(li);
}

function onSubmitEvent(event) {
  event.preventDefault();   //이벤트의 기본동작 없애기
  const newTodo = todoInput.value;
  todoInput.value = ""; // 이벤트가 발생시 input의 value값을 안보이게 하기
  const newTodoObj = {
    text: newTodo, 
    id: Date.now(),
  };
  toDos.push(newTodoObj);  // toDos 배열 안에 input의 value값 저장하기
  paintTodo(newTodoObj);  
  saveTodo();
}

todoForm.addEventListener("submit", onSubmitEvent);

const todoArray = localStorage.getItem(TODOS_KEY); //string으로 바꾼 toDos array를 변수에 저장

if(todoArray !== null) {
  const parsedTodos = JSON.parse(todoArray);//JS가 이해할 수 있는 object로 바꿈
  toDos = parsedTodos;
  parsedTodos.forEach(paintTodo); // object 각각 item에 paintTodo함수 실행 
}                                  //브라우저를 새로고침 해도 저장된 value가 보임 

