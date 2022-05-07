const formEl = document.querySelector(`.feedback-form`);
console.log(formEl);

const formTextEl = formEl.addEventListener(`input`, onFormSubmit);

savedFormText();

function onFormSubmit(event) {
 event.preventDefault();
 console.log(event.target.value);
 localStorage.setItem("feedback-form-state", JSON.stringify({email: "event.target.value", message: ""}));
 event.currentTarget.reset();
}

function savedFormText() {
    const formText = localStorage.getItem("feedback-form-state");

    if(formText) {
     console.log(JSON.parse(formText));
    }
}
