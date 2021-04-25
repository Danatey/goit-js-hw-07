const searchCategories = document.querySelector('ul#categories');
const quantityElements = searchCategories.children.length;
console.log(`В списке ${quantityElements} категории.`);
const newArray = [...searchCategories.children];
newArray.forEach((item) => {
    const searchTitle = item.querySelector('h2');
    const textElement = searchTitle.textContent;
    console.log(`Категория: ${textElement}`);
    const searchItemList = item.querySelector('ul');
    const quantityItem = searchItemList.children.length;
    console.log(`Количество элементов: ${quantityItem}`);
});