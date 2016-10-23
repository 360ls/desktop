'use strict';

const {app, BrowserWindow} = require('electron'); // accomplishes the same as the following
	/* 
		Accomplishes the same as the following:
			var electron = require('electron');
			var app = electron.app;
			var BrowserWindow = electron.BrowserWindow; 
	*/

var mainWindow = null;

app.on('ready', function() {
    mainWindow = new BrowserWindow({
        height: 500,
        width: 800
    });

    // Loads the index.html file via navigation from the current directory
    mainWindow.loadURL('file://' + __dirname + '/app/index.html');
});
