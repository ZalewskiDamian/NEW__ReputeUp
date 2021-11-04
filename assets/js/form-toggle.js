const buttons = document.querySelectorAll('.toggle-btn');
const form = document.querySelectorAll('.form-toggle');

function toggleForms() {
    const buttonToggle = this.getAttribute('aria-expanded');

    for (i = 0; i<buttons.length; i++) {
        buttons[i].setAttribute('aria-expanded', 'true');
    }

    if (buttonToggle == 'true') {
        for (i = 0; i<form.length; i++) {
            form[i].classList.toggle('form-toggle-swipe');
        }
    }
}

buttons.forEach((item) => item.addEventListener('click', toggleForms));