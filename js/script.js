let navbar = document.querySelector('.navbar')

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    loginForm.classList.remove('active');
    searchForm.classList.remove('active');
}
 

let searchForm = document.querySelector('.search-form')

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
    searchForm.classList.remove('active');
}
 

const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

darkModeToggle.addEventListener('change', () => {
    if (darkModeToggle.checked) {
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
    }
});

const sendMessageBtn = document.getElementById("sendMessageBtn");

// Add a click event listener to the button
sendMessageBtn.addEventListener("click", function() {
    // Display an alert when the button is clicked
    alert("Message Sent! Our Representative will contact you shortly.");
});

const sendMessageBtn1 = document.getElementById("sendMessageBtn1");

// Add a click event listener to the button
sendMessageBtn1.addEventListener("click", function() {
    // Display an alert when the button is clicked
    alert("Subscription Successfull For 1 Month .");
});

const sendMessageBtn2 = document.getElementById("sendMessageBtn2");

// Add a click event listener to the button
sendMessageBtn2.addEventListener("click", function() {
    // Display an alert when the button is clicked
    alert("Subscription Successfull For 1 Month .");
});

const sendMessageBtn3 = document.getElementById("sendMessageBtn3");

// Add a click event listener to the button
sendMessageBtn3.addEventListener("click", function() {
    // Display an alert when the button is clicked
    alert("Subscription Successfull For 1 Month .");
});

const sendMessageBtn4 = document.getElementById("sendMessageBtn4");

// Add a click event listener to the button
sendMessageBtn4.addEventListener("click", function() {
    // Display an alert when the button is clicked
    alert("Booked Successfully .");
});

