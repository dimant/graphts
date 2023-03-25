import * as childProcess from 'child_process';
import { AccessToken } from './Model/AccessToken';

export async function azGetMsGraphToken(): Promise<AccessToken> {
  const command = `az login --output none --allow-no-subscriptions && az account get-access-token --resource https://graph.microsoft.com`;
  const child = childProcess.spawn(command, { shell: true, stdio: ['ignore', 'pipe', 'pipe'] });

  let output = '';
  child.stdout.on('data', (data) => {
    output += data.toString();
  });

  let error = '';
  child.stderr.on('data', (data) => {
    error += data.toString();
  });

  const exitCode = await new Promise((resolve) => {
    child.on('exit', (code) => {
      resolve(code);
    });
  });

  if (exitCode !== 0) {
    throw new Error(`Failed to authenticate with Azure: ${error}`);
  }

  return JSON.parse(output) as AccessToken;
}