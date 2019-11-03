import { remote } from 'electron';
import * as nodeFs from 'fs';

export const fs: typeof nodeFs = remote.require("fs");