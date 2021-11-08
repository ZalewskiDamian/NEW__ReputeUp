const registerForm = document.getElementById('registerForm');
var hasErrors = false;

const checkInputs = (name, email, password1, password2) => {
    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const password1Value = password1.value.trim();
    const password2Value = password2.value.trim();

    if (nameValue === '' || !nameCheck(nameValue)) {
        setError(name);
    } else {
        setSucces(name)
    }

    if (emailValue === '' || !emailCheck(emailValue)) {
        setError(email);
    } else {
        setSucces(email)
    }

    if (password1Value === '') {
        setError(password1);
    } else {
        setSucces(password1)
    }

    if (password2Value === '' || !passwordCheck(password1Value, password2Value)) {
        setError(password2);
    } else {
        setSucces(password2)
    }

    return hasErrors;
}

const nameCheck = (name) => {
    let nameValidate = /^[a-zA-Z]+$/;
    return nameValidate.test(name);
};

const emailCheck = (email) => {
    let emailValidate = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return emailValidate.test(email);
};

const passwordCheck = (password1, password2) => {
    if (password1 != '' && password2 != '' && password1 === password2) {
        return true;
    } else {
        return false;
    }
}

const setError = (element, err) => {
    const formWrapper = element.parentElement;
    const errorFdb = formWrapper.querySelector('.error-feedback');
    errorFdb.style.visibility = 'visible';
    hasErrors = true;
};

const setSucces = (element, err) => {
    const formWrapper = element.parentElement;
    const errorFdb = formWrapper.querySelector('.error-feedback');

    errorFdb.style.visibility = 'hidden';
};

registerForm.addEventListener('submit', (e) => {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const password1 = document.getElementById('password');
    const password2 = document.getElementById('repeat_password');
    hasErrors = false;

    if (checkInputs(name, email, password1, password2)) {
        e.preventDefault();
    }
});