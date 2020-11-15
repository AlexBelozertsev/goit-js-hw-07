const input = document.querySelector('#controls > input');
const container = document.querySelector('#controls')
const renderBtn = document.querySelector('button[data-action="render"]');
const destroyBtn = document.querySelector('button[data-action="destroy"]');

renderBtn.addEventListener('click', event => {
    const item = document.createElement('div');
    container.appendChild(item) += event.target.value;
})