let parola = document.getElementById("parola");
let testo = document.getElementById("testo");

let timer = null;

function tempo() {

 parola.addEventListener("input", () => {
    if (timer === null) {
      timer = setTimeout(() => {
        parola.disabled = true;
        testo.textContent = "Tempo scaduto! ❌";
      }, 3000);
    }
  });

  parola.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      clearTimeout(timer);
      testo.textContent = "Successo! ✔️";
      parola.value = "";
    }
  });

}

tempo();