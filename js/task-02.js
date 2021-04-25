const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const searchUl =document.querySelector('#ingredients');
const methodIngredients = ingredients.map(ingredient => {
    const ingredientElement = document.createElement('li');
    ingredientElement.textContent = ingredient;
    return ingredientElement;
});
searchUl.append(...methodIngredients);
