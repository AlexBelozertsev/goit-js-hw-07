const input = document.querySelector('#controls > input');
const renderBtn = document.querySelector('button[data-action="render"]');
const destroyBtn = document.querySelector('button[data-action="destroy"]');
const boxes = document.querySelector('#boxes');
let div = [];

destroyBtn.addEventListener('click', destroyBoxes);
renderBtn.addEventListener('click', createBoxes);

function createDivs(amount) {
    let size = 30;
    for (let i = 0; i < amount; i++) {
        size += 10;
        const createDiv = document.createElement('div');
        createDiv.style.width = `${size}px`;
        createDiv.style.height = `${size}px`;
        createDiv.style.backgroundColor = `#${Math.random().toString(16).substr(-6)}`;
        div.push(createDiv);
    }
    boxes.append(...div);

};
function createBoxes() {
    const value = Number(input.value);
    createDivs(value);
};
function destroyBoxes() {
    div = [];
    boxes.innerHTML = '';
    input.value = '';
};