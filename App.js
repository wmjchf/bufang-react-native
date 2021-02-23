import React from 'react';
import {Provider} from 'react-redux';
import AppContainer from './src/index.js';
import {getStore} from './src/store';

GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest;

const App = () => {
  const store = getStore();
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
};

export default App;
