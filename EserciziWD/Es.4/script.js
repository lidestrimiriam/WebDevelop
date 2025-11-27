let numero = document.getElementById("numero");
let bottone = document.getElementById("bottone");
let testo = document.getElementById("testo");

function calcola(){
    if(numero >= 6){
        testo.textContent = "Promosso!"
    }else{
        testo.textContent = "Bocciato 😢"
    }
}

bottone.addEventListener("click", calcola);