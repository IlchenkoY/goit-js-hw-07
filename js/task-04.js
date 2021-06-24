const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector("#value");

let counter = 0;

console.log(isNaN(valueEl.textContent));

decrementBtn.addEventListener('click', () => {
    valueEl.textContent = counter -= 1;
});

incrementBtn.addEventListener('click', () => {
    valueEl.textContent = counter += 1;
});
