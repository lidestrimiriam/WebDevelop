let gameContainer = document.getElementById("gameContainer");

function bottoni(){
  for(let i = 0; i <= Math.floor(Math.random()*10)+1; i++){
  let bottone = document.createElement("button");
  bottone.id = "B" + (i + 1);
  let LP = Math.floor(Math.random()*10)+1;
  bottone.LP = LP;
  bottone.textContent = bottone.id + " LP: " + LP;

  gameContainer.append(bottone);
  }
}

bottoni();

