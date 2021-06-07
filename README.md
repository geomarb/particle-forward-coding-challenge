# Particle Forward Coding Challenge

This project was a code challenge proposed from Particle Forward

It consists of a web app and its car that shows a single car with thumbnails
and a larger photo size that is showed by clicking in the thumbnails

# Server API (REST)

## `/server`

## Environment variables

### Recommended, but not mandatory, env vars: 

```
PORT=3080
NODE_ENV=development
HOSTNAME=http://localhost
```

If you are using VS Code you can install REST Client plugin and test the requests
in the VSCode environment. In this case these env vars are mandatory to run these
request in `/server/src/httpRequests/carRequest.http.rest`.

## Available Scripts on SERVER

In the directory `/server/`, you can run:

### `npm start`
Runs the app in the development mode.\

### `npm run dev`
Runs the app in the development mode with nodemon.\

If you want to run the whole project you need first follow the instructions above.


# Web App

## `/web`

## Environment variables

### `REACT_APP_API_URL` is a mandatory env var to run this app. Follow a localhost example to use in `.env` file placed in `/web/.env`

```
REACT_APP_API_URL=http://localhost:3080
```
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

# Docs

## `/docs`

Here you will find the PDF with the proposed challenge.

# Some considerations

### In the wireframe there are some details from thumbnails, the ones in left side. More information is needed to implement it.

### In the wireframe there are some details in the title saparete "/". More information is needed to implement it.

### The JSON file has much more information than what was need, and there is no request about extra data it was cut in the server side. In this way the frontend will have access to just what it needs. In this way we avoid unnecessary data traffic.
