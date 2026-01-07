let bottone = document.getElementById("bottone");
let testo = document.getElementById("testo");
let risultato = document.getElementById("risultato");


function contaVocali(){
  let char = testo.value;
  let vocali = 0;
  for(let i = 0; i < char.length; i++){
    if(char[i] == "a" || char[i] == "e" || char[i] == "i" || char[i] == "o" || char[i] == "u"){
      vocali++;
    }
  }
  risultato.textContent = "Le vocali sono " + vocali;
}


bottone.addEventListener("click", contaVocali);
