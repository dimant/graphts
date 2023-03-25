import { AppRole } from "./AppRole";
import { InformationalUrl } from "./InformationalUrl";
import { KeyCredential } from "./KeyCredential";
import { PasswordCredential } from "./PasswordCredential";
import { PermissionScope  } from "./PermissionScope";
import { VerifiedPublisher } from "./VerifiedPublisher";

interface TokenEncryptionKeyId {
    keyId: string | null;
    type: string | null;
}

interface ApplicationResourceAccess {
    id: string;
    type: string;
}

interface ApplicationRequiredResourceAccess {
    resourceAccess: ApplicationResourceAccess[];
    resourceAppId: string;
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

interface PreAuthorizedApplication {
    appId: string;
    delegatedPermissionIds: string[];
}
interface ApplicationSpa {
    redirectUris: string[];
}

// https://learn.microsoft.com/en-us/graph/api/resources/apiapplication?view=graph-rest-1.0
interface ApiApplication {
    acceptMappedClaims: string | null;
    knownClientApplications: string[];
    oauth2PermissionScopes: PermissionScope[];
    preAuthorizedApplications: PreAuthorizedApplication[];
    requestedAccessTokenVersion: string | null;
}

interface ApplicationCertification {
    certificationDetailsUrl: string;
    certificationExpirationDateTime: string;
    isCertifiedByMicrosoft: boolean;
    isPublisherAttested: boolean;
    lastCertificationDateTime: string;
}

interface ApplicationOptionalClaim {
    additionalProperties: string[];
    essential: boolean;
    name: string;
    source: string;
}

interface ApplicationOptionalClaims {
    accessToken: ApplicationOptionalClaim[];
    idToken: ApplicationOptionalClaim[];
    saml2Token: ApplicationOptionalClaim[];
}

interface ApplicationParentalControlSettings {
    countriesBlockedForMinors: string[];
    legalAgeGroupRule: string;
}

interface PublicClientApplication {
    redirectUris: string[];
}


interface ApplicationServicePrincipalLockConfiguration {
    isEnabled: boolean;
    allProperties: boolean;
    credentialsWithUsageVerify: boolean;
    credentialsWithUsageSign: boolean;
    tokenEncryptionKeyId: boolean
}

export interface Application {
    id: string;
    appId: string;
    appRoles: AppRole[];

    // simplified model. fulld docs:
    // https://learn.microsoft.com/en-us/graph/api/resources/addin?view=graph-rest-1.0
    addIns: string[];
    api: ApiApplication;
    applicationTemplateId: string | null;
    certification: ApplicationCertification | null;
    createdDateTime: string;
    deletedDateTime: string | null;
    description: string | null;
    disabledByMicrosoftStatus: string | null;
    displayName: string;
    groupMembershipClaims: string | null;
    identifierUris: string[];
    info: InformationalUrl;
    isDeviceOnlyAuthSupported: boolean | null;
    isFallbackPublicClient: boolean | null;
    keyCredentials: KeyCredential[];
    notes: string | null;
    oauth2RequiredPostResponse: boolean;
    optionalClaims: ApplicationOptionalClaims | null;
    parentalControlSettings: ApplicationParentalControlSettings | null;
    passwordCredentials: PasswordCredential[];
    publicClient: PublicClientApplication;
    publisherDomain: string;
    requiredResourceAccess: ApplicationRequiredResourceAccess[];
    samlMetadataUrl: string | null;
    serviceManagementReference: string | null;
    signInAudience: string;
    spa: ApplicationSpa;
    tags: string[];
    tokenEncryptionKeyId: TokenEncryptionKeyId | null;
    web: ApplicationWeb;
    verifiedPublisher: VerifiedPublisher;
    servicePrincipalLockConfiguration: ApplicationServicePrincipalLockConfiguration | null;

    defaultRedirectUri: string | null;
    requestSignatureVerification: string | null;
}

