import { exec } from "node:child_process";

function checkPostgres() {
  const handleReturn = (error: Error | null, stdout: string) => {
    if (stdout.search("accepting connections") === -1) {
      process.stdout.write(".");
      checkPostgres();
      return;
    }

    console.log("\n🟢 Postgres esta pronto e aceitando conexões!\n");
  };

  exec(
    "sudo docker exec clothes-manager-dev pg_isready --host localhost",
    handleReturn,
  );
}

process.stdout.write("\n\n🔴 Aguardando Postgres aceitar conexões");
checkPostgres();
