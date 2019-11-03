# Browser process

The browser process is responsable for create a electron window and manage "backend" methods expose this from remote.

In this template we have the following division:

- **Window**

  The file **window.ts** is responsable to create electron window browser. In this file we can change the window size, menus, and others things.


- **Main**

  The file **main.ts** is responsable to start electron app. This file import the window created for previous file.

- **Extensions**

  The file **extetions.ts** allow install some extensions in electron browser devtools.

- **Load Env**

  The file **loadEnv.ts** is used for group all environment variables.

- **Remote**

  The file **remote.ts** export some methods from main process to renderer process.