const counterDiv = document.querySelector("#counter");
const timer = document.querySelector("#timer");

const alert = document.querySelector("#modal");
const overlay = document.querySelector("#overlay");

const continuar = document.querySelector("#continuar");
const sair = document.querySelector("#sair");

let upto = 600;

timer.innerHTML = upto.value;
function updated() {
  var count = document.getElementById("timer");
  count.innerHTML = --upto;
  if (upto === 0) {
    clearInterval(counts);
    alert.classList.add("show");
    overlay.classList.add("show");
  }
  return count;
}

let counts = setInterval(updated, 1000);

continuar.addEventListener("click", () => {
    document.location.reload();
});

sair.addEventListener("click", () => {
    document.location.href = "../html/login.html";
    localStorage.clear();
});