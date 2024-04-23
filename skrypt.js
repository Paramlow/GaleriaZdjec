const wszystkieZdjecia = [
  [
    { url: 'zdjecia/czarnykot.png', tytul: 'Czarny kot', opis: 'Zdjęcie przedstawia czarnego kota, ukrywającego się.', zestaw: 'Digital Zwierzęta' },
    { url: 'zdjecia/lamawokularach.jpg', tytul: 'Lama w okularach', opis: 'Zdjęcie przedstawia lamę, która nosi okulary. Wydaje sie cool.', zestaw: 'Digital Zwierzęta'	},
    { url: 'zdjecia/fioletowykot.png', tytul: 'Kot na fioletowym tle', opis: 'Zdjęcie przedstawia kota stworzonego przez AI.', zestaw: 'Digital Zwierzęta' }
  ],
  [
    { url: 'zdjecia/krajobraz1.jpg', tytul: 'Ściernisko', opis: 'Zdjęcie przedstawia pięknie wyglądające pole na wsi.', zestaw: 'Krajobrazy' },
    { url: 'zdjecia/krajobraz2.jpg', tytul: 'Wybrzeże i Góra', opis: 'Zdjęcie przedstawia górę która jest nad morzem.', zestaw: 'Krajobrazy' },
    { url: 'zdjecia/krajobraz3.jpg', tytul: 'Miasto niedaleko mostu', opis: 'Zdjęcie przedstawia miasto położone najprawdopodobniej nad morzem', zestaw: 'Krajobrazy' }
  ],
  [
    {url:'zdjecia/lofi1.jpg', tytul:'Dziewczyna w słuchawkach', opis:'Zdjęcie przedstawia kobietę, która najwidoczniej nad czymś rozmyśla.', zestaw:'Lo-fi'},
    {url:'zdjecia/lofi2.png', tytul:'Kobieta czytająca książkę', opis:'Zdjęcie przedstawia kobietę zafascynowaną książka, którą trzyma w rękach.', zestaw:'Lo-fi'},
    {url:'zdjecia/lofi3.png', tytul:'Mężczyzna trzymający konsolę', opis:'Zdjęcie przedstawia mężczyzne w słuchawkach, który gra w coś na konsoli.', zestaw:'Lo-fi'}
  ],
  [
    {url:'zdjecia/pixel1.png', tytul:'Człowiek przy pięknych widokach', opis:'Zdjęcie przedstawia zakapturzonego mężczyzne, który podziwia widoki.', zestaw:'Pikselowa sztuka'},
    {url:'zdjecia/pixel2.png', tytul:'Sklep i pracujący robot', opis:'Zdjęcie przedstawia sklep, w którym pracuje robot. Świetnie sie spisuje.', zestaw:'Pikselowa sztuka'},
    {url:'zdjecia/pixel3.png', tytul:'Ciastka', opis:'Zdjęcie przedstawia ciastka. Wyglądają przepysznie.', zestaw:'Pikselowa sztuka'}
  ],
  [
    {url:'zdjecia/cyberpunk1.png', tytul:'Kobieta Wojowniczka', opis:'Zdjęcie przedstawia kobietę, trzymającą dwa ostrza.', zestaw:'Cyberpunk'},
    {url:'zdjecia/cyberpunk2.jpg', tytul:'Kobieta w tunelu', opis:'Zdjęcie przedstawia tunel, w którym na środku stoi kobieta.', zestaw:'Cyberpunk'},
    {url:'zdjecia/cyberpunk3.jpg', tytul:'Samuraj', opis:'Zdjęcie przedstawia samuraja, który szykuje sie do atatku.', zestaw:'Cyberpunk'},
  ]
];

let indexZdjecia = 0;
let aktualnaTablica = wszystkieZdjecia[0];

const biezaceZdjecie = document.getElementById('biezace-zdjecie');
const tytulZdjecia = document.getElementById('tytul-zdjecia');
const opisZdjecia = document.getElementById('opis');
const nazwaZestawu = document.getElementById('nazwazestawu');
const selectZestawu = document.getElementById('wybor-zestawu');

