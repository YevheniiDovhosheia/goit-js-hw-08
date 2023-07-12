import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const inputEmail = document.querySelector('[name="email"]');
const textArea = document.querySelector('[name="message"]');

formEl.addEventListener('input', throttle(onLogin, 500));
formEl.addEventListener('submit', onSubmit);

const STORAGE_KEY = 'feedback-form-state';
let userData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

addContentInFields();

function onLogin(event) {
  userData[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(userData));
}

function onSubmit(event) {
  event.preventDefault();

  console.log(userData);

  localStorage.removeItem(STORAGE_KEY);

  formEl.reset();

  userData = {};
}

function addContentInFields() {
  textArea.value = userData.message || ' ';
  inputEmail.value = userData.email || ' ';
}
