const conteinerElement = document.querySelectorAll('#counter button');
const resultElement = document.querySelector('#value');
const decrementButton = conteinerElement[0];
const incrementButton = conteinerElement[1];;
let counterValue = Number(resultElement.textContent);


const decrement = (() =>  {
     counterValue = counterValue - 1;
    return resultElement.textContent = `${counterValue}`;
})
const increment = (() =>  {
    counterValue = counterValue + 1;
    return resultElement.textContent = `${counterValue}`;
})

decrementButton.addEventListener("click", decrement);
incrementButton.addEventListener("click", increment);


