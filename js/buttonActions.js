const continuarNavegando = document.querySelector("#continuarNavegando");
const logout = document.querySelector("#logout");

continuarNavegando.addEventListener("click", () => {
  document.location = "https://compass.uol/pt/home/";
});

logout.addEventListener("click", () => {
  document.location.href = "../html/login.html";
  localStorage.clear();
});
