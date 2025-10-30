let bottone = document.getElementById("bottone");
let n1 = document.getElementById("n1");
let testo = document.getElementById("testo");

function calcola(){
   let confronto = Number(n1.value) % 2;
   if(confronto == 0){
      testo.textContent = "pari";
   }else{
      testo.textContent = "dispari";
   }

}
bottone.addEventListener("click", calcola);