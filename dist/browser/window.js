"use strict";
exports.__esModule = true;
// #region 
var electron_1 = require("electron");
// import path from 'path';
// import dotenv from 'dotenv';
// #endregion
var createWindow = function () {
    var mainWindow = new electron_1.BrowserWindow({
        width: 800,
        height: 600
    });
    mainWindow.loadURL('www.github.com');
    // App adjusts
    mainWindow.setMenuBarVisibility(false);
    // Window events
    mainWindow.on('close', function () { return mainWindow = null; });
};
exports["default"] = createWindow;
