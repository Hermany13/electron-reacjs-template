"use strict";
exports.__esModule = true;
// #region 
var electron_1 = require("electron");
var window_1 = require("./window");
// import dotenv from 'dotenv';
// #endregion
// App events
electron_1.app.on('ready', function () { return window_1["default"](); });
electron_1.app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        electron_1.app.quit();
    }
});
