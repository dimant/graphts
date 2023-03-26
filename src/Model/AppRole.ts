export class AppRole {
    public allowedMemberTypes: string[];
    public description: string;
    public displayName: string;
    public id: string;
    public isEnabled: boolean;
    public origin: string;
    public value: string;

    public constructor() {
        this.allowedMemberTypes = [];
        this.description = '';
        this.displayName = '';
        this.id = '';
        this.isEnabled = false;
        this.origin = '';
        this.value = '';
    }
}