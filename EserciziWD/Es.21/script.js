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


    newBtn.textContent = Math.floor(Math.random() * 10) + 1; //math.randome -> numeri casuali con la virgola / math.floor -> toglie la virgola (arrotonda per difetto)
    newBtn.addEventListener("click", () =>{
        //AGGIUNGI A SOMMA E RIMUOVI
        totalSum += Number(newBtn.textContent);
        newBtn.remove();
        console.log(totalSum);
    });
    index++;
    brnContainer.append(newBtn);


}


generator = setInterval(genBtn,1000)