interface PasswordProfile
{
    password: string;
    forceChangePasswordNextSignIn: boolean;
}

export class User
{
    public id: string;
    public accountEnabled: boolean;
    public displayName: string;
    public passwordProfile: PasswordProfile;
    public userPrincipalName: string;

    public constructor()
    {
        this.id = '';
        this.accountEnabled = false;
        this.displayName = '';
        this.passwordProfile = {
            password: '',
            forceChangePasswordNextSignIn: false
        };
        this.userPrincipalName = '';
    }
}