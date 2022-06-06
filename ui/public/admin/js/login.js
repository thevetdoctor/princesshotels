/* eslint-disable no-unused-vars */
localStorage.removeItem('jwt');
const email = document.getElementById('email');
const password = document.getElementById('password');
const message = document.getElementById('message');

let emailValue = email.value;
let passwordValue = password.value;

async function login() {
    const storedEmail = localStorage.getItem('email') || '';
    const storedPassword = localStorage.getItem('password') || '';
    const payload = {email: storedEmail, password: storedPassword};
    console.log('logging in', payload);
    const res = await fetch('http://localhost:8000/auth/login', {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(payload)});
    const data = await res.json();
    console.log(data);
    if(data.success) {
        message.innerText = data.data.message;
        localStorage.setItem('jwt', data.data.token)
        // eslint-disable-next-line no-restricted-globals
        window.document.location.href = './index.html';
        // location.replace = 'http://localhost:3000/admin/index.html';
    } else {
        message.innerText = data.error;
    }
}
// login();
console.log(localStorage)

function handleEmail(emailValue) {
    localStorage.setItem('email', emailValue);
}
function handlePassword(passwordValue) {
    localStorage.setItem('password', passwordValue)
}