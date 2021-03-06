import { contextBridge, ipcRenderer } from 'electron';

// Bridge is a "middleware" between ipcMain and ipcRenderer.

export const bridge = {
  // Example of handling with events. see electron/MainProcess.ts for more.

  ping: () => {
    ipcRenderer.send('env');

    // Listen to event reply.
    ipcRenderer.on('env', (event, data: string) => {});
  },

  on: (channel: string, callback: Function) => {
    ipcRenderer.on(channel, (_, data) => callback(data));
  },
};

contextBridge.exposeInMainWorld('Bridge', bridge);
