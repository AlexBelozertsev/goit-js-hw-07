const items = document.querySelectorAll('.item');
console.log(`В списке ${items.length} категорий`);
items.forEach(item => {
    console.log(`Категория: ${item.firstElementChild.textContent}`);
    console.log(`Количество элементов: ${item.lastElementChild.children.length}`);
})

