var overlay = document.querySelector('.overlay');
const popup = document.querySelector('.popup');
const close = document.querySelector('.popup__close');

close.addEventListener('click', () => {
    overlay.style.display = 'none';
    popup.style.display = 'none';
});