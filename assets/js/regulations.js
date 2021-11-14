const regulationsBtn = document.getElementById('regulations__btn');
const regulations = document.getElementById('regulamin');
var overlay = document.querySelector('.overlay');
const regulationsClose = document.querySelector('.regulations__close');

regulationsBtn.addEventListener('click', () => {
    regulations.style.display = "block";
    overlay.style.display = "block";
});

regulationsClose.addEventListener('click', () => {
    regulations.style.display = "none";
    overlay.style.display = "none";
});

$(document).ready(function() {
  if (window.location.href.indexOf("regulamin") > -1) {
    regulations.style.display = "block";
    overlay.style.display = "block";
  }
});