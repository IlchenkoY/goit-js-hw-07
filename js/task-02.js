const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const productListEl = document.querySelector('#ingredients');

const listEl = ingredients.map(ingredient => {
  const itemEl = document.createElement("li");
  itemEl.textContent = ingredient;

  return itemEl;
});

productListEl.append(...listEl);

