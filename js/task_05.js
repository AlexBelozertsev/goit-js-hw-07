const input = document.querySelector('#name-input');
const nameInGreeting = document.querySelector('#name-output');

input.addEventListener('input', event => {
    const text = event.target.value;
    if (text.length > 0 && text.trim() !== '') {
        nameInGreeting.textContent = text.trim()
    }
    else nameInGreeting.textContent = 'незнакомец'
});