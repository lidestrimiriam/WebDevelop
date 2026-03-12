const express = require("express");
const app = express();

app.use(express.json());

let clienti = [
    {id: 1, nome: "Han Solo", specie: "umano", crediti: 1500},
    {id: 2, nome: "Chewbecca", specie: "wookie", crediti: 900},
    {id: 3, nome: "Greedo", specie: "rodiano", crediti: 300},
    {id: 4, nome: "Hammerhead", specie: "ithoriano", crediti: 200}
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
})

//Se non hai la tessere non entri - Middleware
app.use("/clienti", (req, res, next) => {
    //console.log("[Middleware Clienti] qui");
    const tessere = req.headers["x-tessere"];

    if(!tessere){
        res.status(403).json({error: "Devi avere una tessera"});
    }

    next();
})

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
})

app.use("/clienti", (req, res, next) => {
    if(req.method !== "POST" && req.method !== "PUT"){
        return next();
    }

    const nome = req.body.nome;
    const specie = req.body.specie;
    const crediti = req.body.crediti;

    if(!nome){
        res.status().json();
    }
})

//E' una rotta - Root Head
app.get("/clienti", (req, res) => {

    res.json(clienti);
})










app.listen(3000, () => {
    console.log("Cantina aperta sulla porta 3000");
});