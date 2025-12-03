let bottone = document.getElementById("bottone");
let nome = document.getElementById("nome");
let testo = document.getElementById("testo");


function saluta(){
  testo.textContent = "Benvenuto " + nome.value + "!";
}

bottone.addEventListener("click", saluta);