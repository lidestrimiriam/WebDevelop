/*const BASE_URL = "http://localhost:3000";*/

async function esperimentiAttivi(){
  let response = await fetch('http://localhost:3000/experiments');
  let json = await response.json();

  let activeExp = 0;
  let standbyExp = 0;
  let canActiveMore = false;
  let experiments = json.experiments;
  let powerStatus = json.powerStatus;

  for(let experiment of experiments){
    if(experiment.status === "active"){
      activeExp++;
    }
    if(experiment.status === "standby"){
      standbyExp++;
    }
  }

  if(powerStatus.available > 3){
    canActiveMore = true;
  }

  return{
    activeCount: activeExp,
    standyCount: standbyExp,
    canActiveMore: canActiveMore
  }
}


async function lowPriorityExp(){
  let response = await fetch('http://localhost:3000/experiments');
  let json = await response.json();

  let experiments = json.experiments;

  let commandsFromServer = [];

  for(let experiment of experiments){
    let priority = experiment.priority;
    let status = experiment.status;
    if(priority === "low" && status === "active"){
      let responsePOST = await fetch('http://localhost:3000/commands',
      { method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(
        { action: "shutdown",
          experimentId: experiment.id,
          reason: "pk jes"
        })
      });
      let jsonPOST = responsePOST.json();
      let commandId = jsonPOST.command.id;
      if(dataPOST.success){
        commandsFromServer.push({
          commandId: commandId,
          experimentId: experiment.id
        });
      }
    }
  }

  return commandsFromServer;
}


async function comandiPendenti(){
  let response = await fetch("http://localhost:3000/commands")
  let json = await response.json();

  let commands = json.queue;
  let countSuccess = 0;
  let countFailed = 0;
  let results = [];

  for(let command of commands){
    if(command.status === "pending"){
      let responsePUT = await fetch("http://localhost:3000/commands/" + command.id + "/execute", {method: 'PUT'});
      let jsonPUT = await responsePUT.json();

      if(jsonPUT.success){
        countSuccess++;
        results.push({
          commandId: command.id,
          experimentId: command.experimentId,
          success: true
        });
      }else{
        countFailed++;
       results.push({
          commandId: command.id,
          experimentId: command.experimentId,
          success: false
        });
      }
    }
  }

  return{
    executed: countSuccess,
    failed: countFailed,
    result: results
  }
}

async function printResult(){
  let result1 = await esperimentiAttivi();
  console.log(result1);

  let result2 = await lowPriorityExp();
  console.log(result2);

  let result3 = await comandiPendenti();
  console.log(result3);
}

printResult();