const express = require("express");
const app = express();

app.use(express.json());

let clienti = [
    {id: 1, nome: "Han Solo", specie: "umano", credito: 1500},
    {id: 2, nome: "Chewbecca", specie: "wookie", credito: 900},
    {id: 3, nome: "Greedo", specie: "rodiano", credito: 300},
    {id: 4, nome: "Hammerhead", specie: "ithoriano", credito: 200}
]

let bevande = [
    {id: 1, nome: "Corelian Ale", prezzo: 50 , gradazione: 8},
    {id: 2, nome: "Juice", prezzo: 80 , gradazione: 15},
    {id: 3, nome: "Meranzane Gold", prezzo: 120 , gradazione: 8},
    {id: 4, nome: "Spotchka", prezzo: 200 , gradazione: 20}
]

let nextClient = clienti.length + 1;

//Logger - Middleware
app.use((req, res, next) => {
    console.log("[Cantina Log]" + req.method + "" + req.url);
    next();
});

//Se non hai la tessere non entri - Middleware
app.use("/clienti", (req, res, next) => {
    //console.log("[Middleware Clienti] qui");
    const tessere = req.headers["x-tessere"];

    if(!tessere){
        res.status(403).json({error: "Devi avere una tessera"});
    }

    next();
});

//Legge un Header x-gettori
app.use("/clienti", (req, res, next) =>{
    const gettoni = parseInt(req.headers["x-gettoni"]);
    console.log("[Middleware Clienti gettoni:]" + gettoni);

    if(isNaN(gettoni)){
        res.gettoni = 0;
    }else{
        req.gettoni = gettoni;
    }
    next();
});

app.use("/clienti", (req, res, next) => {
    if(req.method !== "POST" && req.method !== "PUT"){
        return next();
    }

    const nome = req.body.nome;
    const specie = req.body.specie;
    const credito = parseInt(req.body.credito);

    if(!nome){
        return res.status(400).json({error: "Il nome non è inserita"});
    }

    if(!specie){
        return res.status(400).json({error: "La specie non è inserita"});
    }

    if(isNaN(credito)){
        return res.status(400).json({error: "Il credito non è inserito"});
    }

    next();
});

app.post("/clienti", (req, res) => {
    const nome = req.body.nome;
    const specie = req.body.specie;
    const credito = req.body.credito;
    let trovato = false;

    for(let cliente of clienti){
        if(cliente.nome === nome){
            trovato = true;
            
        }
    }

    if(trovato){
        return res.status(409).json({error: "Nome del cliente già esistente"});
    }

    let newClient = {id: nextClientID, nome: nome, specie: specie, credito: credito};
    nextClientID++;
    clienti.push(newClient);

    res.status(201).json(newClient);
});

app.get("/clienti/:id", (req, res) =>{
    let id = parseInt(req.params.id);
    let clienteTrovato = null;

    for(let cliente of clienti){
        if(cliente.id === id){
            clienteTrovato = cliente;
        }
    }

    if(clienteTrovato){
        return res.json(clienteTrovato);
    }else{
        return res.status(404).json({error: "ID non trovato"});
    }
});

//E' una rotta - Root Head
app.get("/clienti", (req, res) => {
    res.json(clienti);
});


app.put("/clienti/:id", (req, res) =>{
    let id = parseInt(req.params.id);

});







app.listen(3000, () => {
    console.log("Cantina aperta sulla porta 3000");
});