const ol= document.getElementById("ol")
const invio= document.getElementById("submit")

let utente1={
    Name:"Ciro",
    Surname:"Ciruzzo",
    Age:17
}

let utente2={
    Name:"Cinzia",
    Surname:"Ruotolo",
    Age:23
}

class User{
    constructor(x,y){
        this.name_x = x.Name
        this.surname_x=x.Surname
        this.age_x=x.Age
        this.name_y=y.Name
        this.surname_y=y.Surname
        this.age_y=y.Age
    }
    odler(){
        if(this.age_x>this.age_y){
            return `${this.name_x} is older than ${this.name_y}`
        }else{ return `${this.name_y} is older than ${this.name_x}`}
    }
}


let users=new User(utente1,utente2)

console.log(users)
console.log(users.odler())

let names=[]

invio.addEventListener("click",()=>{
    const namePet= document.getElementById("namePet").value;
    const name= document.getElementById("name").value;
    const species= document.getElementById("species").value;
    const breed= document.getElementById("breed").value;
    console.log(`Pet name: ${namePet}, Owner name: ${name}, species: ${species}, breed: ${breed}`)
    const lista= document.createElement("li")
    lista.textContent=`Pet name: ${namePet}, Owner name: ${name}, species: ${species}, breed: ${breed}`
    ol.appendChild(lista);
    if(names.includes(name)){
        console.log("true");
    }else{console.log("false");
        names.push(name);
    }
})