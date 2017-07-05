import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import App from './App';
import './index.css';

const initialState = [
  'Smells like spirit',
  'Enter Sandman',
];

function playlist(state = initialState, action) {
  if (action.type === 'ADD_TRACK') {
    return [
      ...state,
      action.payload,
    ];
  }
  return state;
}

const store = createStore(playlist);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
