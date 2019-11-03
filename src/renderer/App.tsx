// React main
import React from 'react';

// Redux main
import { Provider } from 'react-redux';
import store from './store';

// Routes
import Routes from './routes';

const App: React.FC = () => {
  return (
    <>
      <Provider store={store}>
        <Routes />
      </Provider>
    </>
  );
}

export default App;
