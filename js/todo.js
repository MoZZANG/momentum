const ul=document.getElementById('todo-list');
const todoForm=document.getElementById('todo-form');
const todoInput=document.querySelector('#todo-form input');

let ToDoArr=[]


function deleteToDo(e){
  const li=e.target.parentElement;
  console.log(typeof li.id)
  li.remove();
  ToDoArr=ToDoArr.filter((todo)=> todo.id !==parseInt(li.id));
  saveToDo();
}

function saveToDo(){
  localStorage.setItem("todos",JSON.stringify(ToDoArr));  
}

function paintToDo(newToDoObj){   
  const li = document.createElement('li');
  li.id=newToDoObj.id;
  const span = document.createElement('span');
  const button = document.createElement('button');
  span.innerText =newToDoObj.text;
  button.innerText="X"
  li.appendChild(span);
  li.appendChild(button);
  ul.appendChild(li); 
  button.addEventListener('click',deleteToDo)
}

function handleToDoSubmit(e){
  e.preventDefault();
  const newToDoObj={text:todoInput.value, id:Date.now()};
  ToDoArr.push(newToDoObj); 
  paintToDo(newToDoObj); 
  saveToDo();
  todoInput.value="";
}
if(localStorage.getItem("todos")!==null){
  const parsedToDos= JSON.parse(localStorage.getItem("todos"));
 ToDoArr = parsedToDos;
 parsedToDos.forEach(paintToDo);
}


todoForm.addEventListener('submit',handleToDoSubmit);



