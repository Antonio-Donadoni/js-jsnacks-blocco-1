///////////////////////////// JSNACK1

// L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.
//
// var primoNumero = prompt ("Inserisci primo numero");
// var secondoNumero = prompt ("Inserisci secondo numero");
// var numeroMaggiore
//
// if (primoNumero > secondoNumero) {
//   numeroMaggiore = primoNumero;
//   document.getElementById('numero-maggiore').innerHTML = numeroMaggiore;
//   console.log(numeroMaggiore);
//
//     }
// else if (secondoNumero > primoNumero) {
//   numeroMaggiore = secondoNumero
//   document.getElementById('numero-maggiore').innerHTML = numeroMaggiore;
//   console.log(numeroMaggiore);
// } else {
//   document.getElementById('numero-maggiore').innerHTML = "i numeri sono uguali";
//   console.log("i numeri sono uguali");
//  }


///////////////////////////// JSNACK2
  // L’utente inserisce nome e cognome nei relativi input,
  // al click su un bottone, concatenare i valori degli input e stampare in console.

// var inviaBtn = document.getElementById('btn-invia');
//
// inviaBtn.addEventListener('click', function () {
//   var nome = document.getElementById('nome').value;
//   var cognome = document.getElementById('cognome').value;
//   console.log(nome + " " + cognome);
// });

//////////////////////////////////// JSNACK3
// Al click su un bottone, il programma acquisisce tramite prompt un numero.
// Se il numero è positivo, il background di un p#colore diventa verde, se negativo rosso e se zero blu.

// var cambiacoloreBtn = document.getElementById('btn-cambia-colore');
//
// cambiacoloreBtn.addEventListener('click', function () {
//   var numero = prompt("Inserire un numero");
//   numero = parseInt(numero);
//   if (numero > 0) {
//    document.getElementById('testo').className = "verde";
//   }
//   else if (numero < 0) {
//     document.getElementById('testo').className = "rosso";
//   }
//   else if (numero == 0){
//    document.getElementById('testo').className = "blu";
//   }
// })


// JSNACK4
// Al click su un bottone, il programma genera un numero casuale tra 1 e 10.
// Se il numero è pari, toglie la classe pari da p#numero.pari.dispari altrimenti toglie la classe dispari.
//

// var generaNumeroBtn = document.getElementById('btn-genera-numero');
// generaNumeroBtn.addEventListener('click', function () {
//
//   var numero = Math.floor(Math.random()*10) + 1;
//   console.log(numero);
//   var elem = document.getElementById('mynumber');
//   elem.classList.add ("pari" , "dispari")
//
//   if ((numero%2) == 0) {
//    elem.classList.remove("pari");
//   }
//   else {
//     elem.classList.remove("dispari");
//   }
//   console.log(elem)
// });




///////////////////////////////// JSNACK 5

// Nella pagina ci sono due input(num1, num2) e una select con options(somma,sottrai,moltiplica,dividi).
// Al click su un bottone, il programma inserisce in un p#result il risultato dell'operazione scelta.

// var btnCalcola = document.getElementById('btn-calcola');
//
//
// btnCalcola.addEventListener('click', function () {
//
//   var primoNumero = document.getElementById('primo-numero').value;
//   primoNumero = parseInt(primoNumero);
//   var secondoNumero = document.getElementById('secondo-numero').value;
//   secondoNumero = parseInt(secondoNumero);
//   var operatore = document.getElementById('operatore').value;
//
//
//   if (operatore == "addizione") {
//    document.getElementById('numero').innerHTML = primoNumero + secondoNumero;
//   }
//   else if (operatore == "sottrazione") {
//     document.getElementById('numero').innerHTML = primoNumero - secondoNumero;
//   }
//   else if (operatore == "moltiplicazione"){
//    document.getElementById('numero').innerHTML = primoNumero * secondoNumero;
//   }
//   else if (operatore == "divisione"){
//    document.getElementById('numero').innerHTML = primoNumero / secondoNumero;
//   }
// })




///////////////////////////// JSNACK BONUS
// Nella pagina c'è un bottone#lanciaMoneta.
// Al click su un bottone, il programma genera un numero casuale (tra 0 e 9).
// Se il numero è pari mostra un img con la testa della moneta.
// Se è dispari mostra un'altra img con la croce della moneta.


var btnLanciaMoneta = document.getElementById('lancia-moneta');

btnLanciaMoneta.addEventListener("click", function () {

  document.getElementById('testa').classList.add("hidden");
  document.getElementById('croce').classList.add("hidden");

  var numeroRandom = Math.floor(Math.random()*10);
  if ((numeroRandom%2) == 0) {
    document.getElementById('testa').classList.remove("hidden");
  }
  else {
    document.getElementById('croce').classList.remove("hidden");
  }

})
