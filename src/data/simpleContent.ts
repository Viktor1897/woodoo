export type Locale = "pl" | "en";

export type ServiceCategory = "all" | "haircuts" | "beard-combos" | "care-extras";

export type LocationId = "bukowska" | "marcelin" | "katowicka";

export type BarberTier = "Barber" | "Top Barber" | "Premium Barber";

export interface LocationItem {
  id: LocationId;
  shortName: string;
  name: Record<Locale, string>;
  district: Record<Locale, string>;
  address: string;
  city: string;
  phone: string;
  phoneHref: string;
  rating: string;
  reviewsCount: Record<Locale, string>;
  hours: Record<Locale, string>;
  parking: Record<Locale, string>;
  booksyUrl: string;
  mapsUrl: string;
  hasAcademy?: boolean;
  mapCoords: { x: number; y: number };
}

export interface ServiceItem {
  id: string;
  category: Exclude<ServiceCategory, "all">;
  name: Record<Locale, string>;
  description: Record<Locale, string>;
  duration: Record<Locale, string>;
  prices:
    | { kind: "tiered"; barber: number; top: number; premium: number }
    | { kind: "flat"; price: number };
}

export interface BarberItem {
  id: string;
  name: string;
  tier: BarberTier;
  locationId: LocationId;
  locationLabel: string;
  image: string;
  experience: Record<Locale, string>;
  specialty: Record<Locale, string>;
}

export interface OfferItem {
  id: string;
  code: string;
  tag: Record<Locale, string>;
  title: Record<Locale, string>;
  priceNote: Record<Locale, string>;
  description: Record<Locale, string>;
  cta: Record<Locale, string>;
}

export interface ReviewItem {
  id: string;
  author: string;
  locationLabel: string;
  source: "Booksy" | "Google";
  rating: string;
  date: Record<Locale, string>;
  text: Record<Locale, string>;
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: Record<Locale, string>;
  caption: Record<Locale, string>;
  aspect: "tall" | "wide";
}

