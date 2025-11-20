let bottone = document.getElementById("bottone");
let lista = document.getElementById("lista");
let spese = [];    // qui salviamo tutte le spese

function calcola(){
  let nome = document.getElementById("nome");
  let importo = document.getElementById("importo");

   if (nome === "" || importo === "") {
        alert("Inserisci sia il nome che l'importo");
        return;
    }

  spese.push({ nome, importo });

}

bottone.addEventListener("click", calcola);