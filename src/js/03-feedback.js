import throttle from 'lodash.throttle';

const INPUT_VALUES_KEY = "feedback-form-state";
const inputValue = document.querySelector("input");
const message = document.querySelector("textarea");
const form = document.querySelector(".feedback-form");


inputValue.addEventListener('input', throttle(saveInputs, 500));
message.addEventListener('input', throttle(saveInputs, 500));
form.addEventListener('submit', onFormSubmit);

fillInputs();

function saveInputs() {
    const inputsData = {
        email: inputValue.value,
        message: message.value,
    }
    localStorage.setItem(INPUT_VALUES_KEY, JSON.stringify(inputsData));
};

function onFormSubmit(event) {
    event.preventDefault();
    event.currentTarget.reset();
    const savedKeyValue = localStorage.getItem(INPUT_VALUES_KEY);
    try {
        const savedObj = JSON.parse(savedKeyValue);
        console.log(savedObj);
    } catch (error) {
        console.log(error.name); 
        console.log(error.message);
    };
        
    localStorage.removeItem(INPUT_VALUES_KEY);
};

function fillInputs() {
    const savedTexts = localStorage.getItem(INPUT_VALUES_KEY);
       if (savedTexts) {
        const json = JSON.parse(savedTexts);
        inputValue.value = json.email;
        message.value = json.message;
    }
};