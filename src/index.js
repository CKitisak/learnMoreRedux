import React from 'react'
import { Provider } from 'react-redux'

import configureStore from './store/configureStore'
import App from './components/App'

const store = configureStore()

const learnMoreRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

export default learnMoreRedux