function wyswietlBiezaceZdjecie() {
  nazwaZestawu.textContent = aktualnaTablica[indexZdjecia].zestaw;
  biezaceZdjecie.src = aktualnaTablica[indexZdjecia].url;
  biezaceZdjecie.alt = aktualnaTablica[indexZdjecia].tytul;
  tytulZdjecia.textContent = aktualnaTablica[indexZdjecia].tytul;
  opisZdjecia.textContent = aktualnaTablica[indexZdjecia].opis;
}

function poprzedniZestawZdjec() {
  let indexAktualnegoZestawu = wszystkieZdjecia.findIndex(zestaw => zestaw === aktualnaTablica);
  if (indexAktualnegoZestawu === 0) {
    aktualnaTablica = wszystkieZdjecia[wszystkieZdjecia.length - 1];
  } else {
    aktualnaTablica = wszystkieZdjecia[indexAktualnegoZestawu - 1];
  }
  indexZdjecia = 0;
  wyswietlBiezaceZdjecie();
}

function pokazPoprzednieZdjecie() {
  if (indexZdjecia === 0) {
    indexZdjecia = aktualnaTablica.length - 1;
  } else {
    indexZdjecia--;
  }
  wyswietlBiezaceZdjecie();
}

function pokazNastepneZdjecie() {
  if (indexZdjecia === aktualnaTablica.length - 1) {
    indexZdjecia = 0;
  } else {
    indexZdjecia++;
  }
  wyswietlBiezaceZdjecie();
}

function zmienZestawZdjec() {
  let indexAktualnegoZestawu = wszystkieZdjecia.findIndex(zestaw => zestaw === aktualnaTablica);
  if (indexAktualnegoZestawu === wszystkieZdjecia.length - 1) {
    aktualnaTablica = wszystkieZdjecia[0];
  } else {
    aktualnaTablica = wszystkieZdjecia[indexAktualnegoZestawu + 1];
  }
  indexZdjecia = 0;
  wyswietlBiezaceZdjecie();
}

function dodajZestawyDoSelect() {
  wszystkieZdjecia.forEach((zestaw, index) => {
    const option = document.createElement('option');
    option.value = index;
    option.textContent = zestaw[0].zestaw;
    selectZestawu.appendChild(option);
  });
}

function zmienZestawZdjecPoWyborze() {
  const indexWybranegoZestawu = parseInt(selectZestawu.value);
  aktualnaTablica = wszystkieZdjecia[indexWybranegoZestawu];
  indexZdjecia = 0;
  wyswietlBiezaceZdjecie();
}

const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const lightboxDescription = document.getElementById('lightbox-description');
const closeLightboxButton = document.getElementById('close-lightbox');

function openLightbox() {
  lightbox.style.display = 'block';
}

function closeLightbox() {
  lightbox.style.display = 'none';
}

biezaceZdjecie.addEventListener('click', function() {
  openLightbox();
  lightboxImage.src = biezaceZdjecie.src;
  lightboxDescription.textContent = opisZdjecia.textContent;
});

closeLightboxButton.addEventListener('click', function() {
  closeLightbox();
});

document.addEventListener('keydown', logKey);
function logKey(e) {
  if (e.code === "ArrowRight" || e.code === "KeyD") {
    pokazNastepneZdjecie();
  }
  if (e.code === "ArrowLeft" || e.code === "KeyA") {
    pokazPoprzednieZdjecie();
  }
}

document.onselectstart = function(){return false;};

document.getElementById('poprzednie-btn').addEventListener('click', pokazPoprzednieZdjecie);
document.getElementById('nastepne-btn').addEventListener('click', pokazNastepneZdjecie);
document.getElementById('zmien-zestaw-btn').addEventListener('click', zmienZestawZdjec);
document.getElementById('poprzedni-zestaw-btn').addEventListener('click', poprzedniZestawZdjec);
selectZestawu.addEventListener('change', zmienZestawZdjecPoWyborze);

dodajZestawyDoSelect();
wyswietlBiezaceZdjecie();
