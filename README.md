# amazon-cognito
Repository for describing how to use Amazon Cognito

## I. Prepare
### Install [jq (Lightweight and flexible command-line JSON processor)](https://stedolan.github.io/jq/)
```sh
brew install jq
```

&nbsp;

## II. Setup
### Create User Pool named `test-user-pool`
```sh
aws cognito-idp create-user-pool --pool-name test-user-pool > create-user-pool.json
```

### Display User Pool ID
```sh
cat create-user-pool.json | jq -r .UserPool.Id
```

### Create User Pool Client named `test-user-pool-client`
```sh
aws cognito-idp create-user-pool-client --user-pool-id {USER_POOL_ID} --client-name test-user-pool-client \
--explicit-auth-flows "ALLOW_REFRESH_TOKEN_AUTH" "ALLOW_ADMIN_USER_PASSWORD_AUTH" > create-user-pool-client.json
```

### Display User Pool Client ID
```sh
cat create-user-pool-client.json | jq -r .UserPoolClient.ClientId
```

### Register User named `tester`
```sh
aws cognito-idp sign-up --client-id {CLIENT_ID} --username tester --password t8stP@ssw0rd
```

### Confirm Registered User named `tester`
```sh
aws cognito-idp admin-confirm-sign-up --user-pool-id {USER_POOL_ID} --username tester
```

&nbsp;

## III. Authenticate
### Initiate Authentication for `tester`
```sh
aws cognito-idp admin-initiate-auth \
    --user-pool-id {USER_POOL_ID} \
    --client-id {CLIENT_ID} \
    --auth-flow "ADMIN_USER_PASSWORD_AUTH" "USER_SRP_AUTH" \
    --auth-parameters USERNAME=tester,PASSWORD=t8stP@ssw0rd \
    > admin-initiate-auth.json
```

### Display ID Token
```sh
cat admin-initiate-auth.json | jq -r .AuthenticationResult.IdToken
```
