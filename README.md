# Electron template

---

## in this template

- Browser
    - Electron (with Typescript)
    - Electron extesions (Devtools for React)
    - Sequelize for sqlite integration

- Renderer
    - ReactJS (with Typescript)
    - React Router Dom
    - React Redux
    - Ant Design

---

## how install

First clone this repository:

- `https://github.com/chsjr1996/electron-template-app.git`

Use `yarn` to install all deps.

> Note: Until now this project require yarn, but it's possible change the `package.json` file for use npm.

> Note: After install deps the package.json will try rebuild native modules. For now, the only file that need to be rebuild is **sqlite3**.

For execute this project run:

- `yarn dev`

> Note: For now only this command is available. It's open electron app in development mode, so changes in ReactJS files will reload web content and changes in any file inside `src/browser` will restart the electron app.

---

## inside src directory

The electron app can be divided in two parts, the `browser` process (or main) and the `renderer` process.

See more in `src/`

---

## inside the package.json file

- **rescripts/cli:**

  Allow use custom webpack for ReactJS development server, in this template it's required for allow O.S. (browser side) calls in renderer process (for example: Sequelize methods).


- **concurrently**

  Allow run multi process in same time.


- **tsc / tsc-watch**

  - **tsc**

    Used only for compile contents inside `src/browser`

  - **tsc-watch**

    Used for compile and watch contents inside `src/browser`. Every changes in any file will restart electron app.

- **cross-env**

  Allow use environment variables in every O.S.

- **wait-on**

  Used for wait ReactJS development server in localhost:3000, after this ready then execute the next command (see below).

- **node require 'dotenv/config' scripts/start-dev.js**

  The first is require 'dotenv/config', is the same as using `require('dotenv').config` inside files, but browser files use es6 syntax and **dotenv** file can't be used in this way.

  After load all env vars, then execute `scripts/start-dev.js` that is a script for spawn electron process.

---

## rescripts and webpack

In this template we have custom webpack for ReactJS development server. Because this, we need of rescripts library for run the server with a custom webpack.

The current webpack have two main configurations `target` and `externals`

- externals: Expose external libraries to run with ReactJS.

---

## tsconfig files

We have two tsconfig files, one for renderer process (ReactJS) and other for browser process. It's necessary because some rules for ReactJS can't be applied for browser, like **module** that in browser side allow use **commonjs** but in renderer it's **es6**. Besides that the tsconfig.browser.json indicate where Typescript compiler must leave js files of browser directory.

---

## Under development

If you detect any problems, please feel free to open an issue.

See current development [here](https://github.com/chsjr1996/electron-template-app/projects/1).