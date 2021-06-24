// const inputEl = document.querySelector('input');
// console.log(inputEl);
// const renderBtn = document.querySelector('button[data-action="render"]');
// console.log(renderBtn);
// const destroyBtn = document.querySelector('button[data-action="destroy"]');
// console.log(destroyBtn);


const input = document.querySelector("input");
const createBtn = document.querySelector("button[data-action=render]");
const destroyBtn = document.querySelector("button[data-action=destroy]");
const container = document.querySelector("#boxes");

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
    container.classList.add("boxes");
    amount = Number(input.value);
    let startBoxSize = 30;
    if (input.value !== '0' && input.value !== '' && container.children.length !== amount) {
        do {
    let box = document.createElement("div");
    box.style.width = startBoxSize + "px";
    box.style.height = startBoxSize + "px";
    box.style.backgroundColor = `${randonRGB()}`;
    container.appendChild(box);
    startBoxSize += 10;
  } while (container.children.length < amount);
    }
}

function destroyBoxes() {
    container.innerHTML = "";
    input.value = ""
  // [...container.children].forEach(box => box.remove());
}

const randomColor = () => Math.floor(Math.random() * 256);
const randonRGB = () =>
  `rgb(${randomColor()},${randomColor()},${randomColor()})`;