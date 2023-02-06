const menu = document.querySelector('.menu-mobile');

document.querySelector('.menu-btn').addEventListener('click', () => {
  menu.style.width = '100%';
});

document.querySelector('.close-btn').addEventListener('click', () => {
  menu.style.width = '0';
});