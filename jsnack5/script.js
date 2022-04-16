/*
 Crea un array vuoto.
 Chiedi per 6 volte all’utente di inserire un numero,
 se è dispari inseriscilo nell’array
*/

console.log('test');

let box = [];
const limit = 6;
let number;
let result;

for (i = 0; i < limit; i ++){
  number = parseInt(prompt('Inserisci un numero'));
  while (isNaN(number)){
    alert('Non hai inserito un numero.')
    number = parseInt(prompt('Inserisci un numero'));
  }
  console.log(number);
  if (number % 2){
    box.push(number);
    console.log(box);
  } else {
    console.log('Non hai selezionato un numero dispari');
  }
}
result = document.getElementById('print').innerHTML = `Ecco i numeri dispari che hai selezionato: ${box}`;


/**
 Sto dicendo: se il modulo restituisce come resto un numero > 0 la condizione sarà quindi verificata (es. 7 / 2 = 3 col resto di 1, quindi 7 sarà pushato nell'array).
 Al contrario: se nego questa condizione dirò che non è vero che quella condizione non è vera (es. 8 / 2  = 4, con 0 di resto). La condizione sarà negativa ma essendo negata sarà positiva, quindi il numero 8 verrà pushato)
 */

//  PROVA__
//  (!(number % 2)){
//   message = 'Non hai selezionato alcun numero dispari';
//   console.log(message);