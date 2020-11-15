const input = document.querySelector('#controls > input');
const renderBtn = document.querySelector('button[data-action="render"]');
const destroyBtn = document.querySelector('button[data-action="destroy"]');
const boxes = document.querySelector('#boxes');

destroyBtn.addEventListener('click', destroyBoxes);
renderBtn.addEventListener('click', createBoxes);

function createDivs(amount) {
    let size = 30;
    for (let i = 1; i < amount; i++) {
        size += 10;
        const createDiv = document.createElement('div');
        createDiv.style.width = `${size}px`;
        createDiv.style.height = `${size}px`;
        createDiv.style.backgroundColor='#' + ( Math.random() * 0xFFFFF0 << 0 ).toString(16);
        boxes.appendChild(createDiv);
    }
};
function createBoxes() {
    const value = Number(input.value);
    createDivs(value);
}

function destroyBoxes() {
    boxes.innerHTML = '';
    input.value = '';
};