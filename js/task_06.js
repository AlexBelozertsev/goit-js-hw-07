const input = document.querySelector('#validation-input');
const inputLength = input.getAttribute('data-length');
// 'change' || 'blur'
input.addEventListener('change', event => {
    if (event.target.value.length === 0 || event.target.value.trim() === '') {
        input.classList.remove('invalid') || input.classList.remove('valid')
    } else {
        event.target.value.length === Number(inputLength)
        ? (input.classList.add('valid') || input.classList.remove('invalid'))
        : (input.classList.add('invalid') || input.classList.remove('valid'));
    }
})