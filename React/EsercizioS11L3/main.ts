//1) Quali sono i tipi primitivi principali in TypeScript?
//string, number, boolean

//2) Crea tre variabili tipizzate: una stringa con il tuo nome,
//un numero con la tua età, e un booleano che indica se stai studiando TypeScript.

var MyName: string = "Federico";
var age: number = 2;
var bool: boolean = true;

//3) Tipizza il parametro della seguente funzione:
const greet = (name: string) => {
  return "Ciao " + name;
};

//4) Specifica il tipo di ritorno della seguente funzione:
const sum = (a: number, b: number): number => {
  return a + b;
};

//5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%).
//Usa i tipi appropriati.
const Iva = (x: number): number => {
  let IVA = (x / 100) * 22;
  let tot = x + IVA;
  return tot;
};

console.log(Iva(50));

//6) Crea una funzione che concateni due stringhe e restituisca la lunghezza totale.
const concat = (str1: string, str2: string): number => {
  return (str1 + str2).length;
};

console.log(concat("Porco", "spino"));

//7) Cos'è un Type Union e come si scrive?
//è un sistema utilizzato per restituire variabili che possono essere di 2 o più tipi
let union: string | number | boolean = "qualunue cosa";

//8) Crea una variabile che possa contenere un numero, null o undefined.
let pippo: number | null | undefined = 3;

//9) Crea un tipo per rappresentare i giorni della settimana
//usando union di stringhe letterali.
type week =
  | "lunedì"
  | "martedì"
  | "mercoledì"
  | "giovedì"
  | "venderdì"
  | "sabato"
  | "domenica";

const giorno: week = "domenica";

//10) Tipizza il seguente array di numeri nei due modi possibili:
const numbers: number[] = [1, 2, 3];
const numbers2: Array<number> = [1, 2, 3];

//11) Crea una tupla per definire un array di 5 elementi,
//i primi 3 devono essere stringhe e gli ultimi due numeri.

const tuple: [number, string, boolean] = [1, "due", false];

//12) Qual è la differenza tra type e interface?
//type indica il tipo di una variabile, interface è un oggetto contenente
// un insieme di elementi chiave-valore ogniuno con una propria type, e consente
//extends per unire due interfacce, una che è l'estensione dell'altra

//13) Definisci un'interfaccia in TypeScript per un oggetto dotato di proprietà
//"firstname", "lastname", e "age".
interface human {
  firstname: string;
  lastname: string;
  age: number;
}

//14) Crea un'interfaccia per un utente con email obbligatoria e telefono opzionale.
interface user {
  name: string;
  password: string | number;
  email: string;
  tell?: number;
}

//15) Crea un array tipizzato di oggetti "Studente" con nome e voto.

type studente = {
  nome: string;
  voto: number | string;
};
let Students: studente[] = [
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

//16) Crea un'interfaccia base "Veicolo" e estendila per creare "Auto".

interface Veicolo {
  tipo: string;
  marchio: string;
  motore: string;
}

interface Auto extends Veicolo {
  porte: number;
  cv: number;
  ruote: number;
}

//17) Crea un oggetto che implementi l'interfaccia Auto.

let R7: Auto = {
  tipo: "macchina",
  marchio: "Audi",
  cv: 600,
  motore: "V8",
  porte: 4,
  ruote: 4,
};

//18) Cosa sono i Generics in TypeScript?
//Un type che viene passato come argomento

//19) È possibile avere più tipi generici in un'interfaccia?
//ofcourse

//20) Crea un'interfaccia generica per una risposta API.

interface ApiReturn {
  state: string;
  respons: string;
  id: number;
}
