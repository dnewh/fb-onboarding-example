import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { makeMainRoutes } from './routes';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'
import Callback from './components/js/Callback'

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

let store = createStore(persistedReducer);
let persistor = persistStore(store);

const routes = makeMainRoutes();

ReactDOM.render(<Provider store={store}><PersistGate loading={<Callback />} persistor={persistor}>{routes}</ PersistGate></Provider>, document.getElementById('root'));
registerServiceWorker();
