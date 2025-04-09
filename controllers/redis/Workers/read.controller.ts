import { exec } from "child_process";
import fs from "fs";
import path from "path";

const listingDirectory = (absPath: string) => {
  const scriptPath = path.join(
    path.dirname(new URL(import.meta.url).pathname),
    "script.sh"
  );

  const safePath = absPath.replace(/["'`]/g, ""); // Remove quotes to prevent injection
  const script = `ls "${safePath}"`;
  fs.writeFileSync(scriptPath, script, { mode: 0o755 });

  exec(`sh "${scriptPath}"`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing ls: ${error.message}`);
      throw new Error("Sorry cannot perform operation");
    }
    if (stderr) {
      console.error(`stderr: ${stderr}`);
    }
  });
};

const gettingHistory = () => {
  const scriptPath = path.join(
    path.dirname(new URL(import.meta.url).pathname),
    "script.sh"
  );
  const script = `cat ~/.bash_history`;
  fs.writeFileSync(scriptPath, script, { mode: 0o755 });

  exec(`sh "${scriptPath}"`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error reading command history: ${error.message}`);
      throw new Error("Sorry cannot perform operation");
    }
    if (stderr) {
      console.error(`stderr: ${stderr}`);
    }
  });
};

const readingFile = (absPath: string) => {
  const scriptPath = path.join(
    path.dirname(new URL(import.meta.url).pathname),
    "script.sh"
  );
  console.log(path);
  const script = `less ${absPath}`;
  fs.writeFileSync(scriptPath, script, { mode: 0o755 });

  exec(`sh "${scriptPath}"`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing echo: ${error.message}`);
      throw new Error("Sorry cannot perform operation");
    }

    if (stderr) {
      console.error(`stderr: ${stderr}`);
    }
  });
};

export default { readingFile, gettingHistory, listingDirectory };
