import { app, BrowserWindow, ipcMain } from "electron";
import * as path from "path";
import { execFile } from "child_process";

function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: true,
      contextIsolation: true,
    },
    width: 800,
    center: true,
    show: false,
    title: "ITSector Tech O'Clock Desktop App",
  });

  mainWindow.loadURL("https://itsector-tech-o-clock-web.vercel.app/");

  mainWindow.once("ready-to-show", () => {
    mainWindow.show();
    //
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", () => {
  createWindow();

  app.on("activate", function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

// In this file you can include the rest of your app"s specific main process
// code. You can also put them in separate files and require them here.

// BRIDGE LISTENER METHODS

ipcMain.handle("OPEN_CONTACTS", async () => {
  //
});

ipcMain.handle("OPEN_LOCATION", async () => {
  // open google maps app
  execFile("C:\\Program Files\\Google\\Chrome\\Application\\chrome_proxy.exe", [
    "--profile-directory=Default",
    "--app-id=fbdfdldfleefkdfhpemofdggdlmkoama",
  ]);
});
