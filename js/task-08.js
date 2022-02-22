// todo Напиши скрипт управления формой логина.

/* <form class="login-form">
    <label>
    Email
    <input type="email" name="email" />
    </label>
    <label>
    Password
    <input type="password" name="password" />
    </label>
    <button type="submit">Login</button>
</form> */

// ? Обработка отправки формы form.login-form должна быть по событию submit.
// ? При отправке формы страница не должна перезагружаться.
// ? Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
// ? Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект,
// ? где имя поля будет именем свойства, а значение поля - значением свойства.
// ? Для доступа к элементам формы используй свойство elements.
// ? Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.

// ! АЛГОРИТМ РЕШЕНИЯ

// * 1. Находим элемент form по селектору через метод document.querySelector(selector).
// * 2. Создаем колбек - функцию.
// * 3. Отменяем действие перезагрузки страницы по умолчанию методом preventDefault().
// * 4. Создаем переменную, в которую записываем значение event.currentTarget
//      Свойство event.currentTarget содержит элемент, для которого было назначено событие.

// * 5. Создаем переменную, в которую будет записан обьект с данными.
// * 6. С помощью цикла for...else записываем условие:
// *    если не введен email или пароль выводим  alert с предупреждением о том, что все поля должны быть заполнены.
// *    в противном случае - добавляем данные в обьект, где имя поля будет именем свойства, а значение поля - значением свойств.     
// *    отменяем действие перезагрузки страницы по умолчанию методом preventDefault().
// * 7. Обьект выводим в консоль.
// * 8. Очищаем значения полей формы методом reset.
// * 9. Добавляем слушателей на событие submit, используя метод addEventListener();

// ! РЕШЕНИЕ

const formEl = document.querySelector('.login-form');

const controlsLoginForm = event => {
    event.preventDefault();

    const target = event.currentTarget;
    const formData = {};

    if (!target.elements.email.value || !target.elements.password.value) {
    alert('Все поля должны быть заполнены!');
    event.preventDefault();
    }
    else {
    formData.email = target.elements.email.value;
    formData.password = target.elements.password.value;
    console.log('formData: ', formData);
    target.reset();
    }
};

formEl.addEventListener('submit', controlsLoginForm);


