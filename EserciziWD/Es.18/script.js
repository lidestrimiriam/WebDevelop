let bottone = document.getElementById("bottone");
let testo = document.getElementById("testo");
let contatore = 0;
let timer = {
  seconds: 5,
  running: false,
  timer: null
};

function tempo(){

  if(!timer.running){
  timer.running = true;

  timer.timer = setTimeout(() => {
    testo.textContent = "Hai premuto "+ contatore + " tasti";
    contatore = 0;
    }, 5000);

  }

}

document.addEventListener("keydown", () => {
      if(timer.running){
      contatore++;
    }
});



bottone.addEventListener("click", tempo);