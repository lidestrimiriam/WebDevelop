let bottone = document.getElementById("bottone");
let testo = document.getElementById("testo");

function salutaStudente(){
    testo.textContent = "ciao studente";
}

bottone.addEventListener("click", salutaStudente);