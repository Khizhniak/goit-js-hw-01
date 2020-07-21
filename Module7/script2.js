const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

  function inner(ingredients) {
      for (let i = 0; i < ingredients.length; i++) {
        const li = document.createElement("li");
        li.textContent = `${ingredients[i]}`;
        document.querySelector("#ingredients").appendChild(li)
        console.log(li)
    }

}

inner(ingredients)