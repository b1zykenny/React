import { applyMiddleware, createStore } from 'redux';
import { messagesReducer } from './store/reducer/messagesReducer';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage
}

/* const thunk = store => next => action => {
    if (typeof action === 'function') {
        return action(store.dispatch, store.getState())
    }
    return next(action)
} */

const persistedReducer = persistReducer(persistConfig)

export const store = createStore(persistedReducer, applyMiddleware(thunk))

export const persistor = persistStore(store)
