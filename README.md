# 360ls-desktop

[![Build Status](https://travis-ci.org/LukeJFernandez/360ls-desktop.svg?branch=master)](https://travis-ci.org/LukeJFernandez/360ls-desktop)

The 360ls desktop Electron application and dependencies.

## Pre-requisites
`yarn` is used to install local and global dependencies.
```bash
npm install -g yarn
```

`watchify` is used to watch for any source file changes
and rebuild the app. 

```bash
npm install -g watchify
```

`browserify` enables the use of require statements in-browser.

```bash
npm install -g browserify
```

`Electron` is used to package and run the application:

```bash
npm install -g electron
```

Install dependencies:

```bash
yarn install
```

## Running

Start the watcher:

```bash
yarn run watch
```

Then start the app with electron:

```bash
yarn start
```

## Linting

`eslint` is used to lint `js`/`jsx` files under the
`app` directory using the `React` style guide from
[Airbnb](https://github.com/airbnb/javascript/blob/master/react/README.md).

To lint run the following command:

```bash
yarn run lint
```
