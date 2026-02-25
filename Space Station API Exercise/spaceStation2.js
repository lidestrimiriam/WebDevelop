const BASE_URL = "http://localhost:3000";
const POWER_BUDGET = 1000; 

async function checkExperimentCapacity() {
  const res = await fetch(`${BASE_URL}/experiments`);
  const experiments = await res.json();

  const active = experiments.filter(e => e.status === "active");
  const standby = experiments.filter(e => e.status === "standby");

  const activePower = active.reduce((sum, e) => sum + e.powerConsumption, 0);

  const standbyCandidate = standby[0];

  let canActiveMore = false;

  if (standbyCandidate) {
    canActiveMore =
      activePower + standbyCandidate.powerConsumption <= POWER_BUDGET;
  }

  return {
    activeCount: active.length,
    standbyCount: standby.length,
    canActiveMore
  };
}

async function shutdownLowPriorityActive() {
  const res = await fetch(`${BASE_URL}/experiments`);
  const experiments = await res.json();

  const lowActive = experiments.filter(
    e => e.priority === "low" && e.status === "active"
  );

  const results = [];

  for (const exp of lowActive) {
    const cmdRes = await fetch(`${BASE_URL}/commands`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        experimentId: exp.id,
        action: "shutdown"
      })
    });

    const command = await cmdRes.json();

    results.push({
      experimentID: exp.id,
      commandId: command.id
    });
  }

  return results;
}
async function executePendingCommands() {
  const res = await fetch(`${BASE_URL}/commands`);
  const commands = await res.json();

  const pending = commands.filter(c => c.status === "pending");

  let executed = 0;
  let failed = 0;
  const result = [];

  for (const cmd of pending) {
    try {
      const execRes = await fetch(
        `${BASE_URL}/commands/${cmd.id}/execute`,
        { method: "PUT" }
      );

      if (execRes.ok) {
        executed++;
        result.push({ id: cmd.id, status: "executed" });
      } else {
        failed++;
        result.push({ id: cmd.id, status: "failed" });
      }
    } catch (err) {
      failed++;
      result.push({ id: cmd.id, status: "failed" });
    }
  }

  return { executed, failed, result };
}
async function emergencyStopHighestConsumer() {
  const res = await fetch(`${BASE_URL}/experiments`);
  const experiments = await res.json();

  if (!experiments.length) {
    return { action: "cancelled" };
  }

  const highest = experiments.reduce((max, e) =>
    e.powerConsumption > max.powerConsumption ? e : max
  );

  const cmdRes = await fetch(`${BASE_URL}/commands`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      experimentId: highest.id,
      action: "emergency_stop"
    })
  });

  if (!cmdRes.ok) {
    return { action: "cancelled", experimentId: highest.id };
  }

  return {
    action: "executed",
    experimentId: highest.id,
    powersaved: highest.powerConsumption
  };
}
async function powerBalancer() {
  const res = await fetch(`${BASE_URL}/experiments`);
  const experiments = await res.json();

  const totalPower = experiments
    .filter(e => e.status === "active")
    .reduce((sum, e) => sum + e.powerConsumption, 0);

  const threshold = POWER_BUDGET * 0.8;

  if (totalPower > threshold) {
    
    const candidate = experiments
      .filter(e => e.status === "active" && e.priority === "medium")
      .sort((a, b) => a.powerConsumption - b.powerConsumption)[0];

    if (!candidate) return { action: "none" };

    const cmd = await fetch(`${BASE_URL}/commands`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        experimentId: candidate.id,
        action: "shutdown"
      })
    }).then(r => r.json());

    await fetch(`${BASE_URL}/commands/${cmd.id}/execute`, {
      method: "PUT"
    });

    return {
      action: "shutdown",
      experimentId: candidate.id,
      newPowerUsed: totalPower - candidate.powerConsumption
    };

  } else {
   
    const standby = experiments.find(e => e.status === "standby");
    if (!standby) return { action: "none" };

    const cmd = await fetch(`${BASE_URL}/commands`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        experimentId: standby.id,
        action: "activate"
      })
    }).then(r => r.json());

    await fetch(`${BASE_URL}/commands/${cmd.id}/execute`, {
      method: "PUT"
    });

    return {
      action: "activate",
      experimentId: standby.id,
      newPowerUsed: totalPower + standby.powerConsumption
    };
  }
}