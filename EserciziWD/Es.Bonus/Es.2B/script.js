let bottone = document.getElementById("bottone");
let testo = document.getElementById("testo");
let indice = document.getElementById("indice");
const array = ["rosa", "rosso", "bianco", "nero", "viola", "blu", "giallo", "verde"];

function mostraColore(){

  if(Number(indice.value) < array.length){
    testo.textContent = "Nella posizione " + Number(indice.value) + " c'è " + array[indice.value];
  }else{
    testo.textContent = "Indice non valido";
  }
}



bottone.addEventListener("click", mostraColore);