export const LOCATIONS: LocationItem[] = [
  {
    id: "bukowska",
    shortName: "Bukowska",
    name: {
      pl: "SIMPLE Barbershop — Bukowska",
      en: "SIMPLE Barbershop — Bukowska",
    },
    district: {
      pl: "Jeżyce / Grunwald",
      en: "Jeżyce / Grunwald",
    },
    address: "ul. Bukowska 78",
    city: "60-396 Poznań",
    phone: "+48 786 677 659",
    phoneHref: "tel:+48786677659",
    rating: "5.0",
    reviewsCount: {
      pl: "4 700+ opinii",
      en: "4,700+ reviews",
    },
    hours: {
      pl: "Pn–Ndz 09:00–21:00",
      en: "Mon–Sun 09:00–21:00",
    },
    parking: {
      pl: "Darmowy parking przy salonie",
      en: "Free on-site parking",
    },
    booksyUrl: "https://booksy.com/pl-pl/",
    mapsUrl: "https://maps.google.com/?q=ul.+Bukowska+78,+Poznan",
    mapCoords: { x: 27, y: 48 },
  },
  {
    id: "marcelin",
    shortName: "Marcelin",
    name: {
      pl: "SIMPLE Barbershop — Marcelin",
      en: "SIMPLE Barbershop — Marcelin",
    },
    district: {
      pl: "Marcelin / Business Garden",
      en: "Marcelin / Business Garden",
    },
    address: "ul. Świerzawska 4",
    city: "60-321 Poznań",
    phone: "+48 512 184 961",
    phoneHref: "tel:+48512184961",
    rating: "5.0",
    reviewsCount: {
      pl: "5 000+ opinii",
      en: "5,000+ reviews",
    },
    hours: {
      pl: "Pn–Ndz 09:00–21:00",
      en: "Mon–Sun 09:00–21:00",
    },
    parking: {
      pl: "Darmowy parking dla klientów",
      en: "Free client parking",
    },
    booksyUrl: "https://booksy.com/pl-pl/",
    mapsUrl: "https://maps.google.com/?q=ul.+Swierzawska+4,+Poznan",
    mapCoords: { x: 18, y: 61 },
  },
  {
    id: "katowicka",
    shortName: "Katowicka",
    name: {
      pl: "SIMPLE Barbershop & Academy — Katowicka",
      en: "SIMPLE Barbershop & Academy — Katowicka",
    },
    district: {
      pl: "Malta / Nowe Miasto",
      en: "Malta / Nowe Miasto",
    },
    address: "ul. Katowicka 55B",
    city: "61-131 Poznań",
    phone: "+48 789 659 655",
    phoneHref: "tel:+48789659655",
    rating: "5.0",
    reviewsCount: {
      pl: "5 000+ opinii",
      en: "5,000+ reviews",
    },
    hours: {
      pl: "Pn–Ndz 09:00–21:00",
      en: "Mon–Sun 09:00–21:00",
    },
    parking: {
      pl: "Darmowy parking + Akademia",
      en: "Free parking + Academy",
    },
    booksyUrl: "https://booksy.com/pl-pl/",
    mapsUrl: "https://maps.google.com/?q=ul.+Katowicka+55B,+Poznan",
    hasAcademy: true,
    mapCoords: { x: 74, y: 55 },
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "haircut",
    category: "haircuts",
    name: {
      pl: "Strzyżenie",
      en: "Haircut",
    },
    description: {
      pl: "Konsultacja, mycie głowy, precyzyjne strzyżenie nożyczkami i maszynką, stylizacja oraz wskazówki do codziennego układania.",
      en: "Consultation, wash, tailored scissor and clipper work, finishing style, and practical daily maintenance advice.",
    },
    duration: {
      pl: "45 min",
      en: "45 min",
    },
    prices: { kind: "tiered", barber: 80, top: 100, premium: 120 },
  },
  {
    id: "haircut-beard",
    category: "beard-combos",
    name: {
      pl: "Strzyżenie + broda",
      en: "Haircut + Beard",
    },
    description: {
      pl: "Pełny pakiet: dopasowane strzyżenie włosów oraz modelowanie brody z konturowaniem brzytwą, gorącym ręcznikiem i olejkiem.",
      en: "Complete session: tailored haircut paired with full beard sculpting, hot towel, straight-razor line-up, and conditioning oil.",
    },
    duration: {
      pl: "75 min",
      en: "75 min",
    },
    prices: { kind: "tiered", barber: 120, top: 145, premium: 170 },
  },
  {
    id: "beard-trim",
    category: "beard-combos",
    name: {
      pl: "Strzyżenie brody",
      en: "Beard Trim",
    },
    description: {
      pl: "Nadanie kształtu, wyrównanie długości, wykończenie konturów brzytwą oraz pielęgnacja balsamem i olejkiem.",
      en: "Shape definition, length balancing, straight-razor cheek and neck detailing, finished with balm and oil.",
    },
    duration: {
      pl: "30 min",
      en: "30 min",
    },
    prices: { kind: "flat", price: 60 },
  },
  {
    id: "boys-haircut",
    category: "haircuts",
    name: {
      pl: "Strzyżenie chłopca (4–11 lat)",
      en: "Boy's Haircut (4–11 y.o.)",
    },
    description: {
      pl: "Cierpliwe, staranne strzyżenie dla młodszych klientów w spokojnej atmosferze, dopasowane do naturalnego wzrostu włosów.",
      en: "Clean, patient haircut for younger guests aged 4–11, shaped for easy everyday wear without fuss.",
    },
    duration: {
      pl: "30 min",
      en: "30 min",
    },
    prices: { kind: "flat", price: 70 },
  },
  {
    id: "clipper-cut",
    category: "haircuts",
    name: {
      pl: "Strzyżenie maszynką (1 nasadka)",
      en: "Clipper Cut (1 guard)",
    },
    description: {
      pl: "Jednolita długość na całej głowie jedną nasadką, równe kontury karku i uszu, mycie oraz wykończenie.",
      en: "Single-guard uniform cut across the entire head with crisp hairline detailing and a wash.",
    },
    duration: {
      pl: "30 min",
      en: "30 min",
    },
    prices: { kind: "flat", price: 60 },
  },
  {
    id: "hair-grey-blending",
    category: "care-extras",
    name: {
      pl: "Odsiwianie włosów",
      en: "Hair Grey Blending",
    },
    description: {
      pl: "Subtelne stonowanie siwizny bez sztucznego efektu odrostu. Naturalny odcień wypłukuje się równomiernie przez 4–5 tygodni.",
      en: "Low-contrast grey toning with zero harsh regrowth line. Fades naturally over 4–5 weeks.",
    },
    duration: {
      pl: "20 min",
      en: "20 min",
    },
    prices: { kind: "flat", price: 60 },
  },
  {
    id: "beard-grey-blending",
    category: "care-extras",
    name: {
      pl: "Odsiwianie brody",
      en: "Beard Grey Blending",
    },
    description: {
      pl: "Wyrównanie koloru zarostu i przyciemnienie siwych pasm dla czystszego, pełniejszego konturu brody.",
      en: "Evens out beard tone and blends grey patches for a denser, sharper silhouette.",
    },
    duration: {
      pl: "20 min",
      en: "20 min",
    },
    prices: { kind: "flat", price: 60 },
  },
  {
    id: "black-mask",
    category: "care-extras",
    name: {
      pl: "Oczyszczanie twarzy — czarna maska",
      en: "Facial Cleansing — Black Mask",
    },
    description: {
      pl: "Głębokie oczyszczenie porów maską węglową peel-off z parowaniem twarzy i kremem łagodzącym po zabiegu.",
      en: "Deep pore cleansing with charcoal peel-off mask, warm towel prep, and soothing post-care moisturizer.",
    },
    duration: {
      pl: "25 min",
      en: "25 min",
    },
    prices: { kind: "flat", price: 60 },
  },
  {
    id: "waxing",
    category: "care-extras",
    name: {
      pl: "Woskowanie — 1 strefa",
      en: "Waxing — 1 zone",
    },
    description: {
      pl: "Szybkie i precyzyjne usunięcie owłosienia twardym woskiem (nos, uszy lub przestrzeń między brwiami).",
      en: "Quick, clean hot-wax removal for one selected area (nose, ears, or brow center).",
    },
    duration: {
      pl: "10 min",
      en: "10 min",
    },
    prices: { kind: "flat", price: 20 },
  },
  {
    id: "eye-patches",
    category: "care-extras",
    name: {
      pl: "Płatki pod oczy",
      en: "Under-Eye Patches",
    },
    description: {
      pl: "Chłodzące płatki hydrożelowe redukujące oznaki zmęczenia i opuchliznę — idealne jako dodatek podczas strzyżenia.",
      en: "Cooling hydrogel patches that reduce puffiness and fatigue—applied seamlessly during your cut.",
    },
    duration: {
      pl: "15 min",
      en: "15 min",
    },
    prices: { kind: "flat", price: 20 },
  },
];

