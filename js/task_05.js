const input = document.querySelector('#name-input');
const nameInGreeting = document.querySelector('#name-output');

input.addEventListener('input', event => {
    event.target.value.length > 0
        ? nameInGreeting.textContent = event.target.value
        : nameInGreeting.textContent = 'незнакомец'
})