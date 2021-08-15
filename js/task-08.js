const inputEl = document.querySelector("input");
const createBtn = document.querySelector("button[data-action=render]");
const destroyBtn = document.querySelector("button[data-action=destroy]");
const container = document.querySelector("#boxes");

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  amount = Number(inputEl.value);
  const minNumber = inputEl.min;
  const maxNumber = inputEl.max;
  let startBoxSize = 30;

  if (amount < minNumber || amount > maxNumber) return alert(`Введите число от ${minNumber} до ${maxNumber}`);

  if (container.children.length !== 0) {
    let result = container.lastElementChild.style.width;
    let lastElWidth = Number(result.split("").slice(0, -2).join(''));
    startBoxSize = lastElWidth + 10;
  }

  if (inputEl.value !== '0' && inputEl.value !== '' && container.children.length !== amount && Number(inputEl.value) <= 100) {
    if (container.children.length !== 0) {
      amount -= container.children.length
    }
    let boxes = [];

    for (let i = 0; i < amount; i++) {
      let box = document.createElement("div");
      box.style.width = startBoxSize + "px";
      box.style.height = startBoxSize + "px";
      box.style.backgroundColor = `${randonRGB()}`;
      startBoxSize += 10;
      boxes.push(box);
    }

    container.append(...boxes);
  }
}

function destroyBoxes() {
  container.innerHTML = "";
  inputEl.value = "";
}


const randomColor = () => Math.floor(Math.random() * 256);
const randonRGB = () => `rgb(${randomColor()},${randomColor()},${randomColor()})`;