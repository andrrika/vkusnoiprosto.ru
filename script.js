<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="2575.4">
  <style type="text/css">
  </style>
</head>
<body>
</body>
</html>
document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("recipe-modal");
    const modalTitle = document.getElementById("recipe-title");
    const modalIngredients = document.getElementById("recipe-ingredients");
    const modalInstructions = document.getElementById("recipe-instructions");
    const closeModal = document.querySelector(".close");

    const recipes = {
        "omelet": {
            title: "Омлет с овощами",
            ingredients: ["Яйца – 2 шт.", "Болгарский перец – ½ шт.", "Шпинат – горсть", "Помидор – 1 шт.", "Оливковое масло – 1 ч. л.", "Соль, перец – по вкусу"],
            instructions: "1. Нарежьте овощи. 2. Взбейте яйца с солью и перцем. 3. Разогрейте сковороду с маслом и обжарьте овощи. 4. Вылейте яйца, готовьте 5 минут под крышкой."
        },
        "oatmeal": {
            title: "Овсянка с бананом и орехами",
            ingredients: ["Овсяные хлопья – 50 г", "Молоко или вода – 200 мл", "Банан – 1 шт.", "Грецкие орехи – 10 г", "Мед – 1 ч. л."],
            instructions: "1. Доведите молоко до кипения. 2. Добавьте овсянку, варите 3-5 минут. 3. Добавьте нарезанный банан, орехи и мед."
        },
        "cottage-cheese": {
            title: "Творог с медом и ягодами",
            ingredients: ["Творог (5%) – 150 г", "Мед – 1 ч. л.", "Ягоды (клубника, черника) – 50 г", "Орехи – 10 г"],
            instructions: "1. Выложите творог в миску. 2. Добавьте мед и ягоды. 3. Посыпьте орехами и перемешайте."
        },
        "chicken-buckwheat": {
            title: "Куриная грудка с гречкой",
            ingredients: ["Куриная грудка – 150 г", "Гречка – 50 г", "Сливочное масло – 10 г", "Соль, перец – по вкусу"],
            instructions: "1. Отварите гречку. 2. Обжарьте куриную грудку или запеките в духовке. 3. Смешайте с гречкой, добавьте масло."
        },
        "fish-potato": {
            title: "Рыба с картофелем",
            ingredients: ["Филе рыбы – 150 г", "Картофель – 2 шт.", "Растительное масло – 1 ст. л.", "Соль, перец – по вкусу"],
            instructions: "1. Очистите и отварите картофель. 2. Обжарьте или запеките рыбу. 3. Подавайте с картофелем."
        }
    };

    document.querySelectorAll(".recipe-link").forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            let recipeKey = this.getAttribute("data-recipe");
            if (recipes[recipeKey]) {
                modalTitle.innerText = recipes[recipeKey].title;
                modalIngredients.innerHTML = recipes[recipeKey].ingredients.map(ing => `<li>${ing}</li>`).join("");
                modalInstructions.innerText = recipes[recipeKey].instructions;
                modal.style.display = "flex";
            }
        });
    });

    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    window.addEventListener("click", function (e) {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});