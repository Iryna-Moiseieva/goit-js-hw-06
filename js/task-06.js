// todo Напиши скрипт, который:

// ? при потере фокуса на инпуте(событие blur), проверяет его содержимое на правильное количество введённых символов.
// ? Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// ? Если введено подходящее количество символов, то border инпута становится зелёным,
// ? если неправильное - красным.
// ? Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.

// ! АЛГОРИТМ РЕШЕНИЯ

// * 1. Находим элементы input по CSS-селектору через метод document.querySelector(selector).
// * 2. Создаем колбек - функцию, которая выполняет следующие действия.
// *    создаем переменную, которая ровна длинне значения введенного текста.
// *    созем переменную, которая ровна числу  (Number) длинны значения введенного текста.
// *    Если введенное число символов равно необходимому числу символов, добавляем класс "valid", и удаляем класс invalid
// *    через метод elem.classList.add(cls) и elem.classList.remove(cls).
// *    В противном случае - добавляем класс "invalid", и удаляем класс valid.
// * 3. Добавляем слушателей на событие blur, используя метод addEventListener();

// ! РЕШЕНИЕ

const inputValidationEl = document.querySelector('#validation-input');
const inputValidationLength = document.querySelector('[data-length]');

const checkLength = event => {
    const inputLength = event.currentTarget.value.length;
    const inputValidationLength = Number(event.currentTarget.dataset.length);

    if (inputLength === inputValidationLength) {
        inputValidationEl.classList.add("valid");
        inputValidationEl.classList.remove("invalid");
	} else {

        inputValidationEl.classList.add("invalid");
        inputValidationEl.classList.remove("valid");
    };
};

inputValidationEl.addEventListener("blur", checkLength);

