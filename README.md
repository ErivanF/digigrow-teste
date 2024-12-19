# Simple task manager in React and Node

## Libraries used

Express

Mongoose

## Run API

First create the .env file for backend

### Using Docker

Requires MONGO_USERNAME, MONGO_PASSWORD, MONGO_URL_DOCKER and MONGO_URI_APP.
MONGO_URL_DOCKER uses '@mongo' as host name and MONGO_URI_APP uses '@localhost' as host name.

Run:

```shell
docker compose up -d
```

### Using external database

Requires only MONGO_URI_APP as connection string.

```shell
cd backend
npm install
npm run dev
```

## API Routes

### Create task

Endpoint: /task
Method: POST
Body:

```JSON
{
    "name": "taskName",
    "description": "Your task details",
}
```

Response:
Status: 201 Created
Body:

```JSON
{
    "id":"6763b6939824d94e12ebf888",
    "name": "taskName",
    "description": "Your task details",
}
```

### Get tasks

Endpoint: /task
Method: GET
Body: No body

Response:
Status: 200 OK
Body:

```JSON
[
    {
        "id":"6763b6939824d94e12ebf888",
        "name": "taskName",
        "description": "Your task details",
    }
]
```

### Delete task

Endpoint: /task/{id}
Method: DELETE
Body: No body

Response:
Status: 204 No content

## Frontend

### Libraries

Vite

Styled components

### Setup

Edit API URL on ./frontend/src/Services/index.tsx

Run:

```shell
cd frontend
npm install
npm run dev
```

## Next potential updates

Front end API in .env file

Automated tests (Jest and Cypress)

Create a full Docker image in order to simplify the local development environment
