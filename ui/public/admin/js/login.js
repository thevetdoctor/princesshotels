/* eslint-disable no-unused-vars */
const email = document.getElementById('email');
const password = document.getElementById('password');

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
    if(data.status === 200) {
        // eslint-disable-next-line no-restricted-globals
        location.replace = 'http://localhost:3000/admin/index.html';
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