export const BARBERS: BarberItem[] = [
  {
    id: "marek-kowalski",
    name: "Marek Kowalski",
    tier: "Premium Barber",
    locationId: "bukowska",
    locationLabel: "Bukowska 78",
    image: "/assets/images/barber-1.jpg",
    experience: {
      pl: "8 lat w zawodzie",
      en: "8 years experience",
    },
    specialty: {
      pl: "Klasyczne formy nożyczkowe, teksturowane cropy, precyzyjne kontury brody.",
      en: "Scissor-over-comb architecture, textured crops, sharp beard geometry.",
    },
  },
  {
    id: "artem-kovalenko",
    name: "Artem Kovalenko",
    tier: "Top Barber",
    locationId: "marcelin",
    locationLabel: "Świerzawska 4",
    image: "/assets/images/barber-2.jpg",
    experience: {
      pl: "6 lat w zawodzie",
      en: "6 years experience",
    },
    specialty: {
      pl: "Skin fade, nowoczesne średnie długości, strzyżenia dopasowane do kształtu głowy.",
      en: "Clean skin fades, structured medium lengths, tailored proportions.",
    },
  },
  {
    id: "jakub-nowak",
    name: "Jakub Nowak",
    tier: "Premium Barber",
    locationId: "katowicka",
    locationLabel: "Katowicka 55B",
    image: "/assets/images/barber-3.jpg",
    experience: {
      pl: "9 lat · Instruktor Akademii",
      en: "9 years · Academy Instructor",
    },
    specialty: {
      pl: "Architektura pełnej brody, brzytwa, szkolenia barberów w SIMPLE Academy.",
      en: "Full beard structure, straight-razor work, lead instructor at SIMPLE Academy.",
    },
  },
  {
    id: "tomasz-zielinski",
    name: "Tomasz Zieliński",
    tier: "Top Barber",
    locationId: "bukowska",
    locationLabel: "Bukowska 78",
    image: "/assets/images/barber-4.jpg",
    experience: {
      pl: "5 lat w zawodzie",
      en: "5 years experience",
    },
    specialty: {
      pl: "Taper fade, naturalne przejścia, lekkie fryzury niewymagające długiej stylizacji.",
      en: "Low taper fades, seamless transitions, low-maintenance everyday cuts.",
    },
  },
];

