const { app, BrowserWindow } = require('electron');

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
  });

  mainWindow.loadURL('https://instacloud-web.vercel.app/'); // Remplacez cette URL par celle de votre application Next.js

  mainWindow.on('closed', () => {
    app.quit();
  });
};

app.whenReady().then(() => {
  createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});