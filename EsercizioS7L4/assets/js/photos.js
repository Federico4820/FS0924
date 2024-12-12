const url = "https://api.pexels.com/v1/search?query=people";
const apiKey = "dg1zM5Yg46fOobBKuufNYkM4YKDo63M0HuuWKYctCeOFakzuu57VsvAn";
let load = document.getElementById("load");

fetch(url, {
    method: "GET",
    headers: {
        Authorization: "apiKey"
    }
})
.then(foto=>{
    foto.json()
    console.log(foto)
})



