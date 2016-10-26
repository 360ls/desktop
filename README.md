# 360ls-desktop

The 360ls desktop Electron application and dependencies.

## Pre-requisites

`watchify` is used to watch for any source file changes
and rebuild the app. 

```bash
npm install -g watchify
```

`Electron` is used to package and run the application:

```bash
npm install -g electron
```

Install dependencies:

```bash
npm install
```

## Running

Start the watcher:

```bash
npm run watch
```

Then start the app with electron:

```bash
npm start
```

## Linting

`eslint` is used to lint `js`/`jsx` files under the
`app` directory using the `React` style guide from
[Airbnb](https://github.com/airbnb/javascript/blob/master/react/README.md).

To lint run the following command:

```bash
npm run lint
```
