const mobileNavBtnOpen = document.querySelector('#openMobileNav');

const mobileNavBtnClose = document.querySelector('#closeMobileNav');

const mobileNav = document.querySelector('.mobile-nav');

mobileNavBtnOpen.addEventListener('click', function () {
    mobileNav.classList.add('mobile-nav--open');

    document.body.classList.add('no-scroll');

})
mobileNavBtnClose.addEventListener('click', function () {

    mobileNav.classList.remove('mobile-nav--open');
    document.body.classList.remove('no-scroll');
})

// закрыть моб навигацию по клику на ссылки

const mobileNavLinks = mobileNav.querySelectorAll('a, button');

mobileNavLinks.forEach(function (item) { // в mobileNavLinks(коллекции) forEach - для каждого элемента выполняется функция с параметрom (item - отдельный элемент)
    item.addEventListener('click', function () { // событие клика на элементе(item) выполняется функция
        mobileNav.classList.remove('mobile-nav--open'); // удаляем класс mobile-nav--open, чтобы закрыть меню
        document.body.classList.remove('no-scroll');
    })
})