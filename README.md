# Reference Hexagonal architecture

A sample Hexagonal architecture

[Hexagonal Architecture concepts](concepts.md)

## Building and Running

    npm i
    npm run test
    npm run start:db
    npm run build
    npm login

## Dev mode

    npm run start:dev

## Sample requests

### Create a warehouse

```
curl --header "Content-Type: application/json" \
 --request POST \
 --data '{"capacity":"43"}' \
 http://localhost:8080/warehouse
```

### Retrieve a warehouse

```
curl localhost:8080/warehouse/ecb2c07a-8adb-4403-8884-ce13084fbdaf
```

### Create a product

```
curl --header "Content-Type: application/json" \
 --request POST \
 --data '{"id":"ecb2c07a-8adb-4403-8884-ce13084fbdaf"}' \
 http://localhost:8080/warehouse/product
```
