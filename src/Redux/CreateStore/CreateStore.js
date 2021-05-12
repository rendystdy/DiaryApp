import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import reduxLogger from 'redux-logger'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Login } from '../Reducers/Login/LoginReducer.js'
import { Notes } from '../Reducers/Notes/NotesReducer.js'

const middleware = [thunk]

if (process.env.NODE_ENV === 'development') {
  middleware.push(reduxLogger)
}

const appReducer = combineReducers({
  login: Login,
  notes: Notes,
})

const rootReducer = (state, action) => {
//   if (action.type === LOGOUT) {
//     state = undefined
//   }
  return appReducer(state, action)
}

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(persistedReducer, applyMiddleware(...middleware))
const persiststore = persistStore(store)

export { store, persiststore }
