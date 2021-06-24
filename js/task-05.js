const inputEl = document.querySelector("#name-input")
const userName = document.querySelector("#name-output")

inputEl.addEventListener('input', (event) => userName.textContent = event.currentTarget.value || "незнайомець")
