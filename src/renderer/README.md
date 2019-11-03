# Renderer process

The renderer process is responsable for create the "frontent" layer off electron app. Remember, you can still use O.S. functions.

In this template the renderer process use ReactJS for render web content.

---

## Directory structure

- **components**

  Components that can be used anywhere in the application. In other words is a directory for global components.

- **pages**

  The application screens, yes we have components inside this directory but they are of type **"container"** and is specific for each screen of application.

- **routes**

  The application routes are write in this directory. See more inside of this directory.

- **store**

  The redux store implementation is write here. See more inside of this directory.

- **utils**

  Utils directory have some methods used by applications. For example: shortcuts, context menus and others.

---

## Libraries and resources

The ReactJS implementation use some libraries, are they:

- **Redux**

  The redux store is a state management center. In this template it's used for control some app features. See more inside `store/` and `store/ducks/module`.

- **React Router**

  The **react router* control page switch. Each route is a screen and in this template we have the control of which route will be public or private. See more inside `routes/`.