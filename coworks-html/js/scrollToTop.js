//document.querySelector - находит элемент по (#id) или по (.class)
const scrollButton = document.querySelector('#scrollToTopBtn');

//window - глобальный объект, представляющий окно браузера.
//addEventListener — это метод, который используется для добавления обработчиков событий (или слушателей событий) к HTML-элементам. Он позволяет вам реагировать на различные события
window.addEventListener('scroll', function () { // ('scroll', function () - после скролла срабатывает функция
    if (window.pageYOffset > window.innerHeight) { //pageYOffset — это свойство объекта window, которое возвращает текущую вертикальную прокрутку документа в пикселях // innerHeight — это свойство, которое используется для получения или установки высоты области просмотра (viewport) внутри окна браузера px.
        scrollButton.classList.add('top-link--visible');// classList.add - добавляет класс к элементу
    } else {
            scrollButton.classList.remove('top-link--visible');//classList.remove - удаляет класс из элемента
    }
})