// #region 
import { app } from 'electron';
import createWindow from './window';

// import dotenv from 'dotenv';
// #endregion

// App events
app.on('ready', () => createWindow())

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});