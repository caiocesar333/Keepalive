import swal from 'sweetalert2/dist/sweetalert2.all.min.js'

const counterDiv = document.querySelector("#counter");
const timer = document.querySelector("#timer");

let upto = 10;

timer.innerHTML = upto.value;
function updated() {
  var count = document.getElementById("timer");
  count.innerHTML = --upto;
  if (upto === 0) {
    clearInterval(counts);
    swal("olá")
  }
  return count;
}


let counts = setInterval(updated,1000);