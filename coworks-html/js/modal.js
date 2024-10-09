
// Все кнопки которые могут открывать модальные окна, по data атрибуту [data-action="modal"]
const openModalBtns = document.querySelectorAll('[data-action="modal"]');
const modal = document.querySelector('.modal'); // Модальное окно
const closeModalBtn = document.querySelector('#closeModal'); // Кнопка закрытия модального окна
const modalBody = document.querySelector('.modal__body'); // Блок с контентом модального окна

// Перебираем все кнопки открытия модального окна
openModalBtns.forEach(function (item) {
    // Вешаем на них прослушку по клику
    item.addEventListener('click', function () {
        // Обращаемся к модалке и отображаем ее, добавляя к ней класс modal--open
        modal.classList.add('modal--open');

        // Добавляем к body класс no-scroll чтобы запретить скролл на странице
        document.body.classList.add('no-scroll');
    });
});

// Слушаем клик по кнопке закрытия модального окна
closeModalBtn.addEventListener('click', function () {
    // Закрываем модальное окно, удаляя у него класс modal--open
    modal.classList.remove('modal--open');

    // Возвращаем скролл на страницу
    document.body.classList.remove('no-scroll');
});

/* Закрытие модалки при клике на оверлее */

// Слушаем клик по модальному окну
modal.addEventListener('click', function () {
    console.log('Click on modal');

    // Закрываем модальное окно, удаляя у него класс modal--open
    modal.classList.remove('modal--open');

    // Возвращаем скролл на страницу
    document.body.classList.remove('no-scroll');
});

// Слушаем клик непосредственно внутри модального окна
modalBody.addEventListener('click', function (event) {
    // Запрещаем кликам из содержимого модального окна "всплывать наверх"
    // Чтобы они не доходили до элемента modal и не закрывали модальное окно
    event.stopPropagation();
});

// Закрываем модалку нажатием Escape
document.addEventListener('keydown', function (event) {
    if (event.keyCode == 27) {
        modal.classList.remove('modal--open');
        document.body.classList.remove('no-scroll');
    }
})