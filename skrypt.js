const zdjeciaTablica1 = [
  { url: 'zdjecia/czarnykot.png', tytul: 'Czarny kot', opis: 'Zdjęcie przedstawia czarnego kota, ukrywającego się.', zestaw: 'Digital Zwierzęta' },
  { url: 'zdjecia/lamawokularach.jpg', tytul: 'Lama w okularach', opis: 'Zdjęcie przedstawia lamę, która nosi okulary. Wydaje sie cool.', zestaw: 'Digital Zwierzęta'	},
  { url: 'zdjecia/fioletowykot.png', tytul: 'Kot na fioletowym tle', opis: 'Zdjęcie przedstawia kota stworzonego przez AI.', zestaw: 'Digital Zwierzęta' }
];

const zdjeciaTablica2 = [
  { url: 'obrazek4.jpg', tytul: 'Zdjęcie 4', opis: 'To jest czwarte zdjęcie.', zestaw: 'brak nazwy' },
  { url: 'obrazek5.jpg', tytul: 'Zdjęcie 5', opis: 'To jest piąte zdjęcie.', zestaw: 'brak nazwy' },
  { url: 'obrazek6.jpg', tytul: 'Zdjęcie 6', opis: 'To jest szóste zdjęcie.', zestaw: 'brak nazwy' }
];

let indexZdjecia = 0;
let aktualnaTablica = zdjeciaTablica1;

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
  if (aktualnaTablica === zdjeciaTablica1) {
    aktualnaTablica = zdjeciaTablica2;
  } else {
    aktualnaTablica = zdjeciaTablica1;
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
  if (aktualnaTablica === zdjeciaTablica1) {
    aktualnaTablica = zdjeciaTablica2;
  } else {
    aktualnaTablica = zdjeciaTablica1;
  }
  indexZdjecia = 0;
  wyswietlBiezaceZdjecie();
}

function dodajZestawyDoSelect() {
  const zestawy = [zdjeciaTablica1, zdjeciaTablica2];
  zestawy.forEach((zestaw, index) => {
    const option = document.createElement('option');
    option.value = index;
    option.textContent = zestaw[0].zestaw;
    selectZestawu.appendChild(option);
  });
}

function zmienZestawZdjecPoWyborze() {
  const indexWybranegoZestawu = parseInt(selectZestawu.value);
  aktualnaTablica = indexWybranegoZestawu === 0 ? zdjeciaTablica1 : zdjeciaTablica2;
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
      if (`${e.code}` == "ArrowRight" ||`${e.code}` ==  "KeyD") {pokazNastepneZdjecie()}
      if (`${e.code}` == "ArrowLeft" ||`${e.code}` == "KeyA") {pokazPoprzednieZdjecie()}
	}

document.getElementById('poprzednie-btn').addEventListener('click', pokazPoprzednieZdjecie);
document.getElementById('nastepne-btn').addEventListener('click', pokazNastepneZdjecie);
document.getElementById('zmien-zestaw-btn').addEventListener('click', zmienZestawZdjec);
document.getElementById('poprzedni-zestaw-btn').addEventListener('click', poprzedniZestawZdjec);
selectZestawu.addEventListener('change', zmienZestawZdjecPoWyborze);


dodajZestawyDoSelect();
wyswietlBiezaceZdjecie();
