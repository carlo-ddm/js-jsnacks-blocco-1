// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
// chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

console.log('test');
let guest = false;
let yourName = prompt('What\'s your name?');
const list = ['Jay Gatsby','Nick Carraway','Daisy Buchanan','Tom Buchanan', 'Jordan baker', 'Myrly Wilson'];

 for (let i = 0; i < list.length; i++){
  console.log(list[i]);
  if (list[i] === yourName){
    guest = true;
  }
 }

let output;
if (guest === true){
  output = 'Wellcome';
} else {
  output = 'You are not on the guest list';
}
document.getElementById('output').innerHTML = output;

// Ricorda che la variabile va sempre dichiarta al di fuori del ciclo

/**
 ITINERARIO
 1) Creo un array con la lista degli invitati
 2) Chiedo all'utente il suo nome
 3) Creo una condizione da verificare (guest = false) che mi servirà per il ciclo for (cd flag)--> In questo caso imposto di dafault che non si è "guest"
 4) Creo un ciclo for dove scorro tutti i presenti all'interno della lista degli invitati. Se il nome di chi richiede l'accesso è uguale a list[i], cioè al singolo nome presente sulla lista, quest'ultimo avrà accesso, altrimenti no (ricorda che la condizione è false di dafault)
 5) se la condizione sarà verificata si acra un output, altrimenti se ne avrà un altro (no accesso)
 */