let nick=document.getElementById("nick")
let btn=document.getElementById("submit")
let hy=document.getElementById("hy")
let del=document.getElementById("del")

btn.addEventListener("click", ()=>{
    if(nick.value===""){
    }else{let name=nick.value
    localStorage.setItem("user",name)
    localName=localStorage.getItem("user")
    hy.innerText=localName}
})

del.addEventListener("click", ()=>{
    localStorage.clear()
})