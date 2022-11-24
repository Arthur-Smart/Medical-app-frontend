import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { persistor, store } from './components/redux/store';
import { PersistGate } from 'redux-persist/integration/react'
import {Provider} from 'react-redux'
import { ContextProvider } from './components/SocketContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store={store}>
     <PersistGate loading={null} persistor={persistor}>
     <ContextProvider>
      <App />
      </ContextProvider>
    </PersistGate>
  </Provider>
  </React.StrictMode>
);
