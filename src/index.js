import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const initialState = {
  contacts: [
    {
      name: 'Andrey'
    },

    {
      name: 'Gleb'
    },

    {
      name: 'Michail'
    }
  ],
  isActive: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'addContact':
      return '';
    default:
      return state
  }
}

const store = createStore(reducer)

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

