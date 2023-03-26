export class KeyCredential {
    public customKeyIdentifier: string | null;
    public displayName: string;
    public endDateTime: string | null;
    public key: string;
    public keyId: string;
    public startDateTime: string | null;
    public type: string;
    public usage: string;

    public constructor() {
        this.customKeyIdentifier = null;
        this.displayName = '';
        this.endDateTime = null;
        this.key = '';
        this.keyId = '';
        this.startDateTime = null;
        this.type = '';
        this.usage = '';
    }
}
