import orchestrator from "./orchestrator";

async function GlobalSetup() {
  await orchestrator.waitForAllServices();
}

export default GlobalSetup;
