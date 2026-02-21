const { spawn } = require("child_process");

function resolvePort(argv) {
  let port;
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === "-p" || arg === "--port") {
      const next = argv[i + 1];
      if (next && !next.startsWith("-")) {
        port = next;
      }
    } else if (arg.startsWith("--port=")) {
      port = arg.slice("--port=".length);
    }
  }
  return port || process.env.PORT || "30010";
}

const port = resolvePort(process.argv.slice(2));
const cliPath = require.resolve("webpack-cli/bin/cli.js");

const child = spawn(
  process.execPath,
  [cliPath, "serve", "--config", "webpack.config.cjs", "--mode", "development", "--port", String(port)],
  {
    stdio: "inherit",
    env: process.env,
  }
);

child.on("exit", (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }
  process.exit(code ?? 0);
});
