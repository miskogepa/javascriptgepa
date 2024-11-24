//ovo je program u koji korisnik unosi dva broja i program ispisuje koji je broj veci od dva unesena broja
const prompt = require("prompt-sync")(); //koristimo prompt-sync paket za unos podataka sa tastature
let prviBroj = parseInt(prompt("Unesite prvi broj")); //korisnik unosi prvi broj a parseInt pretvara string u broj, moze da se koristi i parseFloat
//razlika izmedju parseInt i parseFloat je u tome sto parseInt uzima samo ceo broj a parseFloat uzima i decimalne brojeve.
//parseInt(3.14) ce vratiti 3, a parseFloat(3.14) ce vratiti 3.14
//ovde se koristi parseInt jer se trazi unos celog broja
//ovde se koristi camelCase notacija za nazive promenljivih
//camelCase notacija je notacija u kojoj se prva rec pise malim slovima a svaka sledeca rec se pise velikim slovom
let drugiBroj = parseInt(prompt("Unesite drugi broj")); //korisnik unosi drugi broj a parseInt pretvara string u broj, moze da se koristi i parseFloat

//funkcija koja ce uporediti dva broja i ispisati koji je veci
//koristimo if-else strukturu za uporedjivanje dva broja

if (prviBroj > drugiBroj) {
    console.log(`Broj ${prviBroj} je veci od broja ${drugiBroj}`);
} else if (prviBroj < drugiBroj) {
    console.log(`Broj ${drugiBroj} je veci od broja ${prviBroj}`);
} else {
    console.log(`Brojevi ${prviBroj} i ${drugiBroj} su jednaki`);
}

//mozemo da koristimo i switch-case strukturu za uporedjivanje dva broja

/*switch (true) { // zasto u zagradi pisemo true? Zato sto zelimo da uporedimo dva broja, a ne stringove ili neke druge vrednosti.Ako zelim da uporedim stringove, onda bih napisao switch (prviBroj) ili switch (drugiBroj)
    case prviBroj > drugiBroj:
        console.log(`Broj ${prviBroj} je veci od broja ${drugiBroj}`);
        break;
    case prviBroj < drugiBroj:
        console.log(`Broj ${drugiBroj} je veci od broja ${prviBroj}`);
        break;
    default:
        console.log(`Brojevi ${prviBroj} i ${drugiBroj} su jednaki`);
        break;
}*/