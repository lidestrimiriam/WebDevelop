const URL = 'https://jsonplaceholder.typicode.com/users/999999';

fetch(URL).then((response) => {
  if(response.ok){
    let data = response.json();
    console.log(data);
  }else{
    console.log("Errore HTTP: " + response.status);
  }
})