// todo Напиши скрипт который:

// ? Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// ? Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль:
// ? текст заголовка элемента(тега < h2 >)
// ? и количество элементов в категории(всех вложенных в него < li >).

// В результате, в консоли будут выведены такие сообщения.
// Number of categories: 3
// Category: Animals
// Elements: 4
// Category: Products
// Elements: 3
// Category: Technologies
// Elements: 5

// ! АЛГОРИТМ РЕШЕНИЯ

// * 1. Находим элемент  по CSS-селектору через метод document.querySelector(selector).
// * 2. Выводим в консоль количество категорий, используя elem.children -псевдомассив, который хранит только дочерние узлы - элементы, то есть соответствующие тегам.
// * 3. Количество категорий ищем через свойство length.
// * 4. Находим каждый елемент li.item в списке ul#categories через метод document.querySelectorAll(selector) -
//     Используется если необходимо найти коллекцию элементов, то есть получить массив ссылок на элементы с одинаковым селектором.
//     Возвращает псевдомассив всех элементов внутри element, удовлетворяющих CSS-селектору selector.
//     Если ничего не найдено, вернет пустой массив.

// * 5. Перебираем массив через метод forEach.
//     массив.forEach(function callback(element, index, array) {Тело коллбек-функции});
//     Поэлементно перебирает массив.
//     Вызызвает коллбек-функцию для каждого элемента массива.
//     Ничего не возвращает.

// * 6. Находим заголовок элемента(тега < h2 >) используя elem.firstElementChild - выберет первый дочерний узел - элемент внутри elem.
// * 7. Получаем текст заголовка через свойство elem.textContent -  возвращает текстовый контент внутри элемента.
// * 8. Находим элементы в категории через:
// *    elem.lastElementChild - выберет последний дочерний узел - элемент внутри element
// *    и потом ищем потомков узла через element.children -  псевдомассив, хранит только дочерние узлы-элементы, то есть соответствующие тегам.
// * 9. Находим количество всех вложенных в каждую категорию < li > через свойство length.
// * 10.Выводим в консоль, используя метод forEach и колбек-функцию для каждого елемента массива.

// ! РЕШЕНИЕ

const categoriesList = document.querySelector("ul#categories");
console.log("Number of categories: ", categoriesList.children.length);

const categoriesItem = document.querySelectorAll("li.item");
categoriesItem.forEach(item => {
    console.log("Category: ", item.firstElementChild.textContent);
    console.log("Elements: ", item.lastElementChild.children.length);
});

