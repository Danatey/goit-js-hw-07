const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
}
const randomColorR = getRandomInt(0, 255);
const randomColorG = getRandomInt(0, 255);
const randomColorB = getRandomInt(0, 255);

const arrayObjectColor = [
    { color: `rgb(${randomColorR}, ${randomColorG} , ${randomColorB})`},
];

// console.log(arrayObjectColor)
const formElement = document.querySelector('#controls');
const inputElement = formElement.querySelector('input');
const buttonRenderElement = formElement.querySelectorAll('[data-action="render"]');
const buttonDestroyElement = formElement.querySelectorAll('[data-action="destroy"]');
const boxesElement = document.querySelector('#boxes');

const createBoxes = amount => {
    return amount.map(amount => {
        const newBoxElement = document.createElement('div');
        newBoxElement.classList.add('color-div');
        newBoxElement.style.background = amount.color;
        newBoxElement.style.width = '30px';
        newBoxElement.style.height = '30px';
        return newBoxElement;
    });
};
inputElement.value = 22;
const amount = inputElement.value;
console.log(amount);

// const a = (() => {
//     return amount;
// });

// const elements = createBoxes(arrayObjectColor);

// boxesElement.append(...elements);

// buttonRenderElement.addEventListener("click", a);

