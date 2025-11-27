const array = [1, 4, 8, 5, 23, 60]
let numero = document.getElementById("numero");
let bottone = document.getElementById("bottone");
let testo = document.getElementById("testo");

function trovaElemento(){
let valore = Number(numero.value);
  if(array.includes(valore)){
    testo.textContent = "Il numero " + valore + " è nell'array";
  }else{
    testo.textContent = "Il numero non è presente nell'array"
  }
}

bottone.addEventListener("click", trovaElemento);