export const OFFERS: OfferItem[] = [
  {
    id: "gift-voucher",
    code: "01 / VOUCHER",
    tag: {
      pl: "Dostępne od ręki",
      en: "Available daily",
    },
    title: {
      pl: "Voucher podarunkowy",
      en: "Gift Vouchers",
    },
    priceNote: {
      pl: "Dowolna kwota lub usługa",
      en: "Custom value or service",
    },
    description: {
      pl: "Minimalistyczny, drukowany voucher na grubym papierze lub wersja elektroniczna PDF. Ważny przez 6 miesięcy we wszystkich 3 salonach w Poznaniu.",
      en: "Printed on heavy tactile stock or delivered digitally. Redeemable for 6 months across all 3 Poznań locations.",
    },
    cta: {
      pl: "Zamów voucher",
      en: "Order a voucher",
    },
  },
  {
    id: "father-son",
    code: "02 / DUO",
    tag: {
      pl: "Pakiet rodzinny",
      en: "Family combo",
    },
    title: {
      pl: "Tata i Syn",
      en: "Father & Son",
    },
    priceNote: {
      pl: "135 PLN zamiast 150 PLN",
      en: "135 PLN instead of 150 PLN",
    },
    description: {
      pl: "Dwa stanowiska obok siebie o jednej godzinie. Strzyżenie męskie (Barber) oraz strzyżenie chłopca (4–11 lat) w jednym, sprawnym terminie.",
      en: "Side-by-side chairs in one appointment slot. Men's Haircut (Barber tier) plus Boy's Haircut (4–11 y.o.) booked together.",
    },
    cta: {
      pl: "Zarezerwuj pakiet",
      en: "Book the combo",
    },
  },
  {
    id: "first-visit",
    code: "03 / START",
    tag: {
      pl: "Dla nowych klientów",
      en: "New clients",
    },
    title: {
      pl: "Pierwsza wizyta −15%",
      en: "First Visit −15%",
    },
    priceNote: {
      pl: "Poniedziałek – Środa, 9:00–14:00",
      en: "Monday – Wednesday, 9:00–14:00",
    },
    description: {
      pl: "Pierwszy raz w SIMPLE? Skorzystaj z rabatu 15% na dowolne strzyżenie lub pakiet z brodą w godzinach porannych od poniedziałku do środy.",
      en: "New to SIMPLE? Take 15% off any haircut or haircut + beard combo during weekday mornings, Monday through Wednesday.",
    },
    cta: {
      pl: "Odbierz termin",
      en: "Claim slot",
    },
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "fade",
    src: "/assets/images/gallery-fade.jpg",
    alt: {
      pl: "Precyzyjny skin fade i równy kontur brody wykonany w SIMPLE Barbershop",
      en: "Precision skin fade and crisp beard line-up at SIMPLE Barbershop",
    },
    caption: {
      pl: "Czyste przejście · Kontur brzytwą",
      en: "Clean fade · Straight-razor line",
    },
    aspect: "tall",
  },
  {
    id: "interior",
    src: "/assets/images/gallery-interior.jpg",
    alt: {
      pl: "Minimalistyczne betonowe wnętrze salonu SIMPLE Barbershop w Poznaniu",
      en: "Minimalist concrete interior of SIMPLE Barbershop in Poznań",
    },
    caption: {
      pl: "Surowy beton · Architektura wnętrza",
      en: "Raw concrete · Spatial clarity",
    },
    aspect: "wide",
  },
  {
    id: "tools",
    src: "/assets/images/gallery-tools.jpg",
    alt: {
      pl: "Japońskie nożyczki barberskie, maszynka i brzytwa na betonowym blacie",
      en: "Japanese steel shears, cordless clipper, and straight razor on concrete",
    },
    caption: {
      pl: "Narzędzia · Codzienna dyscyplina",
      en: "Instruments · Daily discipline",
    },
    aspect: "wide",
  },
  {
    id: "coffee",
    src: "/assets/images/gallery-coffee.jpg",
    alt: {
      pl: "Kawa specialty podawana klientom przed strzyżeniem w SIMPLE Barbershop",
      en: "Specialty espresso served to guests before their cut at SIMPLE Barbershop",
    },
    caption: {
      pl: "Kawa specialty · Chwila spokoju",
      en: "Specialty coffee · Unhurried pace",
    },
    aspect: "tall",
  },
];

