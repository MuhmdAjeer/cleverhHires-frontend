import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import {legacy_createStore as createStore , compose , applyMiddleware} from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk'

import './index.scss';
import App from './App';
import reducers from './redux/reducers/index.js'

const store  = createStore(reducers,composeWithDevTools(applyMiddleware(thunk)))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Provider store={store} >
    <App />
    </Provider>
  // </React.StrictMode>
);
