const input = document.querySelector('#validation-input');
const inputLength = input.getAttribute('data-length');

input.addEventListener('change', event => {
    const text = event.target.value;

    if (text.length === 0 || text.trim() === '') {
        input.classList.remove('invalid') || input.classList.remove('valid')
    }
    else addClass(event)
});

function addClass(event) {
    if (event.target.value.length === Number(inputLength)) {
        input.classList.add('valid') || input.classList.remove('invalid')
    }
    else input.classList.add('invalid') || input.classList.remove('valid')
}