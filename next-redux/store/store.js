import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from './reducers'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const initialState = {}
const middleware = [thunk]

// const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));


export default () => {
    // let store = createStore(persistedReducer)

    const store = createStore(persistedReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));
    let persistor = persistStore(store)
    return { store, persistor }
}
// export default store