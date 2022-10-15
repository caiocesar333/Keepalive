function relogio(){
    var data=new Date();

    var hor=data.getHours();
    var min=data.getMinutes();

    if(hor < 10){
        hor="0"+hor;
    }
    if(min < 10){
        min="0"+min;
    }
    
    var hora=hor + ":" + min;

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    var dia = data.toLocaleDateString('pt-br', options);

    setTime(hora, dia);

}

function setTime(hora, dia){
    const timerDiv = document.querySelector("#date-api-div");
    const h1 = document.querySelector("#date-api-time");
    const h2 = document.querySelector("#date-api-day");

    timerDiv.classList.add("date-api-div");

    h1.innerHTML = hora;
    h1.classList.add = "date-api-time";
    timerDiv.appendChild(h1);

    h2.innerHTML = dia;
    h2.classList.add = "date-api-day";
    timerDiv.appendChild(h2);

    setInterval (() => relogio() , 1000);
}

relogio();