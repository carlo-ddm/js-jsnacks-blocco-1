console.log('test');
let first_word;
let second_word;
let longerWord;
let shorterWord;
let output;

let insertOk = false;

while (!insertOk){
  console.log(insertOk);
  first_word = prompt('Inserisci la prima parola');
  while (!isNaN(first_word)) {
    alert('Hai sbagliato la prima parola! Inserisci una parola');
    first_word = prompt('Inserisci la prima parola');
  }
  second_word = prompt('Inserisci la seconda parola');
  while (!isNaN(second_word)) {
    alert('Hai sbagliato la seconda parola! Inserisci una parola');
    second_word = prompt('Inserisci la seconda parola');
  }

  if (isNaN(first_word) && isNaN(second_word)){
    insertOk = true;
  }
}

if(insertOk){
  if (first_word.length > second_word.length){
    longerWord = first_word;
    shorterWord = second_word;
    output =
    `<ul>
      <li><strong>La parola più lunga è: ${longerWord}</strong></li>
      <li>La parola più corta è: ${shorterWord}</li>
    </ul>`;
  } else if (second_word.length > first_word.length){
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
}

const list = document.querySelector ('.list').innerHTML = output;



