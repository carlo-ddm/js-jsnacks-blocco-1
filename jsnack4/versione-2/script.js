// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
// chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
const listaInvitati = ['Jay Gatsby', 'Nick Carraway', 'Daisy Buchanan', 'Tom Buchanan', 'Jordan baker', 'Myrly Wilson'];

let yourName = prompt('What\'s your name?');

const indice = listaInvitati.indexOf(yourName);
console.log(indice);
if (indice === -1) {
  output = 'You are not on the guest list';
} else {
  output = 'Welcome to the party. Enjoy!';
}

document.getElementById('output').innerHTML = output;
// FUNZIONE indexOF (degli array): ti dice qual'è la posizione all'interno dell'array del valore che stai passando alla funzione.
//  se il valore che passi alla funzione non è presente nell'array rrestituisce -1