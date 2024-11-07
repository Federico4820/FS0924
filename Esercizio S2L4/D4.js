/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let l1 = 3;
let l2 = 8;

function area(x, y) {
  area = x * y;
  return;
}

area(l1, l2);

console.log(area);

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazySum(n1, n2) {
  if (n1 !== n2) {
    crazySum= n1 + n2;
    return;
  } else {
    crazySum= (n1 + n2) * 3;
    return;
  }
}

crazySum(5, 5);

console.log(crazySum);

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazyDiff(x){
    if(x<19){
        crazyDiff=Math.abs(x-19)
        return
    }else{
        crazyDiff=Math.abs((x-19)*3)
    }
}

crazyDiff(22)

console.log(crazyDiff)

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function boundary(n){
    if(20<=n && n<=100){
        boundary=true
    }else if(n===400){
        boundary=true
    }else{
        boundary=false
    }
}

boundary(33)

console.log(boundary)

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function epify(str){
    x=str.slice(0,7)
    if(x==="EPICODE"){
        epify=str
        return
    }else{
        epify="EPICODE "+str
        return
    }
}

epify("il tuo futuro");

console.log(epify);

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function check3and7(x){
    x=Math.abs(x)
    if(x%3===0 || x%7===0){
        check3and7="è un multiplo di 3 o 7"
        return
    }else{
        check3and7="non è un multiplo di 3 o 7"
        return
    }
}
    
check3and7(21)

console.log(check3and7)

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function reverseString(str){
    x=str.split("");
    x=x.reverse();
    reverseString=x.join("");
    return
}

reverseString("It's a beautiful day outside")

console.log(reverseString)

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

upperFirst("questa è una stringa di prova");

function upperFirst(str){
    let parole=str.split(" ");

    for(let i=0; i<parole.length; i++){
        parole[i]=parole[i].charAt(0).toUpperCase()+parole[i].slice(1)
        console.log(parole[i])
    }
    upperFirst=parole.join(" ");
}

console.log(upperFirst)

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
