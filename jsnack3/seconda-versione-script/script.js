// / JSnack 3
// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while (facoltativo)

console.log('test');

let limit = 5;
let addend;
let result = 0;

for (let i = 0; i < limit; i++) {
  addend = prompt('Inserisci addendo');
  while (isNaN(addend)){
    alert('Inserimento non valido');
    addend = prompt ('Inserisci addendo');
  }
  console.log('Addendo: ', addend);
  result += parseInt(addend);
  console.log('Risultato parziale: ', result);
}

console.log('Risultato finale: ', result);