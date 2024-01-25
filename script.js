'use strict';
window.onload = initPage; //Döljer form och contentcontainer när sidan ladda.

function initPage() {
    document.getElementById('registerForm').classList.add(`d-none`);
    document.getElementById('contentContainer').classList.add (`d-none`);
    document.getElementById('errorMsg').classList.add(`d-none`);
    document.getElementById('login-button').onclick = validateLogin;
    document.getElementById('register-button').onclick = validateRegistration;

}

function validateLogin(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        document.getElementById('contentContainer').classList.remove(`d-none`);
        document.getElementById('loginForm').classList.add (`d-none`);
    } else {
        document.getElementById('errorMsg').classList.remove(`d-none`);
    }
} 



function validateRegistration(event) {
    event.preventDefault();
    document.getElementById('registerForm').classList.remove(`d-none`);
    document.getElementById('loginForm').classList.add (`d-none`);
    const username = document.getElementById('uName').value;
    const password = document.getElementById('pWord').value;
    const passwordAgain = document.getElementById('pWordAgain').value;

    if (username.length < 6) {
        alert('Användarnamnet måste vara minst 6 tecken långt. Försök igen.');
        //return;
    }

    if (password.length < 8) {
        alert('Lösenordet måste vara minst 8 tecken långt. Försök igen.');
        //return;
    }

    // Kontrollera om lösenorden matchar
    if (password !== passwordAgain) {
        alert('Lösenorden matchar inte. Försök igen.');
        //return;
        
    } 
    console.log('Registrering lyckades!');
    document.getElementById('register-new').onclick = initContent;

}

function initContent(event) {
    event.preventDefault();
    console.log('initContent');
}

function logOut() {

}