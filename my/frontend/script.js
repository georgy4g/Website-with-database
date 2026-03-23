function hideElement1(element) {
    element.style.display = 'none'; /* Элемент (смайл) не показывается, вообще. Как будто его и нет. */
    document.querySelector('.yes').style.display = 'block';
    document.getElementById('passwordField').type = 'password';
}

function hideElement2(element) {
    element.style.display = 'none';
    document.querySelector('.no').style.display = 'block';
    document.getElementById('passwordField').type = 'text';
}

function hideElement3(element) {
    element.style.display = 'none';
    document.querySelector('.yes2').style.display = 'block';
    document.getElementById('passwordField1').type = 'password';
}

function hideElement4(element) {
    element.style.display = 'none';
    document.querySelector('.no1').style.display = 'block';
    document.getElementById('passwordField1').type = 'text';
}



function register() {
    document.querySelector('.in').style.borderRadius = '200px 0 200px 0';
    document.querySelector('.inputs_cont1').style.borderRadius = '0 200px 0 200px';
    document.querySelector('.reg').style.display = 'block';
    document.querySelector('.vhod').style.display = 'none';
}

function vhod() {
    document.querySelector('.out').style.borderRadius = '0 200px 0 200px';
    document.querySelector('.inputs_cont2').style.borderRadius = '200px 0 200px 0';
    document.querySelector('.reg').style.display = 'none'; /* Страница меняется при выборе кнопки "Зарегистрироваться"          */
    document.querySelector('.vhod').style.display = 'block';
}

function registerUser() {
    let email = document.getElementById('emailld').value;
    let password = document.getElementById('passwordField').value;
    fetch('http://localhost:8000/register/?email=${email}&password=${password}', {method: 'POST'}).then(response => response.text()).then(alert)
}

function in_account() {
    let email = document.getElementById('emailld1').value;
    let password = document.getElementById('passwordField1').value;
    fetch('http://localhost:8000/in_account/?email=${email}&password=${password}', {method: 'GET'}).then(response => response.text()).then(alert)
}