let parola = document.getElementById("parola");
let bottone = document.getElementById("bottone");
let testo = document.getElementById("testo");

bottone.addEventListener("click", () => {
  let contatore = 0;
  for(let i = 0; i < parola.value.length; i++){
    contatore++;
  }
  testo.textContent = "La parola ha " + contatore + " lettere";
});
