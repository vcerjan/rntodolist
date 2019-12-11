import { AsyncStorage } from 'react-native'
import { createStore, compose, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'

import { RootReducer } from './reducers/rootReducer'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [
    'todoList',
  ],
}

const persistedReducer = persistReducer(persistConfig, RootReducer)

export const store = createStore(persistedReducer, compose(applyMiddleware(thunk)))
export const persistor = persistStore(store)
