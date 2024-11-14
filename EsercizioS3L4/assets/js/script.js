const divTombola=document.getElementById("divTombola");
const sorteggia=document.getElementById("sorteggia");
const estratti=[]
const visualizzaNumero=document.getElementById("par")

for(i=0;i<90;i++){
    let casellaNumero=document.createElement("div");
    casellaNumero.innerText=i+1;
    divTombola.appendChild(casellaNumero);
}

sorteggia.addEventListener("click", function(){
    do {numero=Math.floor(Math.random()*90)+1;}
    while(estratti.includes(numero));
    estratti.push(numero)
    console.log(estratti)
    const caselle=document.querySelectorAll("#divTombola div")
    for(i=0;i<caselle.length;i++){
        if(caselle[i].innerText==numero){
            visualizzaNumero.innerText=numero
            caselle[i].classList.add("estratto")
        }
    }
    if(estratti.length==90){
        sorteggia.disabled=true
        visualizzaNumero.innerText="FINE GIOCO"
    }
})
