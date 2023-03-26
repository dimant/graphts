export class PermissionScope {
    public adminConsentDescription: string;
    public adminConsentDisplayName: string;
    public id: string;
    public isEnabled: boolean;
    public type: string;
    public userConsentDescription: string;
    public userConsentDisplayName: string;
    public value: string;

    public constructor() {
        this.adminConsentDescription = '';
        this.adminConsentDisplayName = '';
        this.id = '';
        this.isEnabled = false;
        this.type = '';
        this.userConsentDescription = '';
        this.userConsentDisplayName = '';
        this.value = '';
    }
}