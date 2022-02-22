// todo Напиши скрипт.

// ? Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div >

// ? Создай переменную counterValue, в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// ? Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// ? Обновляй интерфейс новым значением переменной counterValue.

// ! АЛГОРИТМ РЕШЕНИЯ

// * 1. Находим элементы каждой кнопки и спана по CSS - селектору через метод document.querySelector(selector).
// * 2. Cоздаем переменную counterValue с текущим значением счетчика и инициализируем её значением 0.
// * 3. Создаем колбек-функцию, которая при клике  увеличевает или уменьшает значение counterValue на единицу.
//      Для коллбэка можно(и желательно) использовать отдельную функцию и передавать на неё ссылку.
//      Именованная функция повышает читаемость кода.

// * 4. Добавляем слушателей кликов на кнопки, используя метод addEventListener();
//      Метод addEventListener()
//      Добавляет слушателя события на элемент.
//      element.addEventListener(event, handler, options);
//      event - имя события, строка, например "click".
//      handler - коллбэк-функция, которая будет вызвана при наступлении события.
//      options - необязательный объект параметров с расширенными настройками.

// ! РЕШЕНИЕ

const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');
const counterDisplay = document.querySelector('#value');

let counterValue = 0;

const decreaseValue = () => {
    counterDisplay.textContent = `${(counterValue -= 1)}`;
};

btnDecrement.addEventListener('click', decreaseValue);

const increaseValue = () => {
    counterDisplay.textContent = `${(counterValue += 1)}`;
};

btnIncrement.addEventListener('click', increaseValue);






