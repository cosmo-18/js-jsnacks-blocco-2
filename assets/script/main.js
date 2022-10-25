// *Snack1*

// Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo ( del numero inserito dall'utente: esempio se il numero dell'utente è 2, il numero successivo è 3  ).


number = prompt("inserisci un numero intero")*1;
/*Verifico se number è pari o dispari*/
if (number%2==0)
 {
  alert("Il numero è Pari");
  document.getElementById('n-pari').innerHTML = number;
 }

else
 {
  alert("Il numero è Dispari");
  document.getElementById('numero').innerHTML = number +1;
 }

//  *Snack2*

// Generatore di “nomi cognomi” casuali del grande gatsby:
// Abbiamo una lista di nomi e una lista di cognomi, e da queste vogliamo generare una "falsa" lista di invitati, dove ogni invitato nella lista, è l'unione di un "nome" e un "cognome" delle liste precedentemente dette, scelti in modo casuale.


let nomi = ["Andrea", "Marco", "Simone", "Sara"];
let nnomi = nomi.length;

let cognomi = ["Vitti", "Maggi", "Sara", "Picci"];
let ncognomi = cognomi.length;


console.log (nomi[Math.round(Math.random() * (nnomi - 1))] + ' ' + cognomi[Math.round(Math.random() * (ncognomi -1 ))])

// *Snack3*

// Crea un array di numeri interi e fai la somma di tutti gli elementi  che sono in posizione (indice) dispari

let numbers = [1 , 2 , 3, 4, 5, 6, 7, 8];
let sum = 0;

for(let i = 1; i < numbers.length; i= i+2){
    sum + numbers[i];
}

console.log("la somma totale è: ", sum);



