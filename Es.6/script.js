const array = ["pesca", "ciliege", "maracuja"];
let bottone = document.getElementById("bottone");
let testo = document.getElementById("testo");
let numero = document.getElementById("numero");


function elementi(){
    console.log(array[Number(numero.value)])
}

bottone.addEventListener("click", elementi);
