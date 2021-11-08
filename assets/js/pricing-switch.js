//SWITCH BUTTONS
const buttons = document.querySelectorAll('.section-4__switch--btn');

function toggleButton() {
    const buttonToggle = this.getAttribute('aria-expanded');

    for (i = 0; i<buttons.length; i++) {
        buttons[i].setAttribute('aria-expanded', 'false');
        buttons[i].classList.remove('btn--active');
    }

    if (buttonToggle == 'false') {
        this.setAttribute('aria-expanded', 'true');
        this.classList.toggle('btn--active');
    }

    if (buttonToggle == 'true') {
        this.setAttribute('aria-expanded', 'true');
        this.classList.add('btn--active');
    }
}

buttons.forEach((item) => item.addEventListener('click', toggleButton));

//SWITCH PRICING PLAN'S
$('.section-4__switch--btn').on('click', function() {
    $('.switch_btn.btn-active').removeClass('btn-active');
    $('.google').hide();
    $('.facebook').hide();
    $('.tripadvisor').hide();
    let btnClass = $(this).data('id');
    $('.'+btnClass).show();
    $('.switch_btn[data-id="'+btnClass+'"]').addClass('btn-active');
});