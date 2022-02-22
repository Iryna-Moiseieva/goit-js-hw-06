// todo Напиши скрипт для создания галереи изображений по массиву данных.

// В HTML есть список ul.gallery.
// <ul class="gallery"></ul>

// ? Используй массив объектов images для создания элементов <img> вложенных в <li>.
// ? Для создания разметки используй шаблонные строки и метод insertAdjacentHTML().
// ? Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// ? Добавь минимальное оформление галереи флексбоксами или гридами через CSS классы.

// ! АЛГОРИТМ РЕШЕНИЯ

// * 1. Находим элемент галереи по CSS - селектору через метод document.querySelector(selector).
// * 2. Создаем колбек-функцию, котрая возвращает строку с разметкой.
// * 3. Результат работы коллбек - функции записываем в новый массив, используя метод map(callback).
// * 4. Добавляем все элементы галереи в DOM за одну операцию вставки через метод insertAdjacentHTML()
//      elem.insertAdjacentHTML(position, string);
//      Аргумент position - это строка, позиция относительно элемента elem.Принимает одно из четырёх значений.
//      "beforebegin" - перед elem
//      "afterbegin" - внутри elem, перед всеми детьми
//      "beforeend" - внутри elem, после всех детей
//      "afterend" - после elem
// * 5. Добавляем  оформление галереи и через CSS классы.

// ! РЕШЕНИЕ
const images = [
{
  url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  alt: 'White and Black Long Fur Cat',
},
{
  url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
},
{
  url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  alt: 'Group of Horses Running',
},
];

const galleryContainerEl = document.querySelector('.gallery');

const makeGalleryItem = ({ url, alt }) => {
  return `
  <li class="gallery__item">
    <img class="gallery__img" src="${url}" alt="${alt}">
  </li>
`;
};

const galleryItems = images.map(image => makeGalleryItem(image));

galleryContainerEl.insertAdjacentHTML('afterbegin', galleryItems.join(''));

