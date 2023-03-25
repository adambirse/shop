# Reference Hexagonal architecture

A sample Hexagonal architecture

## Building and Running

    npm i
    npm run test
    npm run build
    npm login

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

- nodemon
- retrieve services from builder singleton
- refactor handler functions
- unit test handler functions

