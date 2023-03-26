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
interface ApplicationApi {
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

export class Application {
    public id: string;
    public appId: string;
    public appRoles: AppRole[];

    // simplified model. fulld docs:
    // https://learn.microsoft.com/en-us/graph/api/resources/addin?view=graph-rest-1.0
    public addIns: string[];
    public api: ApplicationApi;
    public applicationTemplateId: string | null;
    public certification: ApplicationCertification | null;
    public createdDateTime: string;
    public deletedDateTime: string | null;
    public description: string | null;
    public disabledByMicrosoftStatus: string | null;
    public displayName: string;
    public groupMembershipClaims: string | null;
    public identifierUris: string[];
    public info: InformationalUrl;
    public isDeviceOnlyAuthSupported: boolean | null;
    public isFallbackPublicClient: boolean | null;
    public keyCredentials: KeyCredential[];
    public notes: string | null;
    public oauth2RequiredPostResponse: boolean;
    public optionalClaims: ApplicationOptionalClaims | null;
    public parentalControlSettings: ApplicationParentalControlSettings | null;
    public passwordCredentials: PasswordCredential[];
    public publicClient: PublicClientApplication;
    public publisherDomain: string;
    public requiredResourceAccess: ApplicationRequiredResourceAccess[];
    public samlMetadataUrl: string | null;
    public serviceManagementReference: string | null;
    public signInAudience: string;
    public spa: ApplicationSpa;
    public tags: string[];
    public tokenEncryptionKeyId: TokenEncryptionKeyId | null;
    public web: ApplicationWeb;
    public verifiedPublisher: VerifiedPublisher;
    public servicePrincipalLockConfiguration: ApplicationServicePrincipalLockConfiguration | null;

    public defaultRedirectUri: string | null;
    public requestSignatureVerification: string | null;

    public constructor() {
        this.id = '';
        this.appId = '';
        this.appRoles = [];

        this.addIns = [];
        this.api = {
            acceptMappedClaims: null,
            knownClientApplications: [],
            oauth2PermissionScopes: [],
            preAuthorizedApplications: [],
            requestedAccessTokenVersion: null
        };
        this.applicationTemplateId = null;
        this.certification = null;
        this.createdDateTime = '';
        this.deletedDateTime = null;
        this.description = null;
        this.disabledByMicrosoftStatus = null;
        this.displayName = '';
        this.groupMembershipClaims = null;
        this.identifierUris = [];
        this.info = {
            logoUrl: null,
            marketingUrl: null,
            privacyStatementUrl: null,
            supportUrl: null,
            termsOfServiceUrl: null
        };
        this.isDeviceOnlyAuthSupported = null;
        this.isFallbackPublicClient = null;
        this.keyCredentials = [];
        this.notes = null;
        this.oauth2RequiredPostResponse = false;
        this.optionalClaims = null;
        this.parentalControlSettings = null;
        this.passwordCredentials = [];
        this.publicClient = {
            redirectUris: []
        };
        this.publisherDomain = '';
        this.requiredResourceAccess = [];
        this.samlMetadataUrl = null;
        this.serviceManagementReference = null;
        this.signInAudience = '';
        this.spa = {
            redirectUris: []
        };
        this.tags = [];
        this.tokenEncryptionKeyId = null;
        this.web = {
            homePageUrl: null,
            logoutUrl: null,
            redirectUris: [],
            implicitGrantSettings: {
                enableAccessTokenIssuance: false,
                enableIdTokenIssuance: false
            },
            redirectUriSettings: []
        };
        this.verifiedPublisher = {
            displayName: '',
            verifiedPublisherId: '',
            addedDateTime: ''
        };
        this.servicePrincipalLockConfiguration = null;

        this.defaultRedirectUri = null;
        this.requestSignatureVerification = null;
    }
}

