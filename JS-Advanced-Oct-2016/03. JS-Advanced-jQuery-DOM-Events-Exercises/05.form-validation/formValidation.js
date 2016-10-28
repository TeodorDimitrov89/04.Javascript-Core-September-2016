function solve() {
    //Write your code here
    let userName = $('#username');
    let email = $('#email');
    let pass = $('#password');
    let confPass = $('#confirm-password');
    let companyCheckbox = $('#company');
    let userNamePattern = /^[A-Za-z0-9]{3,20}$/;
    let passwordPattern = /^[A-Za-z0-9_]{5,15}$/;
    let companyNumberPattern = /^[1-9][0-9]{3}$/;
    //.*-хваща всички символи 0 или повече
    //.*?-lazy - хваща възможно най-малко съвпадения.
    let emailPattern = /^.*@.*\..*$/;
    //всеки символ 0 или повече @ всеки символ поне 1 точка и след това всеки символ.

    let submit = $('#submit');

    companyCheckbox.click(function () {
        if ((companyCheckbox).on("change")) {//Да не ползвам is(checked),а on change event!
            $('#companyInfo').css('display', 'block');
        }
        else {
            $('#companyInfo').css('display', 'none');
        }
    });

    submit.click(function (event) {
        event.preventDefault();
        let validName = isValidUsername(userName, userNamePattern);
        let validPass = isValidPassword(pass, confPass, passwordPattern);
        let validEmail = isValidEmail(email, emailPattern);

        if (companyCheckbox.is(":checked")) {
            let validCompanyNum = isValidCompanyNum(companyNumberPattern);
            if (validCompanyNum && validEmail && validName && validPass) {
                let valid = $('#valid');
                valid.css('display', 'block')
            }
            else {
                let valid = $('#valid');
                valid.css('display', 'none')
            }
            return;
        }

        if (validEmail && validName && validPass) {
            let valid = $('#valid');
            valid.css('display', 'block')
        }
        else {
            let valid = $('#valid');
            valid.css('display', 'none')
        }
    });

    function isValidEmail(email, emailPattern) {
        let isValidEmail = true;
        if (!email.val().match(emailPattern)) {
            email.css('border', 'red');
            isValidEmail = false;
            return isValidEmail;
        }
        return isValidEmail;

    }

    function isValidCompanyNum(companyNumberPattern) {
        let isValid = true;
        let companyNumber = $('#companyNumber');
        if (!companyNumber.val().match(companyNumberPattern)) {
            companyNumber.css('border', 'red');
            isValid = false;
        }
        return isValid;
    }
    function isValidUsername(userName, userNamePattern) {
        let isValidUser = true;
        if (!userName.val().match(userNamePattern)) {
            userName.css('border', 'red');
            isValidUser = false;
        }
        return isValidUser;
    }
    function isValidPassword(password, confPass, passwordPattern) {
        let isValidPassword = true;
        let passwordVal = password.val();
        let confirmPassVal = confPass.val();
        if (passwordVal !== confirmPassVal
            || !passwordVal.match(passwordPattern)
            || !confirmPassVal.match(passwordPattern)) {
            password.css('border', 'red');
            confPass.css('border', 'red');
            isValidPassword = false;
        }
        return isValidPassword;
    }
}