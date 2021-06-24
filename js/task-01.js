const listItems = document.querySelectorAll('.item');

console.log(`В списке ${listItems.length} категории.`);

listItems.forEach((li) => {
    console.log(
        `Категория: ${li.firstElementChild.textContent}
Количество элементов: ${li.lastElementChild.children.length}`);
});
