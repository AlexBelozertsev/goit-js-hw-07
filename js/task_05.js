const input = document.querySelector('#name-input');
const nameInGreeting = document.querySelector('#name-output');

input.addEventListener('input', event => {
    (event.target.value.length > 0 && event.target.value.trim() !== '')
        ? nameInGreeting.textContent = event.target.value.trim()
        : nameInGreeting.textContent = 'незнакомец'
});