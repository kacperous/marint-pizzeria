export const site = {
  name: 'Przędza',
  tagline: 'Pizza neapolitańska z pieca opalanego drewnem',
  street: 'ul. Przędzalniana 68',
  postal: '90-338',
  city: 'Łódź',
  district: 'Księży Młyn',
  phone: '42 630 18 48',
  phoneHref: 'tel:+48426301848',
  email: 'stolik@przedza.pl',
  nip: '725-000-00-00',
  krs: '0000000000',
  company: 'Przędza sp. z o.o.',
  geo: { lat: 51.7566, lon: 19.4836 },
  instagram: 'https://www.instagram.com/',
  facebook: 'https://www.facebook.com/',
};

export type Day = { label: string; short: string; open: string; close: string };

export const hours: Day[] = [
  { label: 'Niedziela', short: 'Nd', open: '13:00', close: '21:00' },
  { label: 'Poniedziałek', short: 'Pn', open: '12:00', close: '22:00' },
  { label: 'Wtorek', short: 'Wt', open: '12:00', close: '22:00' },
  { label: 'Środa', short: 'Śr', open: '12:00', close: '22:00' },
  { label: 'Czwartek', short: 'Cz', open: '12:00', close: '22:00' },
  { label: 'Piątek', short: 'Pt', open: '12:00', close: '23:00' },
  { label: 'Sobota', short: 'Sb', open: '12:00', close: '23:00' },
];

export const hoursSummary = [
  { days: 'Poniedziałek – czwartek', time: '12:00 – 22:00' },
  { days: 'Piątek – sobota', time: '12:00 – 23:00' },
  { days: 'Niedziela', time: '13:00 – 21:00' },
];

export type Pizza = {
  name: string;
  ingredients: string;
  price: number;
  veg?: boolean;
  vegan?: boolean;
  hot?: boolean;
};

export const rosse: Pizza[] = [
  { name: 'Marinara', ingredients: 'pomidory San Marzano, czosnek, oregano, oliwa extra vergine', price: 29, vegan: true },
  { name: 'Margherita', ingredients: 'pomidory San Marzano, fior di latte, bazylia, oliwa', price: 34, veg: true },
  { name: 'Bufalina', ingredients: 'pomidory San Marzano, mozzarella di bufala, bazylia, oliwa', price: 44, veg: true },
  { name: 'Stracciatella', ingredients: 'pomidory San Marzano, stracciatella dodana po upieczeniu, bazylia, czarny pieprz', price: 46, veg: true },
  { name: 'Diavola', ingredients: 'pomidory San Marzano, fior di latte, salame piccante, oliwa z chili', price: 42, hot: true },
  { name: 'Capricciosa', ingredients: 'pomidory San Marzano, fior di latte, szynka cotto, pieczarki, karczochy, oliwki', price: 46 },
  { name: 'Fabrykancka', ingredients: 'pomidory San Marzano, fior di latte, wędzona kiełbasa, czerwona cebula, majeranek', price: 44 },
];

export const bianche: Pizza[] = [
  { name: 'Funghi e spinaci', ingredients: 'fior di latte, grzyby leśne, szpinak, czosnek, parmezan', price: 44, veg: true },
  { name: 'Quattro formaggi', ingredients: 'fior di latte, gorgonzola, wędzona provola, parmezan, odrobina miodu', price: 46, veg: true },
  { name: 'Mortadella e pistacchio', ingredients: 'fior di latte, mortadela, pesto pistacjowe, burrata', price: 52 },
];

export const extras = [
  { name: 'Tiramisu w słoiku', price: 22 },
  { name: 'Cannolo z ricottą i pistacją', price: 16 },
  { name: 'Lemoniada domowa 0,4 l', price: 14 },
  { name: 'Piwo rzemieślnicze z Łodzi 0,5 l', price: 18 },
  { name: 'Espresso', price: 9 },
  { name: 'Woda 0,5 l', price: 8 },
];

export const promos = [
  {
    title: 'Wtorkowa Margherita',
    price: '25 zł',
    old: '34 zł',
    note: 'w każdy wtorek, cały dzień, na sali i na wynos',
  },
  {
    title: 'Lunch w tygodniu',
    price: '42 zł',
    old: null,
    note: 'pn–pt 12:00–15:00: dowolna pizza z czerwonych i lemoniada',
  },
  {
    title: 'Odbiór osobisty',
    price: '−15%',
    old: null,
    note: 'na zamówienie telefoniczne, gdy odbierasz sam przy piecu',
  },
];

export const delivery = {
  zone: 'Śródmieście, Polesie, Widzew i Górna, do 5 km od pieca',
  minimum: 45,
  fee: 9,
  freeFrom: 120,
  time: '35–50 min',
  payments: 'gotówka, karta lub BLIK u kierowcy',
};

export const platforms = [
  { name: 'Pyszne.pl', href: 'https://www.pyszne.pl/' },
  { name: 'Wolt', href: 'https://wolt.com/pl/pol/lodz' },
  { name: 'Glovo', href: 'https://glovoapp.com/pl/pl/lodz/' },
];

export const reviews = [
  {
    author: 'Marta K.',
    food: 5,
    service: 5,
    date: '2026-10-18',
    text: 'Brzegi z czarnymi plamkami, środek miękki, tak jak w Neapolu. Stracciatella dodawana na końcu robi robotę.',
  },
  {
    author: 'Paweł W.',
    food: 5,
    service: 4,
    date: '2026-10-02',
    text: 'W piątek wieczorem trzeba poczekać na stolik, ale rezerwacja przez stronę zadziałała bez telefonu. Diavola naprawdę ostra.',
  },
  {
    author: 'Ola i Tomek',
    food: 4,
    service: 5,
    date: '2026-09-21',
    text: 'Fajnie, że karta jest krótka. Wzięliśmy wtorkową Margheritę za 25 zł i tiramisu. Obsługa podpowiedziała łódzkie piwo do pizzy.',
  },
];

export const rating = { average: '4,8', count: 312 };

export const photoCredits = [
  { what: 'Pizza w piecu', author: 'Fabrizio Pullara' },
  { what: 'Kula ciasta', author: 'Arturrro' },
  { what: 'Rozciąganie ciasta', author: 'Aldward Castillo' },
  { what: 'Pizza na łopacie', author: 'Mauro Lima' },
  { what: 'Margherita', author: 'Gianluca Gerardi' },
  { what: 'Bufalina', author: 'amirali mirhashemian' },
  { what: 'Stracciatella', author: 'Louis Hansel' },
  { what: 'Funghi e spinaci', author: 'Pinar Kucuk' },
  { what: 'Mur z cegły', author: 'Jon McCallon' },
];
