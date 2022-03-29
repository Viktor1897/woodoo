const menuBtn = document.querySelector('.menu-btn');
const overlayMenuElement = document.querySelector('.menu-overlay');
const overlayNavigationElement = document.querySelector('.menu-overlay__navigation-list');
const footerText = document.querySelector('.edge__text');
const modal = document.querySelector('.gallery-modal');
const modalCloseBtn = document.querySelector('.gallery-modal__close-btn');
const galleryImages = document.querySelectorAll('.gallery__image');
let menuOpen = false;
let modalSplide;


//Footer copyright date
footerText.textContent = `© ${new Date().getFullYear()} simple barbershop`;

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

galleryImages.forEach((img, index) => img.onclick = () => {
  modal.classList.remove('hidden');
  modalSplide.go(index);
});

modalCloseBtn.onclick = () => {
  modal.classList.add('hidden');
}

//Splide gallery

document.addEventListener( 'DOMContentLoaded', function () {
    let splide = new Splide( '.gallery__wrapper', {
      type: 'slide',
      rewind: true, 
      pagination: false,
      perPage: 4, 
      perMove: 1,
      width: '120rem',
      breakpoints: {
        1200: {
          perPage: 3,
          width: '75rem',
        },
        860: {
          perPage: 2,
          width: '50rem',
          
        },
        540: {
          perPage: 1,
          width: '35rem',
        }
      }
    }
      ).mount();
  });

  document.addEventListener( 'DOMContentLoaded', function () {
    modalSplide = new Splide( '#main-slider', {
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
        modalSplide.go( index );
      } );
    }

    modalSplide.on( 'mounted move', function () {
      let thumbnail = thumbnails[ modalSplide.index ];

      if ( thumbnail ) {
        if ( current ) {
          current.classList.remove( 'is-active' );
        }

        thumbnail.classList.add( 'is-active' );
        current = thumbnail;
      }
    } );

    modalSplide.mount();
  });

document.querySelector('.booksy-widget-button').textContent = 'Rezerwacja';

const translationPL = ['O nas', 'Usługi', 'Galeria', 'Kontakt', 'Najlepszy fryzjer męski w Poznaniu', 
'Zapomnij na zawsze o problemach z włosami, teraz to jest nasza troska. Twoje włosy i broda  będą wyglądały perfekcyjnie', 
'Rezerwacja Online', 'Jakość', 'Jesteśmy profesjonalistami w swojej dziedzinie. Możecie nam zaufać', 'Herbata i kawa', 
'Na czas oczekiwania zaproponujemy ci herbatę lub kawę', 'Wi-Fi', 'Dla naszych gości mamy bezpłatny szybki internet', 
'Parking', 'Także mamy bezpłatny parking dla naszych klientów', 'O nas', 
'SIMPLE BARBERSHOP – to przede wszystkim zespół profesjonalistów. Wszyscy nasi mistrzowie posiadają unikalne umiejętności fryzjerskie. Dobierzemy dla ciebie dokładnie taki wizerunek, który ci odpowiada, doradzimy stylizację i nauczymy cię jej używać.', 
'Nie rozdzielamy ludzi. Dlatego zarówno i student, i biznesmen poczują się u nas komfortowo. Twoją decyzją jest nam zaufać, wszystko inne spada na nasze barki. Zapewniamy, że twój wizerunek jest w dobrych rękach.', 'Usługi', 
'Strzyżenie męskie', 'Strzyżenie Brody', 'Strzyżenie chłopca (do 12 lat)', 'Strzyżenie maszynką (1 nasadka)', 
'Strzyżenie męskie + broda', 'Strzyżenie tata + syn', 'Odsiwianie włosów', 'Odsiwianie brody', 'Woskowanie (jedna strefa)', 
'Oczyszczanie twarzy (czarna maska)', 'UKłADanie włosów', 'Płatki pod oczy', 'Koloryzacja włosów', 'Galeria', 'Więcej zdjęć na instagramie', 'Kontakt', 'Pn - Ndz: 9:00 - 21:00', 
'Poznań, ul. Bukowska 78', 'O nas', 'Usługi', 'Galeria', 'Kontakt'];

const translationEN = ['About', 'Services', 'Gallery', 'Contact', 
'THE BEST BARBERSHOP IN POZNAN', 'Forget about hair problems, it’s our duty from now. We are dedicated to make your hair and beard look great.',
'ONLINE BOOKING', 'Quality', 'We are professionals in our field. You can trust us', 'Tea and coffee', 
'We offer tea and coffee for free while waiting in a queue', 'Wi-Fi', 'We have free high-speed internet for our guests', 
'Parking', 'We also have free parking for our clients', 'About us', 
'SIMPLE BARBERSHOP - it is primarily a team of professionals. All our masters have unique hairdressing skills. We perfectly select the best style that suits you, we give  advise on styling and teach how to obtain what you want.',
'We don\'t separate people. Therefore, both student and businessman feel comfortable with us. It is your decision to trust us, the rest falls on our shoulders. We ensure that your hair is in a good hands.',
'Services', 'Men\'s haircut', 'Beard trim', 'kids HAIRCUT UP TO 12 YEARS', 'CLIPPER HAIRCUT (1 ATTACHABLE GUARD)', 'Men\'s haircut + beard trim', 
'HAIRCUT MAN + CHILD', 'GRAY HAIR CAMO', 'GRAY BEARD CAMO', 'WAXING SERVICE (ONE ZONE)', 'BLACK MASK', 'styling', 'patches', 'hair coloring ', 'Gallery', 'MORE PHOTOS ON INSTAGRAM',
'Contacts', 'Mon - Sun: 9:00 - 21:00', 'Poznan, Bukowska 78 st.', 'About', 'Services', 'Gallery', 'Contact']

let lang = 'pl';

const switchLangBtns = document.querySelectorAll('.lang-switcher-btn');
const langIcons = document.querySelectorAll('.lang-switcher-img');

switchLangBtns.forEach(btn => btn.addEventListener('click', changeLanguage));

function changeLanguage() {
  if (lang === 'pl') {
    Array.from(document.querySelectorAll('.lang')).map((item, i) => item.textContent = translationEN[i]);
    document.querySelector('.booksy-widget-button').textContent = 'Book online';
    lang = 'en';
  } else {
    Array.from(document.querySelectorAll('.lang')).map((item, i) => item.textContent = translationPL[i]);
    document.querySelector('.booksy-widget-button').textContent = 'Rezerwacja';
    lang = 'pl';
  }
  langIcons.forEach(icon => icon.src = `./assets/images/${lang === 'en' ? 'pl' : 'en'}.svg`);
}

document.addEventListener('DOMContentLoaded', function () {
  const windowHeight = document.documentElement.clientHeight;
  document.querySelector('.welcome').style.height = windowHeight + 'px';
});