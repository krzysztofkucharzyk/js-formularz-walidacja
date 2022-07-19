let button = document.querySelector('input[type="button"]');

button.onclick = function () {
    
    let email = document.getElementById('email').value;

    if (email !== "") {
        email
    } else {
        alert('Wpisz adres email');
    }
}
