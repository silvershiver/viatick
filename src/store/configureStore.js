import { createStore, applyMiddleware } from 'redux'
import reducer from '../reducers'

import createSagaMiddleware from 'redux-saga'
import dataSaga from '../sagas'

const sagaMiddleware = createSagaMiddleware()

export default function configureStore() {
  const store = createStore(reducer, applyMiddleware(sagaMiddleware))
  sagaMiddleware.run(dataSaga)
  return store
}