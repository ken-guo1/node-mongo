## Node.js and MongoDB

There are two different ways to run this demo

Please follow the guide.

## Prerequisite

1. Make sure you have docker and docker-compose installed if the app is running in docker.
2. Make sure you have latest stable version of node installed if the app is running in the local.
3. Make sure you have mongo installed if the app is running in the local.

### Option 1: Local

run following command in terminal / power shell

```
npm install
npm start
```

### Option 2: Docker

## Prerequisite

Make sure you have [docker](https://docs.docker.com/install/) and [docker-compose](https://docs.docker.com/compose/install/) installed on you machine.

1. `create a .env file copy content from .env.docker and do not make any change`
2. `docker-compose up`

run following command in terminal / power shell

```
docker-compose up -d
```

When containers are up, there should be an empty db in Mongo container called xero. Please created necessary documents over the api endpoints.


### Links

For app running in Docker: open browser/postman and check the following address 

`http://localhost:8000/api/products`

For app running in Local: open browser/postman and check the following address 

`http://localhost:8080/api/products`

### Endpoints:

1. `GET /products` - gets all products.
2. `GET /products?name={name}` - finds all products matching the specified name.
3. `GET /products/{id}` - gets the project that matches the specified ID - ID is a GUID.
4. `POST /products` - creates a new product.
5. `PUT /products/{id}` - updates a product.
6. `DELETE /products/{id}` - deletes a product and its options.
7. `GET /products/{id}/options` - finds all options for a specified product.
8. `GET /products/{id}/options/{optionId}` - finds the specified product option for the specified product.
9. `POST /products/{id}/options` - adds a new product option to the specified product.
10. `PUT /products/{id}/options/{optionId}` - updates the specified product option.
11. `DELETE /products/{id}/options/{optionId}` - deletes the specified product option.

