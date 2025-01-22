let myName: string = "Federico";
let myNumber: number = 3;
let isLoading: boolean = true;

console.log(isLoading);

const sum = function (n1: number, n2: number) {
  return n1 + n2;
};

console.log(sum(2, 3));

//type union

let stringOrNumber: string | number | boolean = "Federico";
let stringOrNumber2: string | number = "33";

type MioType = string | number;
let stringOrNumber3: MioType = "Ciao";

const greetings = function (greet: string, name?: string) {
  return "Greetings " + greet + ", " + (name || "User") + "!";
};

console.log(greetings("Ciao"));

const makeANumber = function (val: string): number {
  if (val === "ciao") {
    return 0;
  } else {
    return parseInt(val);
  }
};

const arrow = (): number => {
  return 0;
};

let arrayOfNames = ["a", "b", "c"];
let arrayOfNumbers: number[] = [5, 6, 3];
let arrayOfString: string[] = [...arrayOfNames, "apa"];
let otherNum: Array<number> = [0, 0.5];
let ArrMixed: Array<MioType> = [10, "gina"];

arrayOfNames.forEach((name) => {
  const fiorstChar = name.slice(0, 1);
  console.log(fiorstChar);
});
arrayOfNumbers.forEach((n) => {
  console.log(n.toFixed(2));
});

let tuple: [number, string, string, number] = [1, "", "", 3]; //poi puoi aggiungere ciò che vuoi

let staffMember = {
  Fname: "Federico",
  Lname: "Lepore",
  age: 21,
  area: "FVG",
  modules: ["U1", "U2", "U3"],
};

console.log(staffMember.modules[0].slice(1));

// interfaccia, un tipo di dato specifico
interface Pet {
  species: string;
  breed: string;
  age: number;
  skills: string[];
  numberOfPaws?: number;
}

let pet1 = {
  species: "Doggo",
  breed: "volpino",
  age: 3,
  skills: ["brakbrak", "playing", "sleeping"],
};

let pet2: Pet = {
  species: "cat",
  breed: "European",
  age: 4,
  skills: ["judje"],
  numberOfPaws: 4,
};

let pet3: Pet = {
  species: "snake",
  breed: "python",
  age: 2,
  skills: ["crawls"],
};

//anche le intefacce si possono estendere
interface HumbanBeing {
  name: string;
  age: number;
  height: number;
  eyecolor: String;
  hairColor: string;
}

const mario: HumbanBeing = {
  name: "Mario",
  age: 20,
  height: 1.7,
  eyecolor: "green",
  hairColor: "brown",
};

interface TennisPlayer extends HumbanBeing {
  favoriteHand: string;
  championshipWon: number;
  favoriteCount: string;
}

const Luigi: TennisPlayer = {
  name: "Mario",
  age: 20,
  height: 1.7,
  eyecolor: "green",
  hairColor: "brown",
  favoriteHand: "left",
  favoriteCount: "grass",
  championshipWon: 3,
};
const Bawser: TennisPlayer = {
  name: "Mario",
  age: 20,
  height: 1.7,
  eyecolor: "green",
  hairColor: "brown",
  favoriteHand: "left",
  favoriteCount: "grass",
  championshipWon: 3,
};
const yoshy: TennisPlayer = {
  name: "Mario",
  age: 20,
  height: 1.7,
  eyecolor: "green",
  hairColor: "brown",
  favoriteHand: "right",
  favoriteCount: "grass",
  championshipWon: 3,
};

const tennisPlayers: Array<TennisPlayer> = [];

tennisPlayers.push(Luigi, Bawser, yoshy);
console.log("TENNISPLAYERS", tennisPlayers);

tennisPlayers.forEach((player) => {
  console.log(player.favoriteHand.length.toPrecision(2));
});

//Generic è un tipo passato come argomento per un interfaccia
interface Address<A> {
  street: string;
  cv: number;
  city: string;
  zipCode: string;
  area: A; //sto dicendo che non conosci il tipo di "area", verrà passato all'utilizzo
}

let italianAddress: Address<string> = {
  street: "via roma",
  cv: 33,
  city: "Paperino",
  zipCode: "59100",
  area: "Italy",
};

interface USAAddress {
  state: string;
  country: string;
}

let americanAddress: Address<USAAddress> = {
  street: "E Hills Dr",
  cv: 2711,
  city: "Moore",
  zipCode: "73160",
  area: {
    state: "oklahoma",
    country: "USA",
  },
};
