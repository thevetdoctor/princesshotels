const email = document.getElementById('email');
const password = document.getElementById('password');

let emailValue = email['value'];
let passwordValue = password.value;

function login() {
    console.log('logging in', emailValue, passwordValue);
    // console.log('logging in', 'email: ', email.value(), 'password: ', password.value());
}
login();

function handleEmail() {
    console.log(email);
}
function handlePassword() {
    console.log(password);
}