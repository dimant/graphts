export interface PasswordCredential {
    customKeyIdentifier: string | null;
    displayName: string;
    endDateTime: string | null;
    hint: string;
    keyId: string;
    secretText: string;
    startDateTime: string | null;
}