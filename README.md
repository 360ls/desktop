# 360ls-desktop

[![Build Status](https://travis-ci.org/360ls/desktop.svg?branch=master)](https://travis-ci.org/360ls/desktop)

This is the desktop interface for the [360ls](https://360ls.github.io/360ls/) application,
which stitches videos from 4 cameras into a single 360
video and streams them over RTMP.

## Pre-requisites

The application is targeted for the [Jetson TX1](http://www.nvidia.com/object/jetson-tx1-module.html) hardware. Before you can run the application, you'll need to provision the Jetson with pre-requisite applications and binaries. Check our [provisioning repository](https://github.com/360ls/provision) for more details.

## Installation

Download the latest armv7l zipped binary from our [releases page](https://github.com/360ls/desktop/releases).
Extract the zip and open the `360ls` executable.

## Development

### Environment Setup

Install [Node](https://nodejs.org/en/) and [Yarn](https://yarnpkg.com/).

```bash
$ npm install -g yarn
```

Install the dependencies:

```bash
$ yarn install
```

### Running a Development Build

```bash
$ npm run dev
```

This will start up the build server that bundles the application
with [webpack](https://webpack.github.io/) and start the electron application with debugging enabled.

### Linting

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

## Building Executables

```bash
$ npm run package
```
