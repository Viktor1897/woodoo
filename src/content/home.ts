export const bookingUrl =
  "https://booksy.com/pl-pl/instant-experiences/widget/126679,204346,332928";
export const academyUrl = "https://simpleacademy.pl/";
export const academyCourses = [
  { name: "Barber od zera", description: "Nauka podstaw strzyżenia i pracy z modelami." },
  { name: "Szkolenie indywidualne", description: "Program podstawowy i zajęcia jeden na jeden." },
  { name: "Level Up", description: "Warsztat dla barberów, którzy chcą rozwinąć wybrane techniki." },
];
export const instagramUrl = "https://www.instagram.com/simple_barbershop_poznan/";
export const email = "simple.barber.info@gmail.com";
export const hours = "Poniedziałek–niedziela, 9:00–21:00";

export const locations = [
  {
    id: "bukowska",
    name: "Bukowska",
    address: "ul. Bukowska 78",
    phone: "+48 786 677 659",
    bookingUrl: "https://simplebarber.booksy.com/",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2433.8439710850994!2d16.88505231580336!3d52.40950397979346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4704452d7295cfaf%3A0x433fc023d049866d!2sSIMPLE%20Barbershop!5e0!3m2!1spl!2spl!4v1645479330364!5m2!1spl!2spl",
  },
  {
    id: "marcelin",
    name: "Marcelin",
    address: "ul. Świerzawska 4",
    phone: "+48 512 184 961",
    bookingUrl: "https://simplebarber2.booksy.com/",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2434.1726717255287!2d16.861291299999998!3d52.4035467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4704452762247389%3A0xb2a426a74db81f52!2sSIMPLE%20Barbershop%20-%20Marcelin!5e0!3m2!1spl!2spl!4v1693049030387!5m2!1spl!2spl",
  },
  {
    id: "katowicka",
    name: "Katowicka",
    address: "ul. Katowicka 55B",
    phone: "+48 789 659 655",
    bookingUrl: "https://simplebarber3.booksy.com/",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2434.548368007135!2d16.963245600000004!3d52.396737099999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47045b10e48f9a29%3A0xf75d31324428c27a!2sSIMPLE%20Barbershop%20-%20Katowicka!5e0!3m2!1spl!2spl!4v1771364765222!5m2!1spl!2spl",
  },
];

// Sample descriptions and prices can be replaced here when the new menu is ready.
export const serviceCategories = [
  {
    label: "Włosy",
    services: [
      { name: "Strzyżenie męskie", description: "Konsultacja, strzyżenie i stylizacja dobrane do Twoich włosów.", price: 80 },
      { name: "Strzyżenie maszynką", description: "Krótka fryzura z użyciem jednej nasadki.", price: 60 },
      { name: "Strzyżenie chłopca", description: "Strzyżenie dla dzieci w wieku od 4 do 11 lat.", price: 65 },
    ],
  },
  {
    label: "Broda",
    services: [
      { name: "Strzyżenie brody", description: "Nadanie kształtu brodzie i wyrównanie konturów.", price: 60 },
      { name: "Odsiwianie brody", description: "Delikatne tonowanie dla naturalnego efektu.", price: 60 },
    ],
  },
  {
    label: "Pakiety",
    services: [
      { name: "Strzyżenie i broda", description: "Kompletna pielęgnacja włosów i brody podczas jednej wizyty.", price: 120 },
      { name: "Tata i syn", description: "Dwa strzyżenia podczas wspólnej wizyty.", price: 140 },
    ],
  },
  {
    label: "Pielęgnacja",
    services: [
      { name: "Odsiwianie włosów", description: "Tonowanie dopasowane do naturalnego koloru włosów.", price: 60 },
      { name: "Oczyszczanie twarzy", description: "Zabieg pielęgnacyjny z czarną maską.", price: 60 },
      { name: "Woskowanie", description: "Usunięcie niechcianego owłosienia w jednej strefie.", price: 20 },
    ],
  },
];

export const gallery = [
  { src: "/assets/images/home/fade.webp", alt: "Krótkie strzyżenie z cieniowaniem boków", caption: "Krótki fade", width: 600, height: 619 },
  { src: "/assets/images/home/classic.webp", alt: "Klasyczne strzyżenie z włosami zaczesanymi do tyłu", caption: "Klasyczny zaczes", width: 600, height: 600 },
  { src: "/assets/images/home/texture.webp", alt: "Dłuższa fryzura z naturalną teksturą", caption: "Długa góra z teksturą", width: 600, height: 600 },
];

export const questions = [
  { question: "Jak umówić wizytę?", answer: "Wybierz salon w Poznaniu. W Booksy zobaczysz dostępne usługi, barberów i terminy.", href: "#lokalizacje", link: "Wybierz salon" },
  { question: "Co wybrać, jeśli chcę zmienić fryzurę?", answer: "Zacznij od strzyżenia. Na początku wizyty omówisz z barberem długość, kształt i sposób układania włosów." },
  { question: "Gdzie znajdę aktualne ceny?", answer: "Ceny zależą od usługi i wybranego barbera. Aktualne ceny znajdziesz w Booksy po wybraniu salonu." },
];
