const ingredientsRef = document.querySelector('#ingredients');

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const items = [];
ingredients.map(ingredient => {
  const item = document.createElement('li');
  item.textContent = ingredient;
  items.push(item)
})

ingredientsRef.append(...items)