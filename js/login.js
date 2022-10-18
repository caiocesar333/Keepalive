var form = document.querySelector("#form");
var username = document.querySelector("#username");
var password = document.querySelector("#password");

window.addEventListener("load", () => {
  setTimeout(() => {
    if (localStorage.getItem("admin") === "admin") {
      document.location = "../html/home.html";
    }
  }, 2000);
});

form.addEventListener("submit", (e) => {
  var usuario = username.value;
  var senha = password.value;

  if (usuario === "admin" && senha === "admin") {
    localStorage.setItem(usuario, senha);
  } else {
    e.preventDefault();
    console.log("deu ruim");
    var span = document.querySelector("#span");
    span.innerText = "Ops, usuário ou senha inválidos. Tente novamente!";
    span.classList.add("span");
  }
});
