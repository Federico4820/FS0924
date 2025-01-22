var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var myName = "Federico";
var myNumber = 3;
var isLoading = true;
console.log(isLoading);
var sum = function (n1, n2) {
    return n1 + n2;
};
console.log(sum(2, 3));
//type union
var stringOrNumber = "Federico";
var stringOrNumber2 = "33";
var stringOrNumber3 = "Ciao";
var greetings = function (greet, name) {
    return "Greetings " + greet + ", " + (name || "User") + "!";
};
console.log(greetings("Ciao"));
var makeANumber = function (val) {
    if (val === "ciao") {
        return 0;
    }
    else {
        return parseInt(val);
    }
};
var arrow = function () {
    return 0;
};
var arrayOfNames = ["a", "b", "c"];
var arrayOfNumbers = [5, 6, 3];
var arrayOfString = __spreadArray(__spreadArray([], arrayOfNames, true), ["apa"], false);
var otherNum = [0, 0.5];
var ArrMixed = [10, "gina"];
arrayOfNames.forEach(function (name) {
    var fiorstChar = name.slice(0, 1);
    console.log(fiorstChar);
});
arrayOfNumbers.forEach(function (n) {
    console.log(n.toFixed(2));
});
var tuple = [1, "", "", 3]; //poi puoi aggiungere ciò che vuoi
var staffMember = {
    Fname: "Federico",
    Lname: "Lepore",
    age: 21,
    area: "FVG",
    modules: ["U1", "U2", "U3"],
};
console.log(staffMember.modules[0].slice(1));
var pet1 = {
    species: "Doggo",
    breed: "volpino",
    age: 3,
    skills: ["brakbrak", "playing", "sleeping"],
};
var pet2 = {
    species: "cat",
    breed: "European",
    age: 4,
    skills: ["judje"],
    numberOfPaws: 4,
};
var pet3 = {
    species: "snake",
    breed: "python",
    age: 2,
    skills: ["crawls"],
};
var mario = {
    name: "Mario",
    age: 20,
    height: 1.7,
    eyecolor: "green",
    hairColor: "brown",
};
var Luigi = {
    name: "Mario",
    age: 20,
    height: 1.7,
    eyecolor: "green",
    hairColor: "brown",
    favoriteHand: "left",
    favoriteCount: "grass",
    championshipWon: 3,
};
var Bawser = {
    name: "Mario",
    age: 20,
    height: 1.7,
    eyecolor: "green",
    hairColor: "brown",
    favoriteHand: "left",
    favoriteCount: "grass",
    championshipWon: 3,
};
var yoshy = {
    name: "Mario",
    age: 20,
    height: 1.7,
    eyecolor: "green",
    hairColor: "brown",
    favoriteHand: "right",
    favoriteCount: "grass",
    championshipWon: 3,
};
var tennisPlayers = [];
tennisPlayers.push(Luigi, Bawser, yoshy);
console.log("TENNISPLAYERS", tennisPlayers);
tennisPlayers.forEach(function (player) {
    console.log(player.favoriteHand.length.toPrecision(2));
});
var italianAddress = {
    street: "via roma",
    cv: 33,
    city: "Paperino",
    zipCode: "59100",
    area: "Italy",
};
var americanAddress = {
    street: "E Hills Dr",
    cv: 2711,
    city: "Moore",
    zipCode: "73160",
    area: {
        state: "oklahoma",
        country: "USA",
    },
};
