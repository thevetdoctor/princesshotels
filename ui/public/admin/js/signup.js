/* eslint-disable no-unused-vars */
localStorage.removeItem('jwt');
const username = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const terms = document.getElementById('terms');
const message = document.getElementById('message');

let usernameValue = username.value;
let emailValue = email.value;
let phoneValue = phone.value;
let passwordValue = password.value;
let termsValue = terms.checked;

async function signup() {
    const storedUsername = localStorage.getItem('username');    
    const storedEmail = localStorage.getItem('email');
    const storedPhone = localStorage.getItem('phone');    
    const storedPassword = localStorage.getItem('password');    
    const storedTerms = localStorage.getItem('terms');
    const payload = {username: storedUsername, email: storedEmail, mobile: storedPhone, password: storedPassword, terms: storedTerms}
    if (!storedTerms) {
        console.log('Terms required');
        message.innerText = 'Terms required';
        return false;
    };
    console.log('signing up', payload);
    const res = await fetch('http://localhost:8000/auth/signup', {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(payload)});
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
// signup();
console.log(localStorage)

function handleUsername(usernameValue) {
    localStorage.setItem('username', usernameValue);
}
function handleEmail(emailValue) {
    localStorage.setItem('email', emailValue);
}
function handlePhone(phoneValue) {
    localStorage.setItem('phone', phoneValue);
}
function handlePassword(passwordValue) {
    localStorage.setItem('password', passwordValue);
}
function handleTerms(termsValue) {
    localStorage.setItem('terms', termsValue);
}