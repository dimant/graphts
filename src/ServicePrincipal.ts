interface IOAuth2PermissionScope {
    adminConsentDescription: string;
    adminConsentDisplayName: string;
    id: string;
    isEnabled: boolean;
    type: string;
    userConsentDescription: string;
    userConsentDisplayName: string;
    value: string;
}

interface IAppRole {
    allowedMemberTypes: string[];
    description: string;
    displayName: string;
    id: string;
    isEnabled: boolean;
    origin: string;
    value: string;
}

interface IInfo {
    logoUrl: string | null;
    marketingUrl: string | null;
    privacyStatementUrl: string | null;
    supportUrl: string | null;
    termsOfServiceUrl: string | null;
}

interface IVerifiedPublisher {
    displayName: string | null;
    verifiedPublisherId: string | null;
    addedDateTime: string | null;
}

export class ServicePrincipal {
    id: string;
    deletedDateTime: string | null;
    accountEnabled: boolean;
    alternativeNames: string[];
    appDisplayName: string;
    appDescription: string | null;
    appId: string;
    applicationTemplateId: string | null;
    appOwnerOrganizationId: string;
    appRoleAssignmentRequired: boolean;
    createdDateTime: string;
    description: string | null;
    disabledByMicrosoftStatus: string | null;
    displayName: string;
    homepage: string | null;
    loginUrl: string | null;
    logoutUrl: string | null;
    notes: string | null;
    notificationEmailAddresses: string[];
    preferredSingleSignOnMode: string | null;
    preferredTokenSigningKeyThumbprint: string | null;
    replyUrls: string[];
    servicePrincipalNames: string[];
    servicePrincipalType: string;
    signInAudience: string;
    tags: string[];
    tokenEncryptionKeyId: string | null;
    samlSingleSignOnSettings: unknown | null;
    addIns: unknown[];
    appRoles: IAppRole[];
    info: IInfo;
    keyCredentials: unknown[];
    oauth2PermissionScopes: IOAuth2PermissionScope[];
    passwordCredentials: unknown[];
    resourceSpecificApplicationPermissions: unknown[];
    verifiedPublisher: IVerifiedPublisher;

    constructor(json: any) {
        this.id = json.id;
        this.deletedDateTime = json.deletedDateTime;
        this.accountEnabled = json.accountEnabled;
        this.alternativeNames = json.alternativeNames;
        this.appDisplayName = json.appDisplayName;
        this.appDescription = json.appDescription;
        this.appId = json.appId;
        this.applicationTemplateId = json.applicationTemplateId;
        this.appOwnerOrganizationId = json.appOwnerOrganizationId;
        this.appRoleAssignmentRequired = json.appRoleAssignmentRequired;
        this.createdDateTime = json.createdDateTime;
        this.description = json.description;
        this.disabledByMicrosoftStatus = json.disabledByMicrosoftStatus;
        this.displayName = json.displayName;
        this.homepage = json.homepage;
        this.loginUrl = json.loginUrl;
        this.logoutUrl = json.logoutUrl;
        this.notes = json.notes;
        this.notificationEmailAddresses = json.notificationEmailAddresses;
        this.preferredSingleSignOnMode = json.preferredSingleSignOnMode;
        this.preferredTokenSigningKeyThumbprint = json.preferredTokenSigningKeyThumbprint;
        this.replyUrls = json.replyUrls;
        this.servicePrincipalNames = json.servicePrincipalNames;
        this.servicePrincipalType = json.servicePrincipalType;
        this.signInAudience = json.signInAudience;
        this.tags = json.tags;
        this.tokenEncryptionKeyId = json.tokenEncryptionKeyId;
        this.samlSingleSignOnSettings = json.samlSingleSignOnSettings;
        this.addIns = json.addIns;
        this.appRoles = json.appRoles;
        this.info = json.info;
        this.keyCredentials = json.keyCredentials;
        this.oauth2PermissionScopes = json.oauth2PermissionScopes;
        this.passwordCredentials = json.passwordCredentials;
        this.resourceSpecificApplicationPermissions = json.resourceSpecificApplicationPermissions;
        this.verifiedPublisher = json.verifiedPublisher;
    }
}
