import { transitionPage } from './javascript.js';

const inputName = document.getElementById('input-name');
const inputLastName = document.getElementById('input-last-name');
const inputPassword = document.getElementById('input-password');
const inputPasswordRepeat = document.getElementById('input-password-repeat');
const passErrOutput = document.getElementById('pass-err-output');
const passwordReg = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+?><,./'|])[a-zA-Z\d!@#$%^&*()_+]{5,}$/;
const inputEmail = document.getElementById('input-email');
const emailErrOutput = document.getElementById('email-err-output');
const emailReg = /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]+?\.?[a-zA-Z]{2,}$/;
const inputPhone = document.getElementById('input-phone-num');
const phoneErrOutput = document.getElementById('phone-err-output');
const phoneReg = /^\+?\d{6,}$/;
const inputSiteUrl = document.getElementById('input-site-url');
const siteUrlErrOutput = document.getElementById('site-url-err-output');
const siteUrlReg = /^https?:\/\/www\.[a-zA-Z0-9]+\.[a-zA-Z]+\.?[a-zA-Z]*(\/[a-zA-Z0-9-]*)*$/;

export function evaluateInput(){

    phoneErrOutput.innerHTML = '';
    emailErrOutput.innerHTML = '';
    passErrOutput.innerHTML = '';


    // Remove all children elements
    while (passErrOutput.firstChild) {
        passErrOutput.removeChild(passErrOutput.firstChild);
    }

    // Eval Name
    if(inputName.value === ''){
        inputName.setAttribute('placeholder', "* Please enter your name.");
        inputName.focus();
        return;
    }
    // Eval Last Name
    if(inputLastName.value === ''){
        inputLastName.setAttribute('placeholder', "* Please enter your last name.");
        inputLastName.focus();
        return;
    }



    /* PASSWORD EVALUATION */

    const passInputs = [inputPassword, inputPasswordRepeat]
    // Eval Password
    if(inputPassword.value === ''){
        inputPassword.setAttribute('placeholder', "* Please enter your password.");
        inputPassword.focus();
        return;
    }
    // Eval Password Repeat
    else if(inputPasswordRepeat.value === ''){
        inputPasswordRepeat.setAttribute('placeholder', "* Please enter your password.");
        inputPasswordRepeat.focus();
        return;
    }
    else{
        for(const passField of passInputs) {
        // Eval Password Regex
            if(!passwordReg.test(passField.value)){
                passField.focus();
                passErrOutput.innerHTML = "Password must contain:<br>";

                // Eval Password uppercase
                if (!/(?=.*[A-Z])/.test(passField.value)) {
                    passErrOutput.innerHTML += '<span style="color: red; margin-left: 10px;">- upper case letter</span><br>';
                }
                // Eval Password number
                if (!/(?=.*[0-9])/.test(passField.value)) {
                    passErrOutput.innerHTML += '<span style="color: red; margin-left: 10px;">- number</span><br>';
                }
                // Eval Password symbol
                if (!/(?=.*[!@#$%^&*()_+?><,./'|])/.test(passField.value)) {
                    passErrOutput.innerHTML += '<span style="color: red; margin-left: 10px;">- symbol</span><br>';
                }
                // Eval Password character number
                if (!/^.{5,}$/.test(passField.value)) {
                    passErrOutput.innerHTML += '<span style="color: red; margin-left: 10px;">- at least 5 characters long</span><br>';
                }
                // Eval Password & Password Repeat match
                if(inputPassword.value !== inputPasswordRepeat.value){
                    passErrOutput.innerHTML += '<span style="color: red; margin-left: 10px;">- passwords must match</span><br>';
                }
                return;
            }

        }
    }
    /* \PASSWORD EVALUATION */

    // Eval email
    if(inputEmail.value === ''){
        inputEmail.setAttribute('placeholder', "* Please enter your email adress.");
        inputEmail.focus();
        return;
    }
    else if(!emailReg.test(inputEmail.value))
    {
        emailErrOutput.innerHTML = '<span style="color: red;">Please enter a valid email adress</span><br>';
        return;
    }
    // Eval phone number
    if(inputPhone.value === ''){
        inputPhone.setAttribute('placeholder', "* Please enter your phone number.");
        inputPhone.focus();
        return;
    }
    else if(!phoneReg.test(inputPhone.value))
    {
        phoneErrOutput.innerHTML = '<span style="color: red;">Please enter a valid phone number</span><br>';
        return;
    }

    // Eval site url
    if(inputSiteUrl.value === ''){
        inputSiteUrl.setAttribute('placeholder', "* Please enter an url adress.");
        inputSiteUrl.focus();
        return;
    }
    else if(!siteUrlReg.test(inputSiteUrl.value))
    {
        siteUrlErrOutput.innerHTML = '<span style="color: red;">Please enter a valid url adress</span><br>';
        return;
    }

    // Calls for page transition when all the input data is correctly inputed
    transitionPage();
}