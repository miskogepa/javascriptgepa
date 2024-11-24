/*ovo je program koji racuna koliko ce korisnik da plati proizvod koji 
kosta 1000 dinara, popust ce zavisiti od toga koliko kupac ima godina.
Ako je kupac mladji od 18 godina, popust je 20%, ako je stariji od 65 godina
popust je 30%, a ako je izmedju 18 i 65 godina, nema popusta.
Ovo cemo sve unositi u terminal.*/

const prompt = require('prompt-sync')(); //ovako se ukljucuje prompt-sync modul.

let cena = 1000; //cena proizvoda
let godine = parseInt(prompt('Unesite koliko godina imate: ')); //unos godina da li je bio potreban parseInt? Da, jer prompt vraca string.
let popust = 0; //popust na pocetku postavljamo na 0

//pisemo switch naredbu
switch (true) {
    case godine < 18:
        popust = 0.2;
        console.log(`Vas popust je ${popust * 100} % i cena proizvoda je ${cena - cena * popust} dinara.`);
        break;
    case godine > 65:
        popust = 0.3;
        console.log(`Vas popust je ${popust * 100} % i cena proizvoda je ${cena - cena * popust} dinara.`);
        break;
    default:
        popust = 0;
        console.log(`Nemate popust, cena proizvoda je ${cena} dinara.`);
}