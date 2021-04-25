const inputElement = document.querySelector('#font-size-control');
const textElement = document.querySelector('#text');

const rangeFontSize = ((event) => {
    textElement.style.fontSize = `${inputElement.value}px`;
});

inputElement.addEventListener('input', rangeFontSize);