## Node.js and MongoDB

There are two different ways to run this demo

Please follow the guide.

## Prerequisite

1. Make sure you have docker installed if the app is running in docker.
2. Make sure you have latest stable version of node installed if the app is running in the local.
3. Make sure you have mongo installed if the app is running in the local.

### Option 1 Local

run following command in terminal / power shell

```
npm install
npm start
```

### Option 2 Docker

## Prerequisite

Make sure you have [docker](https://docs.docker.com/install/) and [docker-compose](https://docs.docker.com/compose/install/) installed on you machine.

1. `create a .env file copy content from .env.docker and do not make any change`
2. `docker-compose up`

run following command in terminal / power shell

```
docker-compose up -d
```

when docker will finish building the containers, access the "laravel-react-app" container using following command

`docker exec -it laravel_react_app sh`

now you will be inside container

run following commands

1. `composer install && composer update`
2. `php artisan cron:refresh-database`
3. `php artisan key:gen`
4. `npm install && npm run dev`

open browser and check the following address

`http://localhost:8100`

### Page Links:

`http://localhost:8100/login`

`http://localhost:8100/names/citizen`

`http://localhost:8100/names/offical`

### API endpoints:

Login:

POST `http://localhost:8100/api/v1/auth/login`

TODO/Improvement:

- [ ] Add openAPI spec
- [ ] request case insensitive
- [ ] backend role permission middleware
- [ ] Hook to AWS
- [ ] Decouple Docker: React and Laravel
- [ ] Front End Redirect user to common page if user is not offical
- [ ] prevent multiple clicking
- [ ] API excpetion handling centralisation `https://stackoverflow.com/questions/51065170/laravel-api-how-to-properly-handle-errors`
- [ ] Tests
