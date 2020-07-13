const formBox = document.querySelector('.js-toDoList');
const textBox = formBox.querySelector('input');
const greetings = document.querySelector('.js-greetings');

const UserName = "currentUser";
const showingClassName = "showing";

function showingName(text) {
    formBox.classList.remove(showingClassName);
    greetings.classList.add(showingClassName);
    greetings.innerText = `안녕하세요. ${text}님`;
}

function svaeName(text) {
    localStorage.setItem(UserName, text);
}

function handleSubmitEvent(event) {
    event.preventDefault();
    const currentValue = textBox.value;
    showingName(currentValue);
    svaeName(currentValue);
}

function askForName() {
    formBox.classList.add(showingClassName);
    formBox.addEventListener("submit", handleSubmitEvent);
}

function loadName() {
    const currentUser = localStorage.getItem(UserName);
    if (currentUser === null) {
        askForName();
    } else {
        showingName(currentUser);
    }
}

function init() {
    loadName();
}

init();