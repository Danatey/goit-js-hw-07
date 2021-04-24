const inputElement = document.querySelector('#name-input');
const nameElement = document.querySelector('#name-output');

const createName = (() => {
    if (inputElement.value.length >=1) {
        return nameElement.textContent = inputElement.value;   
    }
    else nameElement.textContent = 'незнакомец';
})
inputElement.addEventListener('input', createName)