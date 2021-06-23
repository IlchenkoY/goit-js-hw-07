const inputEl = document.querySelector('input')

const checkLength = (event) => {
    const validLength = Number(inputEl.dataset.length)
    if (event.currentTarget.value.length === validLength) {
        inputEl.classList.remove('invalid');
        inputEl.classList.add('valid');
    } else {
        inputEl.classList.add('invalid');
        inputEl.classList.remove('valid');
    }
}

inputEl.addEventListener('blur', checkLength)