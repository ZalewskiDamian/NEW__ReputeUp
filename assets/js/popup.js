const overlay = document.querySelector('.overlay');
const popup = document.querySelector('.popup');
const close = document.querySelector('.popup__close');

close.addEventListener('click', () => {
    overlay.style.visibility = 'hidden';
    popup.style.visibility = 'hidden';
});