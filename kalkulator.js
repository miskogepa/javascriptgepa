/*
//app kalkulator koji prima dva broja i operaciju koju treba izvršiti nad njima

// unos u terminalu:
const prompt = require('prompt-sync')();


//Unos brojeva i operacije:
const broj1 = parseFloat(prompt('Unesite prvi broj: ')); //korisnik unosi prvi broj a parseFloat pretvara string u broj
const broj2 = parseFloat(prompt('Unesite drugi broj: ')); //korisnik unosi drugi broj a parseFloat pretvara string u broj
const operacija = prompt('Unesite operaciju: '); //korisnik unosi operaciju

//Koristicemo switch da bismo izvrsili operaciju koju je korisnik uneo
switch (operacija) {
    case '+':
        rezultat = broj1 + broj2;
        console.log(broj1, "+", broj2, "=", rezultat);
        break;
    case '-':
        rezultat = broj1 - broj2;
        console.log(broj1, "-", broj2, "=", rezultat);
        break;
    case '*':
        rezultat = broj1 * broj2;
        console.log(broj1, "*", broj2, "=", rezultat);
        break;
    case '/':
        rezultat = broj1 / broj2;
        console.log(broj1, "/", broj2, "=", rezultat);
        break;
    default:
        console.log('Uneli ste nepostojeću operaciju');
        break;
}*/


const prompt = require("prompt-sync")();

const broj1 = parseFloat(prompt("Unesite broj 1: "));
const broj2 = parseFloat(prompt("Unesite broj 2: "));
const operacija = prompt("Unesite operaciju: ");

switch (operacija) {
    case "+":
        rezultat = broj1 + broj2;
        console.log(broj1, "+", broj2, "=", rezultat);
        break;

    case "-":
        rezultat = broj1 - broj2;
        console.log(broj1, "-", broj2, "=", rezultat);
        break;

    case "*":
        rezultat = broj1 * broj2;
        console.log(broj1, "*", broj2, "=", rezultat);
        break;

    case "/":
        rezultat = broj1 / broj2;
        console.log(broj1, "/", broj2, "=", rezultat);
        break;

    default:
        console.log("Uneli ste pogresnu operaciju!");
        break;


}
