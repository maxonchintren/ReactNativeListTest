import React from 'react'
import { store } from './src/store/store'
import { Provider as SettingsProvider } from './src/helpers/SettingsContext'
import { Provider } from 'react-redux'
import AppRouter from './src/router/AppRouter'

const App = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  )
}

export default App
