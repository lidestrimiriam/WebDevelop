let codicePC = document.getElementById("codicePC");
let utente = document.getElementById("utente");
let Boccupa = document.getElementById("Boccupa");
let Blibera = document.getElementById("Blibera");
let Belimina = document.getElementById("Belimina");
let area = document.getElementById("area");
let messaggio = document.getElementById("messaggio");

let computers = [
    {
      codicePC: "A01",
      utente: "",
      stato: "libero"
    },
    {
      codicePC: "A02",
      utente: "",
      stato: "occupato"
    },
    {
      codicePC: "A03",
      utente: "",
      stato: "libero"
    }
  ];

function visualizzaAula(){
  area.textContent = "";
  for(let computer of computers){
    let div = document.createElement("div");
    div.textContent = computer.codicePC +" "+ computer.utente +" "+ computer.stato;
    area.append(div);
  }
}

visualizzaAula();

function occupaPC(){
  for(let computer of computers){
    if(codicePC.value === computer.codicePC){
      computer.stato = "occupato";
      computer.utente = utente.value;
      }
  }
  visualizzaAula();
}

function liberaPC(){
  for(let computer of computers){
    if(codicePC.value === computer.codicePC){
      computer.stato = "libero";
      computer.utente = "";
      }
  }
  visualizzaAula();
}

function cancellaPC(){
  let array = [];
  for(let computer of computers){
    if(codicePC.value !== computer.codicePC){
      array.push(computer);
    }
  }
  computers = array;
  visualizzaAula()
}




codicePC.addEventListener("input", () => {
  let codice = codicePC.value;
  if(codice.length === 3){
    messaggio.textContent = "";
  }else{
    messaggio.textContent = "Il codice non va bene";
  }
})

Blibera.addEventListener("click", liberaPC);
Boccupa.addEventListener("click", occupaPC);
Belimina.addEventListener("click", cancellaPC);