export const REVIEWS: ReviewItem[] = [
  {
    id: "r1",
    author: "Michał K.",
    locationLabel: "Bukowska",
    source: "Booksy",
    rating: "5.0",
    date: { pl: "2 tygodnie temu", en: "2 weeks ago" },
    text: {
      pl: "Chodzę na Bukowską od ponad dwóch lat. Zero zbędnego gadania, zawsze punktualnie, a włosy układają się dobrze nawet po miesiącu od wizyty. Darmowy parking to duży plus.",
      en: "Been coming to Bukowska for over two years. Always on time, zero small-talk pressure, and the cut holds its shape cleanly even four weeks later. Free parking makes it effortless.",
    },
  },
  {
    id: "r2",
    author: "Dawid W.",
    locationLabel: "Marcelin",
    source: "Google",
    rating: "5.0",
    date: { pl: "miesiąc temu", en: "1 month ago" },
    text: {
      pl: "Wpadłem po pracy z Business Garden na strzyżenie + brodę do Artema. Konkretna konsultacja na starcie, ostre linie bez podrażnień i świetna kawa przed wejściem na fotel.",
      en: "Stopped by after work from Business Garden for a Haircut + Beard with Artem. Direct consultation upfront, sharp razor lines with zero irritation, and genuinely good espresso.",
    },
  },
  {
    id: "r3",
    author: "Krzysztof M.",
    locationLabel: "Katowicka",
    source: "Booksy",
    rating: "5.0",
    date: { pl: "3 tygodnie temu", en: "3 weeks ago" },
    text: {
      pl: "Otwarte w niedzielę do 21:00 ratuje grafik. Jakub świetnie ogarnął dłuższą brodę i doradził, czym ją układać w domu, bez wciskania kosmetyków na siłę.",
      en: "Open Sundays until 21:00 saves my schedule. Jakub shaped a longer beard with real precision and gave practical advice for home upkeep without pushing products.",
    },
  },
  {
    id: "r4",
    author: "Liam T.",
    locationLabel: "Bukowska",
    source: "Google",
    rating: "5.0",
    date: { pl: "miesiąc temu", en: "1 month ago" },
    text: {
      pl: "Najlepszy barbershop w Poznaniu dla anglojęzycznych klientów. Zrozumieli dokładnie, o jaki fade mi chodzi, czysta przestrzeń i przejrzysty cennik bez ukrytych dopłat.",
      en: "Best barbershop in Poznań for English speakers. They understood the exact taper I wanted immediately—spotless space and transparent pricing with zero surprises.",
    },
  },
];

export const COPY = {
  pl: {
    skipToContent: "Przejdź do treści",
    nav: [
      { id: "services", label: "Usługi" },
      { id: "locations", label: "Lokalizacje" },
      { id: "barbers", label: "Barberzy" },
      { id: "academy", label: "Akademia" },
      { id: "offers", label: "Oferty" },
      { id: "reviews", label: "Opinie" },
    ],
    bookOnline: "Umów wizytę",
    menuOpen: "Menu",
    menuClose: "Zamknij",
    hero: {
      eyebrow: "Poznań · Bukowska · Marcelin · Katowicka",
      headline: "Konkretne strzyżenie. Zero zbędnych słów.",
      subcopy:
        "Najwyżej oceniana sieć barbershopów w Poznaniu. Trzy salony, przejrzyste poziomy barberów i otwarte drzwi przez 7 dni w tygodniu.",
      primaryCta: "Umów wizytę online",
      secondaryCta: "Zobacz cennik",
      openNow: "Czynne codziennie 09:00–21:00",
      trust: [
        { value: "5.0 ★", label: "Średnia ocena" },
        { value: "14 700+", label: "Zweryfikowanych opinii" },
        { value: "3 salony", label: "W Poznaniu" },
        { value: "Pn–Ndz", label: "09:00–21:00" },
      ],
    },
    locations: {
      index: "01",
      label: "Lokalizacje",
      title: "Trzy punkty w Poznaniu",
      lead: "Wybierz najbliższy salon. W każdym czeka darmowy parking, ten sam standard pracy i godziny otwarcia do 21:00 każdego dnia.",
      listView: "Lista",
      mapView: "Mapa",
      bookAtLocation: "Umów w tym salonie",
      directions: "Trasa",
      academyTag: "Barbershop + Akademia",
      mapLegendTitle: "Poznań · Sieć SIMPLE",
      mapLegendHint: "Wybierz punkt na mapie, aby zobaczyć szczegóły salonu.",
      hoursLabel: "Godziny",
      phoneLabel: "Telefon",
    },
    services: {
      index: "02",
      label: "Cennik i usługi",
      title: "Przejrzyste ceny. Trzy poziomy.",
      lead: "Płacisz za doświadczenie barbera i czas poświęcony detalom — bez ukrytych dopłat przy kasie. Kliknij usługę, aby zobaczyć zakres i czas trwania.",
      tabs: [
        { id: "all" as const, label: "Wszystkie" },
        { id: "haircuts" as const, label: "Strzyżenia" },
        { id: "beard-combos" as const, label: "Broda i pakiety" },
        { id: "care-extras" as const, label: "Pielęgnacja i dodatki" },
      ],
      colService: "Usługa",
      colBarber: "Barber",
      colTop: "Top Barber",
      colPremium: "Premium Barber",
      fixedPrice: "Stała cena",
      expandLabel: "Szczegóły",
      bookService: "Umów tę usługę",
      tierNote:
        "Różnica między poziomami Barber, Top Barber i Premium Barber wynika ze stażu, specjalizacji oraz popytu na terminy.",
    },
    standard: {
      index: "03",
      label: "Standard SIMPLE",
      title: "Rzemiosło bez sztucznej otoczki",
      philosophy:
        "Zbudowaliśmy SIMPLE jako miejsce, w którym liczy się forma, powtarzalna jakość i szacunek do Twojego czasu. Pracujemy w zespole specjalistów, którzy dobierają strzyżenie do struktury włosa i codziennego trybu życia — bez pozy, zbędnego patosu i nachalnej sprzedaży. Tak samo dobrze czują się tu studenci, jak i właściciele firm.",
      philosophySecondary:
        "Każda wizyta zaczyna się od krótkiej, rzeczowej rozmowy i kończy fryzurą, którą bez problemu ułożysz rano w dwie minuty.",
      perks: [
        {
          num: "01",
          title: "Darmowy parking",
          desc: "Wygodny postój bezpośrednio przy każdym z trzech poznańskich salonów.",
        },
        {
          num: "02",
          title: "Kawa specialty i herbata",
          desc: "Świeżo parzone espresso, przelew lub herbata w cenie każdej wizyty.",
        },
        {
          num: "03",
          title: "Szybkie Wi-Fi",
          desc: "Stabilne łącze, jeśli przed wizytą musisz jeszcze odpowiedzieć na maile.",
        },
        {
          num: "04",
          title: "Otwarte w niedziele",
          desc: "Pracujemy 7 dni w tygodniu od 9:00 do 21:00 — bez zamykania w weekendy.",
        },
      ],
    },
    barbers: {
      index: "04",
      label: "Zespół i Akademia",
      title: "Ludzie za fotelem",
      lead: "Wybrani specjaliści z naszych trzech poznańskich lokalizacji. Pełny grafik każdego barbera dostępny przy rezerwacji.",
      bookBarber: "Umów wizytę",
      academy: {
        badge: "SIMPLE Academy · Katowicka 55B",
        title: "Szkolenia barberskie od podstaw i poziom zaawansowany",
        desc: "Uczymy realnej pracy przy fotelu — geometrii strzyżeń, techniki maszynki, brzytwy i budowania bazy klientów. Małe grupy, intensywna praktyka na modelach pod okiem instruktorów SIMPLE.",
        ctaPrimary: "Zapytaj o kursy",
        ctaSecondary: "Zadzwoń: +48 789 659 655",
      },
    },
    offers: {
      index: "05",
      label: "Oferty i vouchery",
      title: "Konkretne okazje",
      lead: "Bez sezonowych sztuczek. Proste zasady na prezenty, wizyty rodzinne i pierwsze spotkanie z salonem.",
    },
    reviews: {
      index: "06",
      label: "Opinie i klimat",
      title: "5.0 na podstawie 14 700+ wizyt",
      lead: "Liczby nie biorą się z przypadku. Zobacz przestrzeń, detale pracy i wybrane opinie klientów z Booksy oraz Google.",
      verifiedLabel: "Zweryfikowana opinia",
      scoreNote: "Średnia ważona ze wszystkich 3 salonów w Poznaniu",
    },
    footer: {
      tagline: "Trzy salony w Poznaniu. Czynne codziennie 09:00–21:00.",
      locationsHeading: "Salony",
      hoursHeading: "Godziny i kontakt",
      hoursValue: "Pn–Ndz: 09:00–21:00",
      socialsHeading: "Znajdź nas",
      finalCta: "Umów wizytę online",
      rights: "Wszystkie prawa zastrzeżone.",
    },
    bookingModal: {
      title: "Wybierz salon do rezerwacji",
      subtitle: "Wybierz jedną z 3 lokalizacji w Poznaniu, aby przejść do grafiku online lub zadzwonić.",
      selectedContext: "Wybrano",
      openBooksy: "Rezerwuj w Booksy",
      callDirect: "Zadzwoń",
      close: "Zamknij okno",
    },
  },
  en: {
    skipToContent: "Skip to content",
    nav: [
      { id: "services", label: "Services" },
      { id: "locations", label: "Locations" },
      { id: "barbers", label: "Barbers" },
      { id: "academy", label: "Academy" },
      { id: "offers", label: "Offers" },
      { id: "reviews", label: "Reviews" },
    ],
    bookOnline: "Book Online",
    menuOpen: "Menu",
    menuClose: "Close",
    hero: {
      eyebrow: "Poznań · Bukowska · Marcelin · Katowicka",
      headline: "Precision Cuts. No Pretense.",
      subcopy:
        "Poznań's top-rated barbershop chain. Three locations, transparent barber tiers, and open doors 7 days a week.",
      primaryCta: "Book an Appointment",
      secondaryCta: "View Prices",
      openNow: "Open daily 09:00–21:00",
      trust: [
        { value: "5.0 ★", label: "Average rating" },
        { value: "14,700+", label: "Verified reviews" },
        { value: "3 Locations", label: "Across Poznań" },
        { value: "Mon–Sun", label: "09:00–21:00" },
      ],
    },
    locations: {
      index: "01",
      label: "Locations",
      title: "Three shops in Poznań",
      lead: "Pick the branch closest to you. Every location offers free parking, consistent craft, and daily hours until 21:00.",
      listView: "List",
      mapView: "Map",
      bookAtLocation: "Book at this location",
      directions: "Directions",
      academyTag: "Barbershop + Academy",
      mapLegendTitle: "Poznań · SIMPLE Network",
      mapLegendHint: "Select a pin on the map to inspect branch details.",
      hoursLabel: "Hours",
      phoneLabel: "Phone",
    },
    services: {
      index: "02",
      label: "Services & Pricing",
      title: "Clear pricing. Three tiers.",
      lead: "Pricing reflects barber tenure and chair demand—never surprise add-ons at checkout. Select any row for scope and duration.",
      tabs: [
        { id: "all" as const, label: "All" },
        { id: "haircuts" as const, label: "Haircuts" },
        { id: "beard-combos" as const, label: "Beard & Combos" },
        { id: "care-extras" as const, label: "Care & Extras" },
      ],
      colService: "Service",
      colBarber: "Barber",
      colTop: "Top Barber",
      colPremium: "Premium Barber",
      fixedPrice: "Standard rate",
      expandLabel: "Details",
      bookService: "Book this service",
      tierNote:
        "Barber, Top Barber, and Premium Barber tiers reflect years behind the chair, technical specialization, and schedule demand.",
    },
    standard: {
      index: "03",
      label: "The SIMPLE Standard",
      title: "Focused craft, zero theatrics",
      philosophy:
        "We built SIMPLE around tailored geometry, consistent execution, and respect for your schedule. Our specialists cut for your hair texture and daily routine—without clichés, gimmicks, or pushy retail pitches. Students and executives sit side by side in the same unpretentious space.",
      philosophySecondary:
        "Every appointment starts with a direct consultation and ends with a cut you can style in two minutes flat.",
      perks: [
        {
          num: "01",
          title: "Free Parking",
          desc: "Dedicated complimentary parking right outside all three Poznań locations.",
        },
        {
          num: "02",
          title: "Specialty Coffee & Tea",
          desc: "Freshly pulled espresso, filter coffee, or tea included with every visit.",
        },
        {
          num: "03",
          title: "High-Speed Wi-Fi",
          desc: "Fast, reliable connection if you need to clear messages before your slot.",
        },
        {
          num: "04",
          title: "Open Sundays",
          desc: "Open 7 days a week from 09:00 to 21:00—built for real-world schedules.",
        },
      ],
    },
    barbers: {
      index: "04",
      label: "Barbers & Academy",
      title: "The team behind the chair",
      lead: "Featured specialists across our three Poznań branches. Full rosters and live availability are shown when booking.",
      bookBarber: "Book",
      academy: {
        badge: "SIMPLE Academy · Katowicka 55B",
        title: "Barber training for beginners & working pros",
        desc: "Hands-on education rooted in real shop floor standards—scissor geometry, fade systems, straight-razor control, and client retention. Small cohorts with live model practice led by senior SIMPLE instructors.",
        ctaPrimary: "Inquire about courses",
        ctaSecondary: "Call: +48 789 659 655",
      },
    },
    offers: {
      index: "05",
      label: "Offers & Vouchers",
      title: "Straightforward offers",
      lead: "No gimmicks or cluttered coupons. Clear terms for gifts, family bookings, and your first chair session.",
    },
    reviews: {
      index: "06",
      label: "Reviews & Atmosphere",
      title: "5.0 across 14,700+ visits",
      lead: "Consistency shows up in the numbers. Explore the craft, the space, and recent verified reviews from Booksy and Google.",
      verifiedLabel: "Verified review",
      scoreNote: "Combined average across all 3 Poznań shops",
    },
    footer: {
      tagline: "Three locations in Poznań. Open daily 09:00–21:00.",
      locationsHeading: "Locations",
      hoursHeading: "Hours & Contact",
      hoursValue: "Mon–Sun: 09:00–21:00",
      socialsHeading: "Connect",
      finalCta: "Book Online",
      rights: "All rights reserved.",
    },
    bookingModal: {
      title: "Choose a branch to book",
      subtitle: "Select one of our 3 Poznań locations to open live booking or call the front desk.",
      selectedContext: "Selected",
      openBooksy: "Book on Booksy",
      callDirect: "Call shop",
      close: "Close dialog",
    },
  },
} as const;
