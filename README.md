<!-- <a href="#"><img src=https://github.com/vineeshvk/chat-app-flutter/blob/master/assets/icon/logo.png width=80></a> -->

# Community Server

It's is an Apollo Graphql Server created using typescript which uses postgres as it's database. and is deployed in heroku using docker container.

https://.herokuapp.com

## Client

### Flutter app

<!-- Checkout the flutter client [Chat app flutter](https://github.com/vineeshvk/chat-app-flutter) -->


## Features

- signup and signin
- create individual and group chats and delete them
- view and add messages
- notification
- instant messages(subscriptions using websocket)

## Tools used

- [TypeScript](https://www.typescriptlang.org/)
- [Typeorm](http://typeorm.io/#/)
- [Apollo Server(Graphql)](https://www.apollographql.com/docs/apollo-server/)
- [Postgres](https://www.npmjs.com/package/pg)
- [Docker](https://www.docker.com/)
- [Heroku](https://www.heroku.com/)
- [Firebase Cloud Messaging](https://firebase.google.com)


## How to run

## Additional Info

The firebase Admin SDK has to be put in the ./config folder 

# To generate a private key file for your service account:
  1. In the Firebase console, open Settings > Service Accounts.
  2. Click Generate New Private Key, then confirm by clicking Generate Key.
  3. Securely store the JSON file containing the key.

Modify the DockerFile edit line 24 , change greenhorizon-techb-firebase-adminsdk-ak4qz-977ec5d796.json to the new json you imported

Add a .env file


### Normal

you have to run your postgres server at PORT 5432 then

```
npm install
```

```
npm start
```

### With Docker

first install [docker](https://docs.docker.com/install/#supported-platforms) and [docker-compose](https://docs.docker.com/compose/install/#install-compose)

```
docker-compose up
```

in the project directory.
then open **http://localhost:3350** in your web browser