// todo Напиши скрипт, который

// ? изменяет цвета фона элемента < body > через инлайн стиль при клике на button.change - color и
// ? выводит значение цвета в span.color.
// ? Для генерации случайного цвета используй функцию getRandomHexColor.
// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>
//

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// ! АЛГОРИТМ РЕШЕНИЯ

// * 1. Находим элементы по селектору через метод document.querySelector(selector).
// * 2. Создаем колбек - функцию, в которой телу документа присваиваем значение рандомного цвета.
// * 3. Для генерации случайного цвета используем функцию getRandomHexColor.
// * 4. Добавляем слушателей на событие click, используя метод addEventListener();

// ! РЕШЕНИЕ

const body = document.body;
const btnChangeColor= document.querySelector('.change-color');
const valueBackgroundColor= document.querySelector('.color');

const changesBackgroundColor = event => {
  const randomColor = getRandomHexColor();

  body.style.backgroundColor = randomColor;
  valueBackgroundColor.textContent = randomColor;
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

btnChangeColor.addEventListener('click', changesBackgroundColor);


