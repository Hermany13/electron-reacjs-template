import { createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from './ducks';
import { IAppState } from './interfaces';

const store: Store<IAppState> = createStore(
  reducers,
  composeWithDevTools()
);

export default store;