const lista = ["miriam", "diego", "silvanokcs", "amo il sushi", "findus"]
let bottone = document.getElementById("bottone");
let testo = document.getElementById("testo");

function lunghezzaNome(){
let risultato = "";

for(let nome of lista){
  if(nome.length > risultato.length){
    risultato - nome;
  }
}

testo.textContent = "il nome più lungo è "+ risultato
}

bottone.addEventListener("click", lunghezzaNome);