const app = { 
    "displayName": "test_app_1", 
    "spa": { "redirectUris": [] }, 
    "publicClient": { "redirectUris": [] }, 
    "web": { "redirectUris": [] }, 
    "signInAudience": "AzureADMyOrg", 
    "requiredResourceAccess": 
    [
        {
            "resourceAppId": "00000003-0000-0000-c000-000000000000", 
            "resourceAccess": [
                {
                    "id": "e1fe6dd8-ba31-4d61-89e7-88639da4683d", 
                    "type": "Scope" 
                }
            ] 
        }
    ] 
}

const iduri = {
    "identifierUris":
    [
        "api://de3e445b-30b2-4a20-8522-d7f4677ecb39"
    ]
}

const scope = {
    "api":
    {
        "oauth2PermissionScopes":
        [
            {
                "adminConsentDescription":"admin consent description",
                "adminConsentDisplayName":"Read files",
                "id":"b1875e1a-4327-439e-8903-9c4bb96b5d5f",
                "isEnabled":true,
                "type":"Admin",
                "userConsentDescription":"user consent description",
                "userConsentDisplayName":"Read your files",
                "value":"files.read"
            }
        ]
    }
}

const approle = {
    "appRoles":
    [
        {
            "description":"writers write",
            "displayName":"Writers",
            "id":"82c62165-742c-4569-a308-36c881654735",
            "isEnabled":true,
            "value":"Task.Write",
            "allowedMemberTypes":
            [
                "User",
                "Application"
            ]
        }
    ]
}

const user = {
    "accountEnabled":false,
    "displayName":"Test User",
    "mailNickname":"test_user_1",
    "passwordProfile":
    {
        "password":"",
        "forceChangePasswordNextSignIn":true
    },
    "userPrincipalName":"test_user_1@dimantest.onmicrosoft.com"
}

const group1 = {"@odata.context":"https://graph.microsoft.com/beta/$metadata#groups/$entity","id":"91333ee2-d41f-4b05-9901-091354bdf504","deletedDateTime":null,"classification":null,"createdDateTime":"2023-03-26T19:59:04Z","createdByAppId":"74658136-14ec-4630-ad9b-26e160ff0fc6","organizationId":"c974785a-c681-404f-9291-caba2e3c84c5","description":null,"displayName":"foo","expirationDateTime":null,"groupTypes":[],"infoCatalogs":[],"isAssignableToRole":null,"isManagementRestricted":null,"mail":null,"mailEnabled":false,"mailNickname":"4091e0b2-1","membershipRule":null,"membershipRuleProcessingState":null,"onPremisesDomainName":null,"onPremisesLastSyncDateTime":null,"onPremisesNetBiosName":null,"onPremisesSamAccountName":null,"onPremisesSecurityIdentifier":null,"onPremisesSyncEnabled":null,"preferredDataLocation":null,"preferredLanguage":null,"proxyAddresses":[],"renewedDateTime":"2023-03-26T19:59:04Z","resourceBehaviorOptions":[],"resourceProvisioningOptions":[],"securityEnabled":true,"securityIdentifier":"S-1-12-1-2436054754-1258673183-319357337-83213652","theme":null,"visibility":null,"onPremisesProvisioningErrors":[],"writebackConfiguration":{"isEnabled":null,"onPremisesGroupType":null}}

/// https://graph.microsoft.com/beta/users?$select=id,userPrincipalName
const user1 = {
    "id": "cc08f486-74b2-490f-93c8-4c80f0c2cef7",
    "userPrincipalName": "admin@dimantest.onmicrosoft.com"
}

const group = {
    "displayName":"test_group_1",
    "mailEnabled":false,
    "mailNickname":"58e4f349-1",
    "securityEnabled":true
}

const groupOwner = {
    "id":"owner_cc08f486-74b2-490f-93c8-4c80f0c2cef7",
    "method":"POST",
    "url":"/groups/81e14446-eb30-464e-b09a-639ca9a12c58/owners/$ref",
    "headers":{"Content-Type":"application/json"},
    "body":
    {
        "@odata.id":"https://graph.microsoft.com/beta/directoryObjects/cc08f486-74b2-490f-93c8-4c80f0c2cef7"
    }
}

const addGroupMember = {
    "id":"member_81e14446-eb30-464e-b09a-639ca9a12c58_889a2529-aa0f-451b-a696-5d9e3f8d84f5",
    "method":"POST",
    "url":"/groups/81e14446-eb30-464e-b09a-639ca9a12c58/members/$ref",
    "headers":{"Content-Type":"application/json"},
    "body":
    {
        "@odata.id":"https://graph.microsoft.com/beta/directoryObjects/889a2529-aa0f-451b-a696-5d9e3f8d84f5"
    }
}

const removeGroupMember = {
    "id":"member-remove_d7154c71-27e0-4139-ba97-e017927b9516_889a2529-aa0f-451b-a696-5d9e3f8d84f5",
    "method":"DELETE",
    "url":"/groups/d7154c71-27e0-4139-ba97-e017927b9516/members/889a2529-aa0f-451b-a696-5d9e3f8d84f5/$ref"
}

// Permission Grant MS Graph API:
// https://learn.microsoft.com/en-us/graph/api/resources/oauth2permissiongrant?view=graph-rest-1.0

// AppRole Assignment MS Graph API:
// https://learn.microsoft.com/en-us/graph/api/resources/approleassignment?view=graph-rest-1.0



// AdIbizaUX API:
const appRoleAssignedTo = {
    "appRoleId":"18d14569-c3bd-439b-9a66-3a2aee01d14f",
    "resourceId":"01bbf1c4-1136-4c30-955a-5fa4cc7248b2",
    "principalId":"889a2529-aa0f-451b-a696-5d9e3f8d84f5"
}

// https://main.iam.ad.ext.azure.com/api/ManagedApplications/01bbf1c4-1136-4c30-955a-5fa4cc7248b2/AppRoleAssignments?searchText=&top=200&nextLink=&assignmentId=&fetchThumbnails=false&isInitialLoad=false
const appRoleAssignments = {
    "items":
    [
        {
            "objectId":"KSWaiA-qG0Wmll2eP42E9aT7qmToivlCgZ2h1ca0yKg",
            "id":"18d14569-c3bd-439b-9a66-3a2aee01d14f",
            "principalDisplayName":"Admin2",
            "creationTimestamp":"2023-03-26T07:34:28.0444478Z",
            "principalId":"889a2529-aa0f-451b-a696-5d9e3f8d84f5",
            "principalType":"User",
            "resourceDisplayName":"amarapp",
            "resourceId":"01bbf1c4-1136-4c30-955a-5fa4cc7248b2",
            "imageUrl":"https://main.iam.ad.ext.azure.com/Client/Users/Images/defaultUser.svg"
        }
    ],
    "nextLink":null
}