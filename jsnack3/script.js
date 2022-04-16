// JSnack 3
// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while (facoltativo)

console.log('test');

let ok = false;

let first_addend;
let second_addend;
let third_addend;
let fourth_addend;
let fifth_addend;

while (!ok){
  first_addend = parseInt(prompt ('Inserisci il primo addendo'));
  console.log('primo addendo: ',first_addend);
  while (isNaN(first_addend)) {
    alert('inserisci un numero');
    first_addend = parseInt(prompt ('Inserisci il primo addendo'));
  }
  second_addend = parseInt(prompt ('inserisci il secondo addendo'));
  console.log('secondo addendo: ',second_addend);
  while (isNaN(second_addend)) {
    alert('inserisci un numero');
    second_addend = parseInt(prompt ('Inserisci il secondo addendo'));
  }
  third_addend = parseInt(prompt ('Inserisci il terzo addendo'));
  console.log('terzo addendo: ',third_addend);
  while (isNaN(third_addend)) {
    alert('inserisci un numero');
    third_addend = parseInt(prompt ('Inserisci il terzo addendo'));
  }
  fourth_addend = parseInt(prompt ('Inserisci il quarto addendo'));
  console.log('quarto addendo: ',fourth_addend);
  while (isNaN(fourth_addend)) {
    alert('inserisci un numero');
    fourth_addend = parseInt(prompt ('Inserisci il quarto addendo'));
  }
  fifth_addend = parseInt(prompt ('Inserisci il quinto addendo'));
  console.log('quinto addendo: ',fifth_addend);
  while (isNaN(fourth_addend)) {
    alert('inserisci un numero');
    fifth_addend = parseInt(prompt ('Inserisci il quinto addendo'));
  }
  if (!isNaN(first_addend) && !isNaN(second_addend) && !isNaN(third_addend) && !isNaN(fourth_addend) && !isNaN(fifth_addend)){
    ok  = true;
  }
}

const numbers = [first_addend, second_addend, third_addend, fourth_addend, fifth_addend]
console.log(numbers);

let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log(sum);

// Logica: la i rappresenta un singolo addendo, andrà incrementando (cioè sommando gli addenti) fino all'ultimo addendo della costante numbers