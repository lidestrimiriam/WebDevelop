let limite = document.getElementById("limite");
let bottonePiu = document.getElementById("bottonePiu");
let bottoneMeno = document.getElementById("bottoneMeno");
let testo = document.getElementById("testo");
let risultato = document.getElementById("risultato");

let valore = 0;

function incrementa (){
  valore++;
  risultato.textContent = valore;

  if(valore >= limite.value){
    testo.textContent = "Limite raggiunto!"
    bottonePiu.disabled = true;
  }


}

function decrementa(){
  valore--;
  risultato.textContent = valore;
  if(valore <= 0){
    testo.textContent = "Limite raggiunto!"
    bottoneMeno.disabled = true;
  }
}



bottonePiu.addEventListener("click", incrementa);
bottoneMeno.addEventListener("click", decrementa);