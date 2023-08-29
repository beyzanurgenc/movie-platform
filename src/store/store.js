import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../reducers/rootReducer';

const consoleMessages = (store) => (next) => (action) => {
    const result = next(action);
    console.groupCollapsed(`Dispatching Action => ${action.type}`);
    console.log('Action payload: ', action.payload);
    console.log('Current Store State: ', store.getState());
    console.groupEnd();
    return result;
};

var globalStore = {};

const createAppStore = (initialState = {}) => {
    globalStore = configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(consoleMessages),
        preloadedState: initialState
    });
    return globalStore;
};

const storeProvider = {
    createAppStore,
    getStore() {
        return globalStore;
    }
};

export default storeProvider;