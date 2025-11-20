const array = ["pesca", "ciliege", "maracuja"];
let bottone = document.getElementById("bottone");
let testo = document.getElementById("testo");

function elementi(){
    testo.textContent = "L'array contiene " + array.length + " elementi.";
}

bottone.addEventListener("click", elementi);
