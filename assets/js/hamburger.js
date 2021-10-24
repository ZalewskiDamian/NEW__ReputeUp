const hamburger = document.querySelector('.header__hamburger');
const navigation = document.querySelector('.header__navigation');

function toggleHamburger() {
    navigation.classList.toggle('toggle-navigation');
    hamburger.classList.toggle('hamburger-active');
}

hamburger.addEventListener('click', toggleHamburger);