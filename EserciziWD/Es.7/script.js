let bottone = document.getElementById("bottone");
let testo = document.getElementById("testo");
const array = [10, 34, 23, 89];

function somma(){
    let somma = 0;

    for(let i = 0; i < array.length; i++){
       somma += array[i];
    }

    testo.textContent = somma
}


bottone.addEventListener("click", somma);
