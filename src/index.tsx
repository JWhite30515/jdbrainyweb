import * as React from 'react';

import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import App from './components/App';
import rootReducer from './redux/reducers/rootReducer';
import * as serviceWorker from './serviceWorker';
import { initialState } from './redux/state/rootState';

import './index.css';

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

render(
  (
    <Provider store={store}>
      <App />
    </Provider>
  ),
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
