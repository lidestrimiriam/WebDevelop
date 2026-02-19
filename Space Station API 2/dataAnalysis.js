async function shutdownAllLowExperiments(){
    const response = await fetch("http://localhost:3000/experiments");
    const allExperimentsData = await response.json();

    let commandsFromServer = [];

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

shutdownAllLowExperiments();