const actionbtn = document.querySelector('.actionbtn');
const navbar = document.querySelector('.navbar');
const banner = document.querySelector('.banner');

actionbtn.addEventListener('click',() => {
    actionbtn.classList.toggle('active');
    navbar.classList.toggle('active');
    banner.classList.toggle('active');

});