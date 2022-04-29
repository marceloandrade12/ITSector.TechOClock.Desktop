// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.

import { ipcRenderer } from "electron";

ipcRenderer.on("isDesktopApp", function (event, store) {
  console.log(store);
  (window as any).techOClock = {
    isDesktopApp: true,
  };
});
