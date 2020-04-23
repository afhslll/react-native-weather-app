import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import HomeScreen from '@screens/Home'
import { store, persistor } from '@store'

const App = () => {
    // console.disableYellowBox = true

    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <HomeScreen />
            </PersistGate>
        </Provider>
    )
}

export default App
