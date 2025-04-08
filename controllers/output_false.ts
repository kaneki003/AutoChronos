import fs from 'fs';
import { exec } from 'child_process';
import path from 'path';
import os, { homedir } from 'os';
import { catchAsync } from '../Utils/catchAsync.js';
import type { Request, Response, NextFunction } from 'express';
import { env } from '../newProcess.js';
import type { ModifiedRequest } from '../Types/extras.types.js';

export const createfile = catchAsync(async(req: ModifiedRequest, res: Response, next: NextFunction)=>{
  // Get the home directory
  const homeDir = os.homedir();
  // Define full path to the shell script in the home directory
  const scriptPath = path.join(homeDir, env.SHELL);
  const filename = req.body.filename;
  const filePath = path.join(homeDir, filename);
  console.log(filename);
  const script = `touch "${filePath}"`;

  console.log(script);

  // Step 1: Create the shell script with the content `touch hello.txt`
  fs.writeFileSync(scriptPath, script, { mode: 0o755 });
  console.log(`Shell script created at: ${scriptPath}`);

  // Step 2: Run the shell script
  exec(`sh ${scriptPath}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing script: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`stderr: ${stderr}`);
      return;
    }
    console.log('Shell script executed successfully.');
  });
  res.send('Waiting for next command.');
})
