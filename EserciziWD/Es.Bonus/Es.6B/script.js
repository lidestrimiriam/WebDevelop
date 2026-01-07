let numero = document.getElementById("numero");
let bottone = document.getElementById("bottone");

let numeroSegreto = Math.floor(Math.random()*10)+1;
let tentativi = 0;
console.log(numeroSegreto);

bottone.addEventListener("click", () => {

  if(numeroSegreto == numero.value){
    testo.textContent = "INDOVINATO!" + " Tentativi effettuati: "+ tentativi;
  }

  if(numeroSegreto > numero.value){
    testo.textContent = "Numero troppo basso";
    tentativi++;
  }

  if(numeroSegreto < numero.value){
    testo.textContent = "Numero troppo alto";
    tentativi++;
  }

  if(tentativi >= 3){
    testo.textContent = "Hai perso";
    bottone.disabled = true;
  }
})