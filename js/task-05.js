// todo Напиши скрипт который:

// ? при наборе текста в инпуте input#name - input(событие input),подставляет его текущее значение в span#name - output.
// ? Если инпут пустой, в спане должна отображаться строка "Anonymous".
// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

// ! АЛГОРИТМ РЕШЕНИЯ

// * 1. Находим элементы input и output по CSS-селектору через метод document.querySelector(selector).
// * 2. Создаем переменную, в которую записываем текущее текстовое значение(через метод textContent) output.
// * 3. Создаем колбек - функцию, которая возвращает текст введенного значения(event.currentTarget.value).
// *    Если никакое значение не введено - (!outputName.textContent) - возвращает текущее значение - output.
// * 4. Добавляем слушателей на событие input, используя метод addEventListener();

// ! РЕШЕНИЕ

const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

const currentValue = outputName.textContent;

const checkName = event => {
    outputName.textContent = event.currentTarget.value;
    if (!outputName.textContent) {
        outputName.textContent = currentValue;
    };
};

inputName.addEventListener('input', checkName);

