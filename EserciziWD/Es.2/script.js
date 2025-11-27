let bottone = document.getElementById("bottone");
let n1 = document.getElementById("n1");
let n2 = document.getElementById("n2");
let testo = document.getElementById("testo");

function calcola(){
   let somma = Number(n1.value) + Number(n2.value);
   testo.textContent = somma;
   console.log(somma);
}
bottone.addEventListener("click", calcola);