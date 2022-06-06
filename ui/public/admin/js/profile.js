console.log('profile');
const profile = document.getElementById('profilename');
const username = localStorage.getItem('username');
profile.innerText = username;