/*
  La bellezza della casualità

  Scrivi una funzione che prenda in input un numero e restituisca
  un numero casuale compreso tra 0 e l'argomento passato.
  http://www.imparareaprogrammare.it
*/

console.log(casuale(56));

function casuale(numero) {
  var random = Math.round(Math.random() * numero);
  return random;
}
