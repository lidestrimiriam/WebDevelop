let bottone = document.getElementById("bottone");
let testo = document.getElementById("testo");
let rosso = document.getElementById("rosso");
let giallo = document.getElementById("giallo");
let verde = document.getElementById("verde");

let stato = "Spento";
function cambiaLuce(){
  if(stato === "Spento"){
    stato = "Rosso";
    testo.textContent = "Rosso";

  } else if(stato === "Rosso"){
    stato = "Giallo->";
    testo.textContent = "Giallo->";

  } else if(stato === "Giallo->"){
    stato = "Verde";
    testo.textContent = "Verde";

  } else if(stato === "Verde"){
    stato = "Giallo<-";
    testo.textContent = "Giallo<-";

  }else if(stato === "Giallo<-"){
    stato = "Rosso";
    testo.textContent = "Rosso";
  }
}


bottone.addEventListener("click", cambiaLuce);


