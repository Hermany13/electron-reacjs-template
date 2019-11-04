import { remote } from 'electron';
import UsersController from './api/controllers/UsersController';
import * as nodeFs from 'fs';

// NodeJS
export const fs: typeof nodeFs = remote.require("fs");

// Controllers
type IUsersController = { default: typeof UsersController };
export const Users: IUsersController = remote.require("./api/controllers/UsersController")
