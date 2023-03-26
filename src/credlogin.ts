import * as OTPAuth from "otpauth";
import axios from 'axios';

interface ICredential {
    tenantId: string;
    clientId: string;
    username: string;
    password: string;
    totp_secret: string;
    scope: string;
}

let estsProd = 'https://login.microsoftonline.com';

export async function getMsGraphToken(credential:ICredential) : Promise<string>
{
    const totp = new OTPAuth.TOTP({
      digits: 6,
      period: 30,
      secret: credential.totp_secret
    });
    const totp_code = totp.generate();
  
    const authUrl = `${estsProd}/${credential.tenantId}/oauth2/v2.0/token`;
    const authHeaders = { 'Content-Type': 'application/x-www-form-urlencoded' };
    const authData = new URLSearchParams({
      grant_type: 'password',
      scope: credential.scope,
      client_id: credential.clientId,
      username: credential.username,
      password: credential.password,
      totp: totp_code
    });
    const authResponse = await axios.post(authUrl, authData.toString(), { headers: authHeaders });

    return authResponse.data.access_token;
}