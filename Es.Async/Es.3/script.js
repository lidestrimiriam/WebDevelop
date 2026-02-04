const URL = 'https://pokeapi.co/api/v2/pokemon/pikachu';

fetch(URL).then((response) => {
  if(response.ok){
    let data = response.json();
    return data;
  }
}).then((data) => {
  let nome = data.name;
  let peso = data.weight;
  console.log("Nome: " + nome + " " + "Peso: " + peso);
})