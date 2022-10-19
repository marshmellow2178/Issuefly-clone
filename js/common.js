const nav = document.querySelector('nav');
const triggerMenu = document.querySelector('.openmenu');
triggerMenu.onclick = function () {
    nav.classList.toggle('active');
}

const cookie = document.querySelector('.cookie');
const cookieText = document.querySelector('.cookietext');
const button = document.querySelector('.cookietext button');
cookie.addEventListener('click', function () {
    cookieText.classList.add('active');
});
button.addEventListener('click', function () {
    cookieText.classList.remove('active');
});

            