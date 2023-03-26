export class Group
{
    public id: string;
    public displayName: string;
    public mailEnabled: boolean;
    public mailNickname: string;
    public securityEnabled: boolean;

    public constructor()
    {
        this.id = '';
        this.displayName = '';
        this.mailEnabled = false;
        this.mailNickname = '';
        this.securityEnabled = false;
    }
}