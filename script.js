const menu = document.querySelector('.menu-mobile');

document.querySelector('.menu-btn').addEventListener('click', () => {
  menu.style.display = 'block';
});

document.querySelector('.close-btn').addEventListener('click', () => {
  menu.style.display = 'none';
});

document.querySelector('.menu-options').addEventListener('click', () => {
  menu.style.display = 'none';
});