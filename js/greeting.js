const inputForm = document.querySelector('#inputForm'); 
const inputText = document.querySelector('#inputText'); 
const inputSubmit = document.querySelector('#inputSubmit'); 
const greeting = document.querySelector('#greeting'); 

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY ="username";

function fnLoginForm(e){
  e.preventDefault();
  const username=inputText.value;
  localStorage.setItem(USERNAME_KEY,username);
  inputForm.classList.add(HIDDEN_CLASSNAME);
  printGreeting(username);
}

function printGreeting(username){ 
  greeting.innerText=`Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY)

if(savedUsername==null){
  inputForm.classList.remove(HIDDEN_CLASSNAME);
  inputForm.addEventListener('submit', fnLoginForm);
}
else{
  printGreeting(savedUsername);
}

