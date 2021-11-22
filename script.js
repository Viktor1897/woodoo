const menuBtn = document.querySelector('.menu-btn');
const overlayMenuElement = document.querySelector('.menu-overlay');
const overlayNavigationElement = document.querySelector('.menu-overlay__navigation-list');
const footerText = document.querySelector('.edge__text');
const modal = document.querySelector('.gallery-modal');
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

//Gallery modal
modal.onclick = (e) => {
  if (e.target.classList.contains('gallery-modal')) {
    modal.classList.add('hidden');
  }
}

galleryImages.forEach((img) => img.onclick = () => {
  modal.classList.remove('hidden');
});

modalCloseBtn.onclick = () => {
  modal.classList.add('hidden');
}

//Splide gallery
document.addEventListener( 'DOMContentLoaded', function() {
    let splide = new Splide( '#main-slider', {
      pagination: false,
      type: 'loop',
    } );

    let thumbnails = document.getElementsByClassName( 'thumbnail' );
    let current;

    for ( let i = 0; i < thumbnails.length; i++ ) {
      initThumbnail( thumbnails[ i ], i );
    }

    function initThumbnail( thumbnail, index ) {
      thumbnail.addEventListener( 'click', function () {
        splide.go( index );
      } );
    }

    splide.on( 'mounted move', function () {
      let thumbnail = thumbnails[ splide.index ];

      if ( thumbnail ) {
        if ( current ) {
          current.classList.remove( 'is-active' );
        }

        thumbnail.classList.add( 'is-active' );
        current = thumbnail;
      }
    } );

    splide.mount();
  } );