const grades = []

let btn = document.getElementById("calcolo");
let res = document.getElementById("res");
let addBtn = document.getElementById("addValue");
let usIn = document.getElementById("userIn");
let reset = document.getElementById("reset");

reset.addEventListener("click", () =>{
   for(let i = 0; i < grades.length; i++){
    grades.clear()
   }

})

addBtn.addEventListener("change", () => {
    grades.push(Number(usIn.value))
    usIn.value = ""
})

btn.addEventListener("click", () => {
    const numberOfGrades = grades.length
    let gradeSum = 0

    //sommo tutti i voti
    for (let i = 0; i < numberOfGrades; i++){
        gradeSum += grades[i]
    }

    const avarage = gradeSum / numberOfGrades

    res.textContent = "media: " + avarage.toFixed(2)

    if(avarage >= 6){
        res.textContent += " promosso"
    }else{
        res.textContent += " bocciato"
    }

})

//() => {} --> arrow function/ lambda function/ funzione anonima