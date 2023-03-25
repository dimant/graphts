import * as az from './azlogin'
import { Application } from './appmodel';
import axios from 'axios';

// Define the endpoint to list application objects.
const endpoint = "https://graph.microsoft.com/v1.0/applications?$select=appId,displayName";

async function listApplications(accessToken: string) {
  const apiUrl = 'https://graph.microsoft.com/v1.0/applications';
  const headers = {
    'Authorization': `Bearer ${accessToken}`,
    'Content-Type': 'application/json',
  };
  const response = await axios.get(apiUrl, { headers });
  const applications = response.data.value as Application[];
  return applications;
}

async function main() {
  const token = await az.azGetMsGraphToken();
  const applications = await listApplications(token.accessToken);

  console.log(applications);
}

main().then(() => {
  console.log('Done');
}).catch((error) => {
  console.error(error);
});