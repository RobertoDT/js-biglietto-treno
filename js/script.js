//chiedere utente numero km che vuole percorrere
var distanza = parseInt(prompt("Inserisci la distanza in km!"));
//chiedere utente età
var eta = parseInt(prompt("inserisci la tua età"));


//prezzo biglietto è 0.21euro/km
//sconto 20% per minorenni
//sconto 40% over 65
var prezzo = distanza * 0.21;

var scontoMinorenni = (prezzo * 20) / 100;
var prezzoMinorenni = prezzo - scontoMinorenni;

var scontoOver = (prezzo * 40) / 100;
var prezzoOver = prezzo - scontoOver;

if(eta < 18){
  console.log(prezzoMinorenni.toFixed(2));
} else if (eta >= 65){
  console.log(prezzoOver.toFixed(2));
} else{
  console.log(prezzo);
}
