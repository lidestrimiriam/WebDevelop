let bottone = document.getElementById("bottone");
let testo = document.getElementById("testo");

let notifica = 1;
bottone.addEventListener("click", () => {

  let div = document.createElement("div");
  div.textContent = "Nuova notifica #" + notifica++;
  testo.append(div);

  let timer = setTimeout(() => {
    div.remove();
    notifica = 1;
    }, 3000);
});