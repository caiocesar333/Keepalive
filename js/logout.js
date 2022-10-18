
var modal2 = document.querySelector("#modal2");
var modalTitle2 = document.querySelector("#modal-title2");
var modalActions2 = document.querySelector("#modal-actions2");

var continuar2 = document.querySelector("#continuar2");
var sair2 = document.querySelector("#sair2");

var logout = document.querySelector("#logout");


logout.addEventListener("click", () => {
  clearInterval(counts);
  modal2.classList.add("show");
  overlay.classList.add("show");
});

sair2.addEventListener("click", () => {
  document.location.href = "../html/login.html";
  localStorage.clear();
});

continuar2.addEventListener("click", () => {
  document.location = "../html/login.html";
});


