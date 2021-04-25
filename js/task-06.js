const inputElement = document.querySelector('#validation-input');

const inputValidation = ((event) => {
    if (event.currentTarget.value.length === Number(inputElement.dataset.length)) {
        event.currentTarget.classList.add('valid');
        event.currentTarget.classList.remove('invalid')
    }
    else {
        event.currentTarget.classList.add('invalid')
        event.currentTarget.classList.remove('valid')
    }
})
    
inputElement.addEventListener('input', inputValidation);

