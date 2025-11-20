let brnContainer = document.getElementById("brnContainer");

const MAX = 5;
let generator = null;
let index = 1;
let totalSum = 0;

function genBtn(){
    if(index > MAX){
        clearInterval(generator);
        return
    } 

    let newBtn = document.createElement("button");

    newBtn.textContent = index++;
    newBtn.addEventListener("click", () =>{
        //AGGIUNGI A SOMMA E RIMUOVI
        totalSum += Number(newBtn.textContent);
        newBtn.remove();
    });

    brnContainer.append(newBtn);
}



generator = setInterval(genBtn,1000)