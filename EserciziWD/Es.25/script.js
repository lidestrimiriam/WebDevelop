let generatorContainer = document.getElementById("generatorContainer");

const generatori = [
  {
    id: "g1",
    simbolo: "fuoco",
    velocità: 2000,
    capacità: 20,
    current: 0
  },
  {
    id: "g2",
    simbolo: "fulmine",
    velocità: 3000,
    capacità: 20,
    current: 0
  },
  {
    id: "g3",
    simbolo: "diamante",
    velocità: 4000,
    capacità: 20,
    current: 0
  },
  {
    id: "g4",
    simbolo: "grano",
    velocità: 5000,
    capacità: 20,
    current: 0
  }
];

for (let i = 0; i < generatori.length; i++) {
  let generatore = generatori[i];
  let bottone = document.createElement("button");
  bottone.id = generatore.id;
  bottone.textContent = generatore.simbolo + ": " + generatore.current + "/" + generatore.capacità;
  bottone.addEventListener("click", () => {
    raccogli(i);
  });
  generatorContainer.append(bottone);
  iniziaProduzione(i);
}

function iniziaProduzione(index) {
  let generatore = generatori[index];
  if (generatore.interval != null) return;
  generatore.interval = setInterval(() => {
    if (generatore.current >= generatore.capacità) {
      clearInterval(generatore.interval);
      generatore.interval = null;
      return;
    }
    generatore.current++;
    aggiornaBottone(index);
  }, generatore.velocità);
}

function aggiornaBottone(index) {
  let generatore = generatori[index];
  let bottone = document.getElementById(generatore.id);
  bottone.textContent = generatore.simbolo + ": " + generatore.current + "/" + generatore.capacità;
}

function raccogli(index) {
  let generatore = generatori[index];
  generatore.current = 0;
  aggiornaBottone(index);
  iniziaProduzione(index);
}
