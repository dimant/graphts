import * as f from 'node-fetch';
import * as childProcess from 'child_process';

interface TokenResponse {
  access_token: string;
  refresh_token: string;
  expires_in: number;
}

async function getAccessToken(): Promise<TokenResponse> {
  const tokenEndpoint = 'https://login.microsoftonline.com/c974785a-c681-404f-9291-caba2e3c84c5/oauth2/v2.0/token'; // Replace <tenant-id> with your tenant ID
  const clientId = '1950a258-227b-4e31-a9cf-717495945fc2'; // Replace <client-id> with your client ID
  const scope = 'https://graph.microsoft.com/.default';

  // Step 1: Call the Azure CLI to authenticate the user and obtain an access token
  const command = `az login --allow-no-subscriptions --output json`;
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

  const result = JSON.parse(output.trim());
  const token = result[0].accessToken;

  // Step 2: Exchange the access token for an access token for the Microsoft Graph API
  const response = await fetch(tokenEndpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&client_id=${clientId}&client_secret=${encodeURIComponent(token)}&scope=${encodeURIComponent(scope)}`
  });

  const tokenResponse = await response.json() as TokenResponse;
  return tokenResponse;
}

async function main() {
  const tokenResponse = await getAccessToken();
  console.log(tokenResponse);
}

main().then(() => {
  console.log('Done');
}).catch((error) => {
  console.error(error);
});