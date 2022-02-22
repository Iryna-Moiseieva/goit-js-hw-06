// todo Напиши скрипт, который:

// ? реагирует на изменение значения input#font - size - control(событие input) и
// ? изменяет инлайн - стиль span#text ? обновляя свойство font - size.
// ? В результате при перетаскивании ползунка будет меняться размер текста.
// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>

// ! АЛГОРИТМ РЕШЕНИЯ

// * 1. Находим элементы inputSize и text по CSS - селектору через метод document.querySelector(selector).
// * 2. Создаем колбек-функцию, которая увеличивает шрифт.
// * 3. Добавляем слушателей на событие input, используя метод addEventListener();

// ! РЕШЕНИЕ

const inputSize = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

const checkFontSize = event => {
    text.style.fontSize = event.currentTarget.value + 'px';
};

inputSize.addEventListener('input', checkFontSize);

