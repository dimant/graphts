export class PasswordCredential {
    public customKeyIdentifier: string | null;
    public displayName: string;
    public endDateTime: string | null;
    public hint: string;
    public keyId: string;
    public secretText: string;
    public startDateTime: string | null;

    public constructor() {
        this.customKeyIdentifier = null;
        this.displayName = '';
        this.endDateTime = null;
        this.hint = '';
        this.keyId = '';
        this.secretText = '';
        this.startDateTime = null;
    }
}