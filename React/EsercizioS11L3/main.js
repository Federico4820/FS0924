//1) Quali sono i tipi primitivi principali in TypeScript?
//string, number, boolean
//2) Crea tre variabili tipizzate: una stringa con il tuo nome,
//un numero con la tua età, e un booleano che indica se stai studiando TypeScript.
var MyName = "Federico";
var age = 2;
var bool = true;
//3) Tipizza il parametro della seguente funzione:
var greet = function (name) {
    return "Ciao " + name;
};
//4) Specifica il tipo di ritorno della seguente funzione:
var sum = function (a, b) {
    return a + b;
};
//5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%).
//Usa i tipi appropriati.
var Iva = function (x) {
    var IVA = (x / 100) * 22;
    var tot = x + IVA;
    return tot;
};
console.log(Iva(50));
//6) Crea una funzione che concateni due stringhe e restituisca la lunghezza totale.
var concat = function (str1, str2) {
    return (str1 + str2).length;
};
console.log(concat("Porco", "spino"));
//7) Cos'è un Type Union e come si scrive?
//è un sistema utilizzato per restituire variabili che possono essere di 2 o più tipi
var union = "qualunue cosa";
//8) Crea una variabile che possa contenere un numero, null o undefined.
var pippo = 3;
var giorno = "domenica";
//10) Tipizza il seguente array di numeri nei due modi possibili:
var numbers = [1, 2, 3];
var numbers2 = [1, 2, 3];
//11) Crea una tupla per definire un array di 5 elementi,
//i primi 3 devono essere stringhe e gli ultimi due numeri.
var tuple = [1, "due", false];
var Students = [
    {
        nome: "Mio",
        voto: 2,
    },
    {
        nome: "Mao",
        voto: "otto",
    },
    {
        nome: "Pina",
        voto: 10,
    },
];
//17) Crea un oggetto che implementi l'interfaccia Auto.
var R7 = {
    tipo: "macchina",
    marchio: "Audi",
    cv: 600,
    motore: "V8",
    porte: 4,
    ruote: 4,
};
