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
curl localhost:8080/warehouse/cc2c630c-8ea8-44e9-9ea2-f2f1b07d3dc4
```

## TODO

- unit test handler functions
