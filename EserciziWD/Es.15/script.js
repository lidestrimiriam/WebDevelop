let numero1 = document.getElementById("numero1");
let numero2 = document.getElementById("numero2");
let testo = document.getElementById("testo");
let bottone = document.getElementById("bottone");

function stampaNumeri(){

  let n1 = Number(numero1.value);
  let n2 = Number(numero2.value);

  let timer = setInterval(() => { testo.textContent = n1;   //setInterval() è una funzione che ripete un’azione più volte, a intervalli regolari fino a quando non viene fermata.
    if (n1 === n2) {
      clearInterval(timer); //per fermare il timer creato da setInterval().
    }
    n1++;
  }, 1000); // 1 secondo
}

bottone.addEventListener("click", stampaNumeri);
