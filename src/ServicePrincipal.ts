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
    id: string;
    appId: string;
    
    accountEnabled: boolean;
    addIns: string[];
    alternativeNames: string[];
    appDescription: string | null;
    appDisplayName: string;
    applicationTemplateId: string | null;
    appRoleAssignmentRequired: boolean;
    appRoles: AppRole[];
    deletedDateTime: string | null;
    description: string | null;
    disabledByMicrosoftStatus: string | null;
    displayName: string;
    errorUrl: string | null;
    homepage: string | null;
    info: InformationalUrl;
    keyCredentials: KeyCredential[];
    loginUrl: string | null;
    logoutUrl: string | null;
    notes: string | null;
    notificationEmailAddresses: string[];
    passwordCredentials: PasswordCredential[];
    passwordSingleSignOnSettings: PasswordSingleSignOnSettings | null;
    preferredSingleSignOnMode: string | null;
    preferredTokenSigningKeyEndDateTime: string | null;
    preferredTokenSigningKeyThumbprint: string | null;
    publisherName: string | null;
    replyUrls: string[];
    samlMetadataUrl: string | null;
    samlSingleSignOnSettings: SamlSingleSignOnSettings | null;
    servicePrincipalNames: string[];
    servicePrincipalType: string;
    signInAudience: string;
    tags: string[];
    tokenEncryptionKeyId: string | null;
    verifiedPublisher: VerifiedPublisher;
    
    appOwnerOrganizationId: string;
    createdDateTime: string;
    publishedPermissionScopes: PermissionScope[];
    oauth2PermissionScopes: PermissionScope[];
    resourceSpecificApplicationPermissions: unknown[];

    constructor(json: any) {
        this.id = json.id;
        this.deletedDateTime = json.deletedDateTime;
        this.accountEnabled = json.accountEnabled;
        this.alternativeNames = json.alternativeNames;
        this.appDisplayName = json.appDisplayName;
        this.appDescription = json.appDescription;
        this.appId = json.appId;
        this.errorUrl = json.errorUrl;
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
        this.passwordSingleSignOnSettings = json.passwordSingleSignOnSettings;
        this.preferredSingleSignOnMode = json.preferredSingleSignOnMode;
        this.preferredTokenSigningKeyEndDateTime = json.preferredTokenSigningKeyEndDateTime;
        this.preferredTokenSigningKeyThumbprint = json.preferredTokenSigningKeyThumbprint;
        this.publishedPermissionScopes = json.publishedPermissionScopes;
        this.publisherName = json.publisherName;
        this.replyUrls = json.replyUrls;
        this.samlMetadataUrl = json.samlMetadataUrl;
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
