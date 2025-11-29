let bottone = document.getElementById("bottone");
let testo = document.getElementById("testo");
let rosso = document.getElementById("rosso");
let giallo = document.getElementById("giallo");
let verde = document.getElementById("verde");


function cambiaLuce(){
  testo.textContent = "Rosso";

}


bottone.addEventListener("click", cambiaLuce);
