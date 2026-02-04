const URL = 'https://jsonplaceholder.typicode.com/usersXXX/1';

fetch(URL).catch((error)=>{
    console.error("Errore nella richiesta " + error);
})