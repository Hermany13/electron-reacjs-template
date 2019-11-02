// #region 
import { BrowserWindow } from 'electron';

// import path from 'path';
// import dotenv from 'dotenv';
// #endregion

const createWindow = () => {
  let mainWindow = new BrowserWindow({
    width: 800,
    height: 600
  });

  mainWindow.loadURL('www.github.com');

  // App adjusts
  mainWindow.setMenuBarVisibility(false);

  // Window events
  mainWindow.on('close', () => mainWindow = null);
}

export default createWindow;