// Query Selectors
const emailInput = document.querySelector('#email');
const emailController = document.querySelector('#email-controll');
const form = document.querySelector('#survey-form');
// Global Vars
let hasEmailError = false;
const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
let isEmailValid = false;
// Listeners 
emailInput.addEventListener('blur', validateEmailInput);
form.addEventListener('submit', validateFormAndSubmit);
// Functions 
function validateEmailInput(event) {
    const email = event.target.value;
    hasEmailError = !emailRegExp.test(email);
    if (hasEmailError) {
        setEmailErrorMessage();
        setEmailValidity(false);
    } else if (emailController.classList.contains('email-error')) {
        cleanEmailError();
        setEmailValidity(true);
    } else {
        setEmailValidity(true);
    }
}

function setEmailValidity(isValid) {
    isEmailValid = isValid;
}

function setEmailErrorMessage() {
    if (emailController.classList.contains('email-error')) return;
    emailInput.classList.add('error');
    const div = document.createElement('div');
    div.classList.add('email-error--message');
    div.innerHTML = 'Invalid Email';
    emailController.classList.add('email-error');
    emailController.appendChild(div);

}

function cleanEmailError() {
    if (emailController.classList.contains('email-error')) {
        emailController.classList.remove('email-error');
        emailController.lastElementChild.innerHTML = null;
        emailInput.classList.remove('error');
    }
}

function validateFormAndSubmit(e) {
    e.preventDefault();
    if (!isEmailValid) {
        return;
    }
    for(let i = 0, len = form.length; i < len; i++) {
        console.log(form.elements[i]);
    }
}