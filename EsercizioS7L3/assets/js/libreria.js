const API="https://striveschool-api.herokuapp.com/books";
let container=document.getElementById("container")

async function libreria(){
    const risposta= await fetch(API);
    if(!risposta.ok){
        throw new Error(`Errore durente il fetch: ${risposta.status}`);
    }
    const libri=await risposta.json();
    console.log(libri);
    mostraLibri(libri);
}

function mostraLibri(libri){
    container.innerHTML=libri
        .map(libro =>`
            <div class="card col-2">
                <img src=${libro.img} alt="imamgine" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${libro.title}</h5>
                    <p class="card-text">${libro.category}</p>
                    <p>price: ${libro.price}€</p>
                    <button class=button>Scarta</button>
                </div>
            </div>
        `)
}

libreria()