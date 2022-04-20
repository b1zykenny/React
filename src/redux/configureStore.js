import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { messagesReducer } from './reducer/messagesReducer';

export const store = createStore(messagesReducer, composeWithDevTools())
