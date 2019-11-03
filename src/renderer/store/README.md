# Redux Store

This template use redux store for save application state and share this for all components.

The redux store use a two improvements, see below:

- Duck pattern:

  This is a structure pattern where all logic of module is inside in unique file, in other words the actions and reducers is not more separated.

- Redux sauce:

  This is a lib that allow write less code using redux. In the duck pattern it's very good because reduce a lot of code lines.

---

## Structure of redux in this project

```
├── ducks
│  ├── index.ts
│  └── module
│     ├── index.ts
│     └── interfaces.ts
├── index.ts
├── interfaces.ts
│
└── README.md
```

- ducks
    - index.ts: This file contains all reducers separated by folders in this same directory
    - module: This folder is a module in redux
        - index.ts: The actions and reducers using the redux sauce lib
        - types.ts: Common types used for this module
- index.ts: Create the redux store
- interfaces: This folder contains common interface used by redux store
    - index.ts: This file have all modules interfaces and others redux interfaces centralized in a unique file

**Creating a new module:**

First, create a new folder inside of ducks folder, for example "users" with index.ts and types.ts files.

Lastly you need add you new module inside of `ducks/index.ts` to combine reducers.

Now your module is ready for use, you only need connect your components in redux store using the `connect` method of redux lib.
