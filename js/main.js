const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links li a');


menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  navLinks.classList.toggle('active');
});


navItems.forEach(link => {
  link.addEventListener('click', () => {
    menuToggle.classList.remove('active');
    navLinks.classList.remove('active');
  });
});

const scrollContainer = document.querySelector('.scroll-container');
const btnLeft = document.querySelector('.scroll-btn.left');
const btnRight = document.querySelector('.scroll-btn.right');

// Função para rolar à direita
btnRight.addEventListener('click', () => {
  scrollContainer.scrollBy({
    left: 200, // Rola 200px à direita
    behavior: 'smooth'
  });
});

// Função para rolar à esquerda
btnLeft.addEventListener('click', () => {
  scrollContainer.scrollBy({
    left: -200, // Rola 200px à esquerda
    behavior: 'smooth'
  });
});
