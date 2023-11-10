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
curl localhost:8080/warehouse/6b390fbf-f42f-4789-b9b0-fc021c1a1139
```

### Create a product

```
curl --header "Content-Type: application/json" \
 --request POST \
 --data '{"id":"6b390fbf-f42f-4789-b9b0-fc021c1a1139"}' \
 http://localhost:8080/warehouse/product
```
