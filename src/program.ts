import * as az from './azlogin'
import * as login from './credlogin'
import * as cred from './user_credentials.cred'

import { Application } from './Model/Application';
import { ServicePrincipal } from './Model/ServicePrincipal';
import { RestClient } from './RestClient';
import { ODataQuery } from './ODataRequest';

async function graph(accessToken: string) {
  const endpoint = 'https://graph.microsoft.com/beta';
  const client = new RestClient(endpoint, accessToken);

  // const applications = await client.get<Application[]>('applications');
  // console.log("Applications:");
  // applications.forEach((application) => {
  //   console.log(`  ${application.displayName} (${application.id})`);
  // });
  
  const servicePrincipals = await client.get<ServicePrincipal[]>('servicePrincipals');
  console.log("Service Principals:");
  servicePrincipals.forEach((servicePrincipal) => {
    console.log(`  ${servicePrincipal.displayName} (${servicePrincipal.id})`);
  });

  const search = new ODataQuery()
    .collection('servicePrincipals')
    .search('displayName', 'clientapp')
    .select(['displayName', 'id']);

  const clientappsp = await client.search<ServicePrincipal[]>(search.path());

  console.log("ClientAppSP:");
  clientappsp.forEach((servicePrincipal) => {
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