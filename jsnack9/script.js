// Calcola la somma e la media dei primi 10 numeri.
console.log('test');

 let numbers = [1,2,3,4,5,6,7,8,9,10]
 console.log('Questi sono gli elementi contenuti nell\'array: ', numbers);
 console.log('Questa è la lunghezza dell\'array (il totale degli elementi): ', numbers.length);

 let result = 0;
 let media = 0;
 for (i = 0; i < numbers.length; i++){
  result += numbers[i];
 }

 media = (result / numbers.length);

 console.log('Questo è il risultato della somma dei miei numeri: ', result);
 document.getElementById('result').innerHTML = `Somma: ${result}`;
 console.log('Questo è il risultato della media dei miei numeri: ', media);
 document.getElementById('media').innerHTML = `Media: ${media}`;

 