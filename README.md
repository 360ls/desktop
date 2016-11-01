# 360ls-desktop

[![Build Status](https://travis-ci.org/LukeJFernandez/360ls-desktop.svg?branch=master)](https://travis-ci.org/LukeJFernandez/360ls-desktop)

The 360ls desktop Electron application and dependencies.

## Pre-requisites

The `360ls` application is built using [Electron](http://electron.atom.io/apps/) using
[React](https://facebook.github.io/react/) and [Redux](http://redux.js.org/).
For package management, we use the [Yarn](https://yarnpkg.com/) package manger.
For bundling our application we use [Browserify](http://browserify.org/) and
[Watchify](https://github.com/substack/watchify).

```bash
npm install -g yarn
npm install -g watchify
npm install -g browserify
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

[ESlint](http://eslint.org/) is used to lint `js`/`jsx` files under the
`app` directory using the `React` style guide from
[Airbnb](https://github.com/airbnb/javascript/blob/master/react/README.md).

To lint run the following command:

```bash
yarn run lint
```
