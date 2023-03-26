import { AppRole } from "./AppRole";
import { InformationalUrl } from "./InformationalUrl";
import { KeyCredential } from "./KeyCredential";
import { PasswordCredential } from "./PasswordCredential";
import { PermissionScope } from "./PermissionScope";
import { VerifiedPublisher } from "./VerifiedPublisher";

interface ServicePrincipalInfo {
    logoUrl: string | null;
    marketingUrl: string | null;
    privacyStatementUrl: string | null;
    supportUrl: string | null;
    termsOfServiceUrl: string | null;
}

interface ServicePrincipalVerifiedPublisher {
    displayName: string | null;
    verifiedPublisherId: string | null;
    addedDateTime: string | null;
}

interface PasswordSingleSignOnSettings {
    fields: string[];
}

interface SamlSingleSignOnSettings {
    relayState: string | null;
}

export class ServicePrincipal {
    public id: string;
    public appId: string;

    public accountEnabled: boolean;
    public addIns: string[];
    public alternativeNames: string[];
    public appDescription: string | null;
    public appDisplayName: string;
    public applicationTemplateId: string | null;
    public appRoleAssignmentRequired: boolean;
    public appRoles: AppRole[];
    public deletedDateTime: string | null;
    public description: string | null;
    public disabledByMicrosoftStatus: string | null;
    public displayName: string;
    public errorUrl: string | null;
    public homepage: string | null;
    public info: InformationalUrl;
    public keyCredentials: KeyCredential[];
    public loginUrl: string | null;
    public logoutUrl: string | null;
    public notes: string | null;
    public notificationEmailAddresses: string[];
    public passwordCredentials: PasswordCredential[];
    public passwordSingleSignOnSettings: PasswordSingleSignOnSettings | null;
    public preferredSingleSignOnMode: string | null;
    public preferredTokenSigningKeyEndDateTime: string | null;
    public preferredTokenSigningKeyThumbprint: string | null;
    public publisherName: string | null;
    public replyUrls: string[];
    public samlMetadataUrl: string | null;
    public samlSingleSignOnSettings: SamlSingleSignOnSettings | null;
    public servicePrincipalNames: string[];
    public servicePrincipalType: string;
    public signInAudience: string;
    public tags: string[];
    public tokenEncryptionKeyId: string | null;
    public verifiedPublisher: VerifiedPublisher;

    public appOwnerOrganizationId: string;
    public createdDateTime: string;
    public publishedPermissionScopes: PermissionScope[];
    public oauth2PermissionScopes: PermissionScope[];
    public resourceSpecificApplicationPermissions: unknown[];

    public constructor() {
        this.id = '';
        this.appId = '';
        this.accountEnabled = true;
        this.addIns = [];
        this.alternativeNames = [];
        this.appDescription = null;
        this.appDisplayName = '';
        this.applicationTemplateId = null;
        this.appRoleAssignmentRequired = false;
        this.appRoles = [];
        this.deletedDateTime = null;
        this.description = null;
        this.disabledByMicrosoftStatus = null;
        this.displayName = '';
        this.errorUrl = null;
        this.homepage = null;
        this.info = {
            logoUrl: null,
            marketingUrl: null,
            privacyStatementUrl: null,
            supportUrl: null,
            termsOfServiceUrl: null
        };
        this.keyCredentials = [];
        this.loginUrl = null;
        this.logoutUrl = null;
        this.notes = null;
        this.notificationEmailAddresses = [];
        this.passwordCredentials = [];
        this.passwordSingleSignOnSettings = null;
        this.preferredSingleSignOnMode = null;
        this.preferredTokenSigningKeyEndDateTime = null;
        this.preferredTokenSigningKeyThumbprint = null;
        this.publisherName = null;
        this.replyUrls = [];
        this.samlMetadataUrl = null;
        this.samlSingleSignOnSettings = null;
        this.servicePrincipalNames = [];
        this.servicePrincipalType = '';
        this.signInAudience = '';
        this.tags = [];
        this.tokenEncryptionKeyId = null;
        this.verifiedPublisher = {
            displayName: null,
            verifiedPublisherId: null,
            addedDateTime: null
        };

        this.appOwnerOrganizationId = '';
        this.createdDateTime = '';
        this.publishedPermissionScopes = [];
        this.oauth2PermissionScopes = [];
        this.resourceSpecificApplicationPermissions = [];
    }
}
