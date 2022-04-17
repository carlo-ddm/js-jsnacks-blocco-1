// JSnack 2
// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.


console.log('test');
let first_word;
let second_word;
let longerWord;
let shorterWord;
let output;

let insertOk = false;

// io entro nel while se la condizione dentro le () e' = true
// io non entro nel while se la condizione e' = false

while (!insertOk) {
  // console.log(insertOk);
  first_word = prompt('Inserisci la prima parola');
  // while (!isNaN(first_word)) {
  //   alert('Hai sbagliato la prima parola! Inserisci una parola');
  //   first_word = prompt('Inserisci la prima parola');
  // }
  second_word = prompt('Inserisci la seconda parola');
  // while (!isNaN(second_word)) {
  //   alert('Hai sbagliato la seconda parola! Inserisci una parola');
  //   second_word = prompt('Inserisci la seconda parola');
  // }
  if (isNaN(first_word) && isNaN(second_word)) {
    insertOk = true;
  }
}

// Entro nel ciclo while perchè la condizione è vera.
// Chiedo 1, Chideo 2 poi... se parola 1 e parola 2 non sono numeri
//  il flag diventa vero. Quindi ricomincio il ciclo while con insertOk = true perciò negando insertOk che è vero si realizza una condizione falsa ergo esco dal ciclo.

// if(insertOk){ --> adesso insertOk non serve perchè è diventato true quindi la condizione si realizza automaticamente e non c'è bisogno dell"if"
if (first_word.length > second_word.length) {
  longerWord = first_word;
  shorterWord = second_word;
  output =
    `<ul>
      <li><strong>La parola più lunga è: ${longerWord}</strong></li>
      <li>La parola più corta è: ${shorterWord}</li>
    </ul>`;
} else if (second_word.length > first_word.length) {
  longerWord = second_word;
  shorterWord = first_word;
  output =
    `<ul>
      <li><strong>La parola più lunga è: ${longerWord}</strong></li>
      <li>La parola più corta è: ${shorterWord}</li>
    </ul>`;
} else {
  output = 'Le parole hanno la stessa lunghezza';
}
console.log('La parola più lunga è:', longerWord);
// }

const list = document.querySelector('.list').innerHTML = output;



