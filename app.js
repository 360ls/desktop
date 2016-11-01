'use strict';

const {app, BrowserWindow} = require('electron');
	// Accomplishes the same as the following:
	//		var electron = require('electron');
	//		var app = electron.app;
	//		var BrowserWindow = electron.BrowserWindow;

var mainWindow;

function createWindow(){
	mainWindow = new BrowserWindow({
        height: 500,
        width: 800
    });

    // Loads the index.html file via navigation from the current directory
    mainWindow.loadURL('file://' + __dirname + '/index.html');

    mainWindow.on('closed', function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
}

app.on('ready', createWindow);
