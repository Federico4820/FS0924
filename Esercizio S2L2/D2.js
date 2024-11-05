/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let n1=3;
let n2=2;
if (n1<n2){
  console.log(n1+" è il più grande")
} else{
  console.log(n2+" è il più grande")
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let n=3;
if (n!==5){console.log("not equal")}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let n3=10;
if (n3%5){}
else{console.log("divisibile per 5")}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let n4=3;
let n5=5;
if(n4===8||n5===8){console.log("un numero è 8")}
else if (n4+n5===8 || n4-n5===8){console.log("la loro somma o sottrazione è otto")}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let totalShoppingCart=34;
if(totalShoppingCart>50){console.log("hai diritto alla spedizione gratuita")}
else{totalShoppingCart+=10;console.log("il costo totale con spedizione inclusa è di:",totalShoppingCart)};

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

totalShoppingCart=34;
if(totalShoppingCart){
  sconto=totalShoppingCart*20/100;
  totalShoppingCart-=sconto;
  if(totalShoppingCart>50){console.log("hai diritto alla spedizione gratuita")}
  else{totalShoppingCart+=10;console.log("il costo totale con spedizione inclusa è di:",totalShoppingCart)};
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let va1=6
let va2=7
let va3=3

if(va1>va2 && va2>va3){
  console.log(va1,va2,va3)
}
else if(va1>va3 && va3>va2){
  console.log(va1,va3,va2)
}
else if(va2>va1 && va1>va3){
  console.log(va2,va1,va3)
}
else if(va3>va1 && va1>va2){
  console.log(va3,va1,va2)
}
else if(va3>va2 && va2>va1){
  console.log(va3,va2,va1)
}
else{
  console.log(va2,va3,va1)
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

scritta="ciao"
console.log(typeof scritta)

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

n6=9
if(n6%2){
  console.log(n6+" è dispari")
}
else{console.log(n6+" è pari")}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  */
  let val = 7
  if (val < 5) {
      console.log("Meno di 5");
    } else if (val < 10) {
      console.log("Meno di 10");
    } else {
      console.log("Uguale a 10 o maggiore");
    }


/* SCRIVI QUI LA TUA RISPOSTA */



/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */

me.city= "toronto"

console.log(me)

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

delete me.lastName
console.log(me)

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

me.skills.pop()
console.log(me)

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const numeri={b:1,c:2,d:3,e:4,f:5,g:6,h:7,i:8,l:9,m:10}
arr=[]
for(let x in numeri){
  arr+=numeri[x]
}
console.log(arr);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

delete arr[9];
arr.pop
console.log(arr)
