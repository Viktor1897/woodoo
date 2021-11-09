const menuBtn = document.querySelector('.menu-btn');
const overlayMenuElement = document.querySelector('.menu-overlay');
const overlayNavigationElement = document.querySelector('.menu-overlay__navigation-list');
const footerText = document.querySelector('.edge__text');
const modal = document.querySelector('.gallery-modal');
const modalImg = document.querySelector('.gallery-modal__content');
const modalCloseBtn = document.querySelector('.gallery-modal__close-btn');
const galleryImages = document.querySelectorAll('.gallery__image');

let menuOpen = false;

//Footer copyright date
footerText.textContent = `© ${new Date().getFullYear()} woodoo barbershop`;

//Burger menu
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

//Gallery modal
modal.onclick = () => {
  modal.classList.add('hidden');
}

galleryImages.forEach((img) => img.onclick = () => {
  modal.classList.remove('hidden');
  modalImg.src = img.src;
  modalImg.onclick = (event) => event.stopPropagation();
});

modalCloseBtn.onclick = () => {
  modal.classList.add('hidden');
}

//Jquery script for links smoothing
$(document).ready(function(){
  $("a").on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();
      let hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    } 
  });
});