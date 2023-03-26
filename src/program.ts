import * as az from './azlogin'
import * as login from './credlogin'
import * as cred from './user_credentials.cred'

import { Application } from './Model/Application';
import { ServicePrincipal } from './Model/ServicePrincipal';
import { RestClient } from './RestClient';

async function graph(accessToken: string) {
  const endpoint = 'https://graph.microsoft.com/beta';
  const client = new RestClient(endpoint, accessToken);
  const applications = await client.get<Application[]>('/applications');
  const servicePrincipals = await client.get<ServicePrincipal[]>('/servicePrincipals');

  console.log("Applications:");
  applications.forEach((application) => {
    console.log(`  ${application.displayName} (${application.id})`);
  });

  console.log("Service Principals:");
  servicePrincipals.forEach((servicePrincipal) => {
    console.log(`  ${servicePrincipal.displayName} (${servicePrincipal.id})`);
  });
}

async function main() {
  const accessToken = await login.getMsGraphToken(cred.test_user_1_cred());

  await graph(accessToken);
}

main().then(() => {
  console.log('Done');
}).catch((error) => {
  console.error(error);
});