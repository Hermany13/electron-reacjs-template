// #region 
import { BrowserWindow } from 'electron';

import * as path from 'path';

import env from './loadEnv';
// #endregion

let mainWindow: Electron.BrowserWindow;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600
  });

  mainWindow.loadURL(
    env.electron.isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`
  );

  // App adjusts
  mainWindow.maximize();
  mainWindow.setMenuBarVisibility(false);

  // Window events
  mainWindow.on('close', () => mainWindow = null);
}

export default createWindow;