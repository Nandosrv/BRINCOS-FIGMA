const navIcon = document.getElementById('nav-icon1');
const navBar = document.querySelector('.nav-bar');

navIcon.addEventListener('click', function() {
  this.classList.toggle('open');
  navBar.classList.toggle('active');
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
