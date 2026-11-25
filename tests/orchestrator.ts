import retry from "async-retry";

async function waitForAllServices() {
  const waitForWebServer = async () => {
    const fetchStatusPage = async () => {
      console.log("awaiting response...");
      const response = await fetch("http://localhost:3000/api/v1/status");
      console.log("responded");

      if (response.status != 200) throw Error();
    };

    return retry(fetchStatusPage, {
      retries: 100,
      maxTimeout: 10000,
    });
  };

  await waitForWebServer();
}

const orchestrator = {
  waitForAllServices,
};

export default orchestrator;
