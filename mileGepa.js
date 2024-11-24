//Napiši funkciju koja prima dva broja kao argumente i vraća njihov zbir.
//treba mi korisnikov unos za dva broja u terminalu 
//da bi korisnik mogao da unese brojeve potrebno je koristiti prompt-sync, potrbno 
//je instalirati prompt-sync npm install prompt-sync u terminalu.
//nakon instalacije prompt-sync-a potrebno je require-ovati prompt-sync u kodu to se radi tako sto
//se pravi promenljiva prompt i dodeljuje joj require('prompt-sync')();
//promenjiva prompt je ustvari funkcija prompt koja se koristi za unos podataka


//primer koda za korisnikov unos
const prompt = require('prompt-sync')();



//funkcija pomocu koje ce korisnik uneti brojeve
function unosBrojeva() {
    let a = prompt('Unesite prvi broj: ');
    let b = prompt('Unesite drugi broj: ');
    return [a, b];
}

// Poziv funkcije unosBrojeva i sabiranje brojeva
const [a, b] = unosBrojeva();
const brojA = parseFloat(a);
const brojB = parseFloat(b);
let zbir = (a, b) => a + b;
console.log( brojA, "+", brojB ,"=", zbir(brojA, brojB));

//| NOTE: sabiranje brojeva u terminalu | File: primeri javascript | ID: 1731966534 |


