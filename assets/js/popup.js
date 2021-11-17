var overlay = document.querySelector('.overlay');
const popup = document.querySelector('.popup');
const close = document.querySelector('.popup__close');
const popupBtn = document.querySelector('.popup__btn');

function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

close.addEventListener('click', () => {
    setCookie('reputeup',1,7);
    overlay.style.display = 'none';
    popup.style.display = 'none';
});

popupBtn.addEventListener('click', () => {
    popup.style.display = 'none';
    overlay.style.display = 'none';
});



$( document ).ready(function() {
    var x = getCookie('reputeup');
    if (x != 1) {
        $('.overlay').show();
        $('.popup').show(1850);
    }
});