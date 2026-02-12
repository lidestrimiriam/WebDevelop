const BASE_URL = "http://localhost:3000"

async function getSolarPanels(){
    let response = await fetch(BASE_URL + "/station/status")

    if(response.ok){
        let json = await response.json();
        let panels = json.power.solar.panels;
        let panelsCount = panels.length;

        let activePanels = 0;
        for(const panel of panels){
            if(panel.status === "nominal"){
                activePanels++;
            }
        }

        const percentageActive = (activePanels/ panelsCount) * 100

        console.log(json);
        console.log(panels);

        //creo un OBJ json e lo restituisco 
        return{
            totalPanels: panelsCount,
            operationalPanels: activePanels,
            percentage: percentageActive
        }

    }else{
        console.log("Errore HTTP: " + response.status);
    }
}


async function getModules() {
    let response = await fetch(BASE_URL + "/station/modules");
    
    if(response.ok){
        let json = await response.json();
        let modules = json.modules;

        let listModules = [];
        for(const module of modules){
            let subsystems = module.systems.subsystems;
            for(const subsystem of subsystems){
                if(subsystem.status !== "nominal"){
                    listModules.push(module);
                }
            }
        }

        console.log(subsystem);

        return{
            moduledID: subsystem,
            listSubSystem: listSubSystem
        }

    }else{
        console.log("Errore HTTP: " + response.status);
    }
}

getSolarPanels();
getModules();