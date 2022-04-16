// JSnack 8
// Chiedi un numero di 4 cifre all’utente
// e calcola la somma di tutte le cifre che compongono il numero.
// in questo caso possiamo sfruttare a nostro vantaggio il fatto che
// la funzione prompt restituisca una stringa anche se si è digitato un numero e recuperare una cifra alla volta usando il ciclo for per scorrere la stringa numerica

console.log('test');
let number = prompt('Inserisci un numero di almeno quattro cifre');
ok = false;

while (number < 1000 || isNaN(number)){
  alert('ATTENZIONE! Inserimento invalido.');
  number = prompt('Inserisci un numero di almeno quattro cifre');
}
console.log(`Numero inserito: ${number}`);

console.log('Lunghezza della variabile: ',number.length);

let result = 0;

for (i = 0; i < number.length; i++){
  console.log('Singola cifra: ',number[i]);
  result += parseInt(number[i]);
}
console.log('Risultato della somma delle singole cifre: ',result);
document.getElementById('result').innerHTML =`La somma delle cifre del numero da te inserito è: ${result}`;


// if (!(ok)){
//   numberStr = parseInt(number);
//   console.log('Stringa convertita in numero: ',numberStr);
// }

