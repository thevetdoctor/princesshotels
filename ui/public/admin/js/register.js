/* eslint-disable no-unused-vars */
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const waiterUsername = document.getElementById('username');
const waiterEmail = document.getElementById('email');
const waiterPhone = document.getElementById('phone');
const waiterPassword = document.getElementById('password');
const waiterTerms = document.getElementById('terms');

let firstnameValue = firstname.value;
let lastnameValue = lastname.value;
let waiterUsernameValue = waiterUsername.value;
let waiterEmailValue = waiterEmail.value;
let waiterPhoneValue = waiterPhone.value;
let waiterPasswordValue = waiterPassword.value;
let waiterTermsValue = waiterTerms.checked;

async function register() {
    const storedWaiterUsername = localStorage.getItem('waiter-username');    
    const storedWaiterEmail = localStorage.getItem('waiter-email');
    const storedWaiterPhone = localStorage.getItem('waiter-phone');    
    const storedWaiterPassword = localStorage.getItem('waiter-password');    
    const storedWaiterTerms = localStorage.getItem('waiter-terms');
    const payload = {username: storedWaiterUsername, email: storedWaiterEmail, mobile: storedWaiterPhone, password: storedWaiterPassword, terms: storedWaiterTerms}
    if (!storedWaiterTerms) {
        console.log('Terms required');
        return false;
    };
    console.log('signing up', payload);
    const res = await fetch('http://localhost:8000/auth/signup', {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(payload)});
    const data = await res.json();
    console.log(data);
    if(data.status === 200) {
        // eslint-disable-next-line no-restricted-globals
        location.replace = 'http://localhost:3000/admin/index.html';
    }
}
// signup();
console.log(localStorage)

function handleUsername(waiterUsernameValue) {
    localStorage.setItem('waiter-username', waiterUsernameValue);
}
function handleEmail(waiterEmailValue) {
    localStorage.setItem('waiter-email', waiterEmailValue);
}
function handlePhone(waiterPhoneValue) {
    localStorage.setItem('waiter-phone', waiterPhoneValue);
}
function handlePassword(waiterPasswordValue) {
    localStorage.setItem('waiter-password', waiterPasswordValue);
}
function handleTerms(waiterTermsValue) {
    localStorage.setItem('waiter-terms', waiterTermsValue);
}