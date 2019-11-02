/**
 * Electron extesions
 */

// Devtools
import installExtension, {
  REACT_DEVELOPER_TOOLS,
  REDUX_DEVTOOLS
} from 'electron-devtools-installer';

const browserExtensions = {
  install: () => {

    // React devtools
    installExtension(REACT_DEVELOPER_TOOLS)
      .then(name => console.log(`Added Extension: ${name}`))
      .catch(err => console.log(`An error ocurred: ${err}`)),

      // Redux devtools
      installExtension(REDUX_DEVTOOLS)
        .then(name => console.log(`Added Extension: ${name}`))
        .catch(err => console.log(`An error ocurred: ${err}`))
  }
}

export default browserExtensions;