
const btn = document.querySelector('#btn-mobile-nav');
const mobileBtnImg = document.querySelector('#mobile-nav-img');
const mobileNav = document.querySelector('#mobile-nav');
const header = document.querySelector('#header');

btn.addEventListener('click', function () {
    console.log('Click');

    btn.classList.toggle('open');
    mobileNav.classList.toggle('open')
    header.classList.toggle('header-white-bg');
    document.body.classList.toggle('no-scroll');

    if (btn.classList.contains('open')) {
        mobileBtnImg.src = './img/icons/NAV-CLOSE.svg';
    } else {
        mobileBtnImg.src = './img/icons/NAV-OPEN.svg';
    }

})