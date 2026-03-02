async function shutdownAllLowExperiments(){
    const response = await fetch("http://localhost:3000/experiments");
    const allExperimentsData = await response.json();

    let commandsFromServer = [];
/* TASK 2 */
    for (const experiment of allExperimentsData.experiments){
        if(experiment.status === "active" && experiment.priority === "low"){
            const postResponse = await fetch("http://localhost:3000/commands", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                    },
                body: JSON.stringify({
                    action: "shutdown",
                    experimentId: experiment.id
                })
            })
            const postServerData = await postResponse.json();


            if (postServerData.success){
                commandsFromServer.push({
                    experimentId: experiment.id,
                    commandId: postServerData.command.id
                });
            }
        }
    }
    return commandsFromServer;
}

/* TASK 1 */
async function esperimentiAttivi(){
    let response = await fetch("http://localhost:3000/experiments");
    let json = await response.json();

    let experiments = json.experiments;
    let counterActive = 0;
    let counterStandby = 0;
    let canActiveMore = false;

    let powerStatus = json.powerStatus;

    for(let experiment of experiments){
        if(experiment.status === "active"){
            counterActive++;
        }
        if(experiment.status === "standby"){
            counterStandby++;
        }

    }
    if(powerStatus.available > 3){
        canActiveMore = true;
    }

    return({
        counterActive: counterActive,
        counterStandby: counterStandby,
        canActiveMore: canActiveMore
    });
}

/* TASK 3 */
async function comandiPendenti(){
    let response = await fetch("http://localhost:3000/commands");
    let json = await response.json();

    let commands = json.queue;
    let comandiEseguiti = 0;
    let comandiFalliti = 0;
    let risultati = [];
    for(let command of commands){
        if(command.status === "pending"){
            let responsePUT = await fetch("http://localhost:3000/commands/" + command.id + "/execute", {method: 'PUT'});
            let jsonPUT = await responsePUT.json();
        if(jsonPUT.success){
            comandiEseguiti++;
            risultati.push({
                commandID: command.id,
                esperimentoID: command.experimentId,
                success: true
             });
        }else{
            comandiFalliti++;
             risultati.push({
                commandID: command.id,
                esperimentoID: command.experimentId,
                success: false,
                errore: jsonPUT.error
             });
            }
        }
    }
    return({
        comandiEseguiti: comandiEseguiti,
        comandiFalliti: comandiFalliti,
        risultati: risultati
    });

}




async function printResults(){
    const result = await shutdownAllLowExperiments();
    console.log(result);
    const result2 = await esperimentiAttivi();
    console.log(result2);
    const result3 = await comandiPendenti();
    console.log(result3);

}

printResults();


