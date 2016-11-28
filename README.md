# 360ls-desktop

[![Build Status](https://travis-ci.org/360ls/desktop.svg?branch=master)](https://travis-ci.org/360ls/desktop)

This is the desktop interface for the `360ls` application,
which stitches videos from 4 cameras into a single 360
video and streams them over RTMP. The `360ls` application is built
using [Electron](http://electron.atom.io/apps/) with
[React](https://facebook.github.io/react/) and [Redux](http://redux.js.org/).

## Pre-requisites

We use the [Node](https://nodejs.org/en/) runtime and [npm](https://www.npmjs.com/)
to run Electron. You can find the latest release for Node [here](https://nodejs.org/en/download/).

For package management, we use the [Yarn](https://yarnpkg.com/) package manger.
```bash
$ npm install -g yarn
```

Install the dependencies:

```bash
$ yarn install
```

## Running

```bash
$ npm run dev
```

This will start up the build server that bundles the application
with [webpack](https://webpack.github.io/) and open up the
electron application.


## Linting

[ESlint](http://eslint.org/) is used to lint `js`/`jsx` files under the
`app` and `test` directories using the `React` style guide from
[Airbnb](https://github.com/airbnb/javascript/blob/master/react/README.md).

To lint run the following command:

```bash
$ npm lint
```

## Testing

Tests are run using the [Jest](https://facebook.github.io/jest/) framework.
The following command will run the test suite defined under the `test`
directory.

```bash
$ npm test
```

# Building Executables

Run the following commands. The executables will be output to the `release` directory.

```bash
$ npm run build
$ npm run package
```
