console.log('test');

// Controllo natura dei dati inseriti
let insertOk = true;

// Chiedo all'utente di inserire il primo numero
const first_number = parseInt(prompt('inserisci il primo numero'));

if (isNaN(first_number)) {
  alert('Inserire un dato numerico');
  insertOk = false;
}

console.log(first_number);

// Chiedo all'utente di inserire il primo numero
const second_number = parseInt(prompt('inserisci il secondo numero'));

if (isNaN(second_number)) {
  alert('Inserire un dato numerico');
  insertOk = false;
}

console.log(second_number);



// Ipotesi
let message;
const result = document.getElementById ('result');

if (insertOk === true){
  if (first_number > second_number){
    result.innerHTML = `${first_number} > ${second_number} --> il numero con valore più alto è: ${first_number}`;
  } else if (first_number < second_number){
    result.innerHTML = `${second_number} > ${first_number} --> il numero con valore più alto è: ${second_number}`;
  } else {
    result.innerHTML = `${first_number} = ${second_number} --> hai scelto due numeri con lo stesso valore`;
  }
} else {
  message = 'Non hai inserito correttamente i dati richiesti';
  document.getElementById('result').innerHTML = message;
}



