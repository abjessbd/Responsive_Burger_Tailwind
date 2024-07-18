const nav = document.getElementById('nav');
const closeBtn = document.getElementById('close-btn');
const btnContainer = document.getElementById('btn-container');
const darkLightBtn = document.getElementById('dark-light-btn');
const menuBtn = document.getElementById('menu-btn');
const navItems = document.querySelectorAll('.nav-item');

menuBtn.addEventListener('click', ()=>{
    nav.classList.remove('hidden');
    btnContainer.classList.add('hidden');
});

closeBtn.addEventListener('click', ()=>{
    nav.classList.add('hidden');
    btnContainer.classList.remove('hidden');
});

navItems.forEach(navItem => {
    navItem.addEventListener('click', () => {
        nav.classList.add('hidden');
        btnContainer.classList.remove('hidden');
    });
});