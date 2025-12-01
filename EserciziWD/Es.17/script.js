let rosso = document.getElementById("Rosso");
let giallo = document.getElementById("Giallo");
let verde = document.getElementById("Verde");
let bottone = document.getElementById("bottone");

let timer = null;
let stato = "Spento";
function ciclo(){

    timer = setInterval(() => {
      if(stato === "Spento"){
        stato = "Rosso";
        rosso.textContent = "Rosso";
        giallo.textContent = "";
        verde.textContent = "";
      } else if(stato === "Rosso"){
        stato = "Giallo";
        rosso.textContent = "";
        giallo.textContent = "Giallo";
        verde.textContent = "";
      } else if(stato === "Giallo"){
        stato = "Verde";
        rosso.textContent = "";
        giallo.textContent = "";
        verde.textContent = "Verde";
      } else if (stato === "Verde") {
        stato = "Rosso";
        rosso.textContent = "Rosso";
        giallo.textContent = "";
        verde.textContent = "";
    }
  },2000)

}

function stop(){
  if (timer !== null) {
    clearInterval(timer);
    timer = null;
    stato = "Spento";
    rosso.textContent = "";
    giallo.textContent = "";
    verde.textContent = "";
  }
}



bottone.addEventListener("click", () => {
  if (timer === null) {
    ciclo();
    bottone.textContent = "Stop";
  } else {
    stop();
    bottone.textContent = "Start";
  }
});