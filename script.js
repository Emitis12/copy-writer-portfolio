const dropdownBtn = document.querySelector('.dropdown-btn');
const closeBtn = document.querySelector('.close-btn');
const dropdownMenu = document.querySelector('.dropdown-menu');

dropdownBtn.addEventListener('click', () => {
    dropdownMenu.classList.add('open');
    dropdownBtn.style.display = 'none';
    closeBtn.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    dropdownMenu.classList.remove('open');
    closeBtn.style.display = 'none';
    dropdownBtn.style.display = 'block';
});