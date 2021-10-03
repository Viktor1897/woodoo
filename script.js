const menuBtn = document.querySelector('.menu-btn');
const overlayMenuElement = document.querySelector('.menu-overlay');
const overlayNavigationElement = document.querySelector('.menu-overlay__navigation-list');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('open');
  overlayMenuElement.classList.toggle('active');
  menuOpen = !menuOpen;
});
overlayNavigationElement.addEventListener('click', (event) => {
  console.log(event.target);
  if (event.target && event.target.matches('.js-link')) {
    menuBtn.classList.toggle('open');
    overlayMenuElement.classList.toggle('active');
    menuOpen = !menuOpen;
  }
});