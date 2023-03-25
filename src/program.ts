import * as az from './azlogin'
import { Application } from './Application';
import { ServicePrincipal } from './ServicePrincipal';
import { RestClient } from './restclient';

async function listApplications(accessToken: string) {
  const client = new RestClient('https://graph.microsoft.com/v1.0', accessToken);
  const applications = await client.get<Application[]>('/applications');
  return applications;
}

async function listServicePrincipals(accessToken: string) {
  const client = new RestClient('https://graph.microsoft.com/v1.0', accessToken);
  const servicePrincipals = await client.get<ServicePrincipal[]>('/servicePrincipals');
  return servicePrincipals;
}

async function main() {
  const token = await az.azGetMsGraphToken();
  const result = await listServicePrincipals(token.accessToken);

  console.log(result);
}

main().then(() => {
  console.log('Done');
}).catch((error) => {
  console.error(error);
});