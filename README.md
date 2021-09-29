# amazon-cognito
Repository for describing how to use Amazon Cognito

## Preparation
```sh
brew install jq
```

## Create User Pool named `test-user-pool`
```sh
aws cognito-idp create-user-pool --pool-name test-user-pool > create_user_pool.json
```

## Display User Pool ID
```sh
cat create_user_pool.json | jq -r .UserPool.Id
```

## Create User Pool Client named `test-user-pool-client`
```sh
aws cognito-idp create-user-pool-client --user-pool-id {USER_POOL_ID} --client-name test-user-pool-client > create_user_pool_client.json
```

## Display User Pool Client ID
```sh
cat create_user_pool_client.json | jq -r .UserPoolClient.ClientId
```

## Register User named `tester`
```sh
aws cognito-idp sign-up --client-id {CLIENT_ID} --username tester --password t8stP@ssw0rd
```

