let gameContainer = document.getElementById("gameContainer");
let bersaglio = document.createElement("input");
bersaglio.type = "text";
bersaglio.id = bersaglio;
let contatore = 1;

let togliLP = document.createElement("button");
togliLP.id = togliLP;
togliLP.textContent = "Togli LP";
gameContainer.append(bersaglio, togliLP);

function bottoni(){
  for(let i = 0; i <= Math.floor(Math.random()*10)+1; i++){
  let bottone = document.createElement("button");
  bottone.id = "B" + (i + 1);
  let LP = Math.floor(Math.random()*10)+1;
  bottone.LP = LP;
  bottone.textContent = bottone.id + " LP: " + LP;

  gameContainer.append(bottone);
  bottone.addEventListener("dblclick", () =>{
    cloneBottone(bottone);
  });
  }
}

bersaglio.addEventListener("input", () => {
  if(bersaglio.value.length >= 4){
    bersaglio.value = bersaglio.value.slice(0, 4);
  }
  togliLP.textContent = "Togli LP a " + bersaglio.value;
})

togliLP.addEventListener("click", () =>{
  let bottoneColpire = document.getElementById(bersaglio.value);
  bottoneColpire.LP -= 1;
  bottoneColpire.textContent = bottoneColpire.id + " LP: " + bottoneColpire.LP;
  if(bottoneColpire.LP <= 0){
    bottoneColpire.disabled = true;
    togliLP.disabled = true;

    let timer = setTimeout(() => {
      bottoneColpire.LP = Math.floor(Math.random()*10)+1;
      bottoneColpire.textContent = bottoneColpire.id + " LP: " + bottoneColpire.LP;
      bottoneColpire.disabled = false;
      togliLP.disabled = false;
    },2000);
  }
})

togliLP.addEventListener("contextmenu", () =>{
  let bottoneColpire = document.getElementById(bersaglio.value);
  bottoneColpire.LP -= 2;
  bottoneColpire.textContent = bottoneColpire.id + " LP: " + bottoneColpire.LP;
  if(bottoneColpire.LP <= 0){
    bottoneColpire.disabled = true;
    togliLP.disabled = true;

    let timer = setTimeout(() => {
      bottoneColpire.LP = Math.floor(Math.random()*10)+1;
      bottoneColpire.textContent = bottoneColpire.id + " LP: " + bottoneColpire.LP;
      bottoneColpire.disabled = false;
      togliLP.disabled = false;
    },2000);
  }
})

function cloneBottone(bottone){
  let clone = document.createElement("button");
  clone.LP = bottone.LP;
  clone.id = "B-C" + (contatore++);
  clone.textContent = clone.id + " LP: " + clone.LP;

  gameContainer.append(clone)

  clone.addEventListener("dblclick", () => {
  cloneBottone(clone);
  })
}






bottoni();
