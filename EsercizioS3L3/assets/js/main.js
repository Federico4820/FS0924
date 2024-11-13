const form=document.getElementById("form")
const list=document.getElementById("list")
const bntSub=document.getElementById("btnSub")
const testo=document.getElementById("testo")
const promemoria=[]

bntSub.addEventListener("click", function(e){
    let conferma= confirm("peoseguire?");
    if(!conferma)return;
    e.preventDefault();
    if(!controllo())return;
    riempiPromemoria();
    riempiLista();
    form.reset();
})

function controllo() {
    if (testo.value===""){
        alert("Inserire un testo");
        return false;
    }else{
        return true;
    }
}

function riempiPromemoria(){
    promemoria.push(testo.value);
}

function riempiLista() {
    list.innerHTML=""
    for (let i=0; i<promemoria.length;i++){
        let elemento=document.createElement("li");
        elemento.innerText=promemoria[i];
        elemento.addEventListener("click", function(){
            elemento.classList.toggle("sbarra")
        })
        let btnDel=document.createElement("button")
        btnDel.setAttribute("type", "button")
        btnDel.setAttribute("onclick",`deletItem(${i})`)
        btnDel.classList.add("btnDestra")
        btnDel.style.backgroundColor="red"
        const icon= document.createElement("i")
        icon.classList.add("fa-solid", "fa-bomb", "fa-shake")
        btnDel.appendChild(icon)
        elemento.appendChild(btnDel)
        list.appendChild(elemento);
    }
}

function deletItem(x){
    promemoria.splice(x,1);
    riempiLista()
}