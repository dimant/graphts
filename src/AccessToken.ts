export class AccessToken {
    accessToken: string;
    expiresOn: string;
    subscription: string;
    tenant: string;
    tokenType: string;
  
    constructor(accessToken: string, expiresOn: string, subscription: string, tenant: string, tokenType: string) {
      this.accessToken = accessToken;
      this.expiresOn = expiresOn;
      this.subscription = subscription;
      this.tenant = tenant;
      this.tokenType = tokenType;
    }
  }