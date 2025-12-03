let testo = document.getElementById("testo");
let bottone = document.getElementById("bottone");
let risultato = document.getElementById("risultato");

let contatore = 0;
bottone.disabled = true;

//function conta(){ if(bottone.disabled){bottone.disabled = false;}}

  testo.addEventListener("keyup", () =>{  //testo = input
    contatore++;
    if(contatore >= 20){
      bottone.disabled = false;
    }
  })

bottone.addEventListener("click", () => {
  risultato.textContent = "Successo";
});