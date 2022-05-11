import throttle from 'lodash.throttle';
const STORAGE_KEY = 'feedback-form-state';

const refs = {
formEl: document.querySelector(`.feedback-form`),
emailEl: document.querySelector(`input`),
message: document.querySelector(`textarea`),
}

const formElSubmit = refs.formEl.addEventListener(`submit`, onFormSubmit);
const formElText = refs.formEl.addEventListener(`input`, throttle(onFormElText, 500));


   

let formData = {email: ' ', message: ' '};

function onFormSubmit(event) {
 event.preventDefault();

 console.log(formData);

 localStorage.removeItem(STORAGE_KEY);

 event.currentTarget.reset();
}

savedFormElText(); 
 
function onFormElText(event) {
  
 formData[event.target.name] = event.target.value; 

 localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
 
};

  function savedFormElText() {
const formText = localStorage.getItem(STORAGE_KEY);  

  if(formText) {

 const formTextParse = JSON.parse(formText);

refs.emailEl.value = formTextParse.email;
    
refs.message.value = formTextParse.message;
  
 }
   
}
  
