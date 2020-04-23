import { createStore, combineReducers, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import ReduxThunk from 'redux-thunk'
import AsyncStorage from '@react-native-community/async-storage'

import { weatherReducer } from '@reducers/weather'

const weatherConfig = {
    key: 'weather',
    storage: AsyncStorage,
    blacklist: [],
}

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    blacklist: [],
}

const rootReducer = combineReducers({
    weather: persistReducer(weatherConfig, weatherReducer),
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, applyMiddleware(ReduxThunk))

export const persistor = persistStore(store)