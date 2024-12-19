# Simple task manager in React and Node

## Run API

First create the .env file for backend

### Using Docker

Requires MONGO_USERNAME, MONGO_PASSWORD, MONGO_URL_DOCKER and MONGO_URI_APP.
MONGO_URL_DOCKER uses '@mongo' as host name and MONGO_URI_APP uses '@localhost' as host name.

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
    "id":"",
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
        "id":"",
        "name": "taskName",
        "description": "Your task details",
    }
]
```

### Delee task

Endpoint: /task/{id}
Method: DELETE
Body: No body

Response:
Status: 204 No content
