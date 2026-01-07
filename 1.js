const navbaNav = document.querySelector('.navbar-nav')
//ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
    navbaNav.classList.toggle('active')   
};
//diluar side  untuk menghilangkan nav
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !navbaNav.contains(e.target)) {
        navbaNav.classList.remove('active');
    }
});