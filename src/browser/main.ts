// #region Imports
// Electron
import { app } from 'electron';
import createWindow from './window';
import browserExtensions from './extensions';

// Env vars
import env from './loadEnv';
// #endregion

// #region App events
app.on('ready', () => {
  if (env.electron.isDev) {
    browserExtensions.install();
  }
  createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
// #endregion