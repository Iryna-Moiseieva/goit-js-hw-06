// todo Напиши скрипт, который для каждого элемента массива ingredients:

// ? 1. Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// ? 2. Добавит название ингредиента как его текстовое содержимое.
// ? 3. Добавит элементу класс item.
// ? 4. После чего вставит все <li> за одну операцию в список ul.ingredients.

// ! АЛГОРИТМ РЕШЕНИЯ
// * 1. Находим элемент  по CSS - селектору через метод document.querySelector(selector).
// * 2. Создаем отдельный элемент <li>, используя метод document.createElement().
//      document.createElement(tagName);
//      Создает элемент с именем tagName и возвращает ссылку на него как результат своего выполнения.
//      tagName - это строка, указывающая тип создаваемого элемента.
//      Элемент создается в памяти, в DOM его еще нет.

// * 3. Текстовому содержимому елемента(свойство elem.textContent) добавляем название ингредиентов.
// * 4. Добавляем элементу класс item через метод elem.classList.add(cls).
//      elem.classList.add(cls) - добавляет класс cls в список классов элемента.

// * 5. Создаем колбек-функцию, которая будет выполнять пункты 2, 3, 4.
// * 6. Результат работы коллбек - функции записываем в новый массив, используя метод map(callback).
//      массив.map((element, index, array) => { // Тело коллбек-функции });
//      Метод map(callback) используется для трансформации массива.
//      Он вызывает коллбек - функцию для каждого элемента исходного массива,
//      а результат её работы записывает в новый массив, который и будет результатом выполнения метода.
//      Поэлементно перебирает оригинальный массив.
//      Не изменяет оригинальный массив.
//      Результат работа коллбек-функции записывается в новый массив.
//      Возвращает новый массив такой же длины.
//      Его можно использовать для того, чтобы изменить каждый элемент массива.
//      Оригинальный массив используется как эталон, на базе которого можно сделать другую коллекцию.
// *7.  Добавляем все <li> за одну операцию в список ul.ingredients через element.append(el1, el2, ...).
// *8.  Собираем все аргументы через операцию ... (rest).

// ! РЕШЕНИЕ

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients');

const makeIngredientEl = ingredient => {
  const ingredientEl = document.createElement("li");
  ingredientEl.textContent = ingredient;
  ingredientEl.classList.add("item");
  return ingredientEl;
};

const ingredientsMarkup = ingredients.map(ingredient =>
  makeIngredientEl(ingredient),
);

ingredientsEl.append(...ingredientsMarkup);


