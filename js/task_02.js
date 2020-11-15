const ingredientsRef = document.querySelector('#ingredients');

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const createList = ingredient => {
    const item = document.createElement('li');
    item.textContent = ingredient;
    ingredientsRef.append(item);
    return ingredientsRef;
}
const ingredientRef = ingredients.map(ingredient => createList(ingredient))

// console.log(createList(...ingredients));