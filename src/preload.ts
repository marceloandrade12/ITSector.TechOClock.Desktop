// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.

import { ipcRenderer, contextBridge } from "electron";

enum BRIDGE_ACTIONS {
  OPEN_CONTACTS = "OPEN_CONTACTS",
  OPEN_LOCATION = "OPEN_LOCATION",
}

contextBridge.exposeInMainWorld("electron", {
  openContacts: () => ipcRenderer.invoke(BRIDGE_ACTIONS.OPEN_CONTACTS),
  openLocation: () => ipcRenderer.invoke(BRIDGE_ACTIONS.OPEN_LOCATION),
});
