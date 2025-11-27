const URL = "https://jsonplaceholder.typicode.com/users/1"
let resElem = document.getElementById("res");
//NO ASYNC/AWAIT
/*fetch(URL).then(response => {
    console.log(response);
    if(response.ok){
        //parse body (.json è async)
        response.json().then( data =>{
            console.log(data);
            //resElem.textContent = JSON.stringify(data);
            for (key in data){
               console.log(data[key])
            }
        })
    }else{
        //tutto male
        console.log("Errore: ", response.status);
    }

})
*/

fetch(URL)
.then(response => {
    if(response.ok){
        response.json()
    }else{
        throw new Error("Errore HTTP: ", response.status);
    }
})
.then(data => console.log(data))
.catch(error => console.log(error))
