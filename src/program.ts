import * as az from './azlogin'
import { Application } from './Application';
import { ServicePrincipal } from './ServicePrincipal';
import { RestClient } from './restclient';

async function main() {
  const endpoint = 'https://graph.microsoft.com/v1.0';
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