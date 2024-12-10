let nick = document.getElementById("nick");
let btn = document.getElementById("submit");
let hy = document.getElementById("hy");
let del = document.getElementById("del");

btn.addEventListener("click", () => {
  if (nick.value === "") {
    localName = localStorage.getItem("user")
    hy.innerText = `benvento ${localName}`;
    if(localName===null){hy.innerText = ``}
  } else {
    let name = nick.value;
    localStorage.setItem("user", name);
    localName = localStorage.getItem("user");
    hy.innerText = `benvento ${localName}`;
  }
});

del.addEventListener("click", () => {
  localStorage.clear();
});

