let parola = document.getElementById("parola");
let bottone = document.getElementById("bottone");
let testo = document.getElementById("testo");
let contatore = 0;

bottone.addEventListener("click", () => {
  for(let i = 0; i < parola.value.length; i++){
    contatore++;
    testo.textContent = "La parola ha " + contatore + " lettere";
  }

})