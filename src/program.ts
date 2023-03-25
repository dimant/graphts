import * as az from './azlogin'
import { Application } from './Model/Application';
import { ServicePrincipal } from './Model/ServicePrincipal';
import { RestClient } from './RestClient';

async function main() {
  const endpoint = 'https://graph.microsoft.com/beta';
  const token = await az.azGetMsGraphToken();
  const client = new RestClient(endpoint, token.accessToken);
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

main().then(() => {
  console.log('Done');
}).catch((error) => {
  console.error(error);
});