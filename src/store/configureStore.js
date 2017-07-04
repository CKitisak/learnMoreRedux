import { applyMiddleware, createStore, compose } from 'redux'
import { createLogger } from 'redux-logger'
import reducers from '../reducers'

const configureStore = (initialState) => {
  let middlewares = []

  if (__DEV__) {
    let logger = createLogger({ collapsed: true })
    middlewares.push(logger)
  }

  return createStore(reducers, initialState, applyMiddleware(...middlewares))
}

export default configureStore
