let numero = document.getElementById("numero");
let bottone = document.getElementById("bottone");
let testo = document.getElementById("testo");
let numeroGenerato;
let tentativi = [];

function generaNumero(){
  numeroGenerato = Math.floor(Math.random() * 20) + 1;
}
generaNumero();

function controlla(){
  tentativi.push(Number(numero.value));
  if(numeroGenerato === Number(numero.value)){
    testo.textContent = "INDOVINATO! Tentativi " + tentativi.length;
  } else if(numeroGenerato < Number(numero.value)){
    testo.textContent = "Troppo Alto";
  } else if(numeroGenerato > Number(numero.value)){
    testo.textContent = "Troppo basso";
  }

}

bottone.addEventListener("click", controlla);