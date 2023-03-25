interface TokenEncryptionKeyId {
    keyId: string | null;
    type: string | null;
}

interface ApplicationPermissionScope {
    adminConsentDescription: string;
    adminConsentDisplayName: string;
    id: string;
    isEnabled: boolean;
    type: string;
    userConsentDescription: string;
    userConsentDisplayName: string;
    value: string;
}

interface ApplicationAppRole {
    allowedMemberTypes: string[];
    description: string;
    displayName: string;
    id: string;
    isEnabled: boolean;
    origin: string;
    value: string;
}

interface ApplicationInfo {
    logoUrl: string | null;
    marketingUrl: string | null;
    privacyStatementUrl: string | null;
    supportUrl: string | null;
    termsOfServiceUrl: string | null;
}

interface ApplicationResourceAccess {
    id: string;
    type: string;
}

interface ApplicationRequiredResourceAccess {
    resourceAppId: string;
    resourceAccess: ApplicationResourceAccess[];
}

interface ApplicationVerifiedPublisher {
    displayName: string | null;
    verifiedPublisherId: string | null;
    addedDateTime: string | null;
}

interface ApplicationWebImplicitGrantSettings {
    enableAccessTokenIssuance: boolean;
    enableIdTokenIssuance: boolean;
}

interface ApplicationWebRedirectUriSettings {
    type: string;
    value: string;
}

interface ApplicationWeb {
    homePageUrl: string | null;
    logoutUrl: string | null;
    redirectUris: string[];
    implicitGrantSettings: ApplicationWebImplicitGrantSettings;
    redirectUriSettings: ApplicationWebRedirectUriSettings[];
}

interface ApplicationSpa {
    redirectUris: string[];
}

export interface Application {
    id: string;
    deletedDateTime: string | null;
    appId: string;
    applicationTemplateId: string | null;
    disabledByMicrosoftStatus: string | null;
    createdDateTime: string;
    displayName: string;
    description: string | null;
    groupMembershipClaims: string | null;
    identifierUris: string[];
    isDeviceOnlyAuthSupported: boolean | null;
    isFallbackPublicClient: boolean | null;
    notes: string | null;
    publisherDomain: string;
    serviceManagementReference: string | null;
    signInAudience: string;
    tags: string[];
    tokenEncryptionKeyId: TokenEncryptionKeyId | null;
    samlMetadataUrl: string | null;
    defaultRedirectUri: string | null;
    certification: string | null;
    optionalClaims: string | null;
    servicePrincipalLockConfiguration: string | null;
    requestSignatureVerification: string | null;
    addIns: string[];
    api: {
        acceptMappedClaims: string | null;
        knownClientApplications: string[];
        requestedAccessTokenVersion: string | null;
        oauth2PermissionScopes: ApplicationPermissionScope[];
        preAuthorizedApplications: string[];
    };
    appRoles: ApplicationAppRole[];
    info: ApplicationInfo;
    keyCredentials: string[];
    parentalControlSettings: {
        countriesBlockedForMinors: string[];
        legalAgeGroupRule: string;
    };
    passwordCredentials: string[];
    publicClient: {
        redirectUris: string[];
    };
    requiredResourceAccess: ApplicationRequiredResourceAccess[];
    verifiedPublisher: ApplicationVerifiedPublisher;
    web: ApplicationWeb;
    spa: ApplicationSpa;
}

