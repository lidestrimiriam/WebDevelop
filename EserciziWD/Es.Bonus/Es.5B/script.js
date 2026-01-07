let bottone = document.getElementById("bottone");
const array = [3, 6, 1, 8, 4];


bottone.addEventListener("click", () => {
  let somma = 0;
  for(let i = 0; i < array.length; i++){
    if(array[i] % 2 === 0){
      somma += array[i];
    }
  }

  testo.textContent = "La somma di numeri pari è: " + somma;
})