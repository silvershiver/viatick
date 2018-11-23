import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import reducers from '../reducers';
import * as storage from 'redux-storage';
import createEngine from 'redux-storage-engine-reactnativeasyncstorage';
import createSagaMiddleware from 'redux-saga';
import sagas from '../sagas';
import devTools from 'remote-redux-devtools';
import thunk from "redux-thunk";

const isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;

const loggerMiddleware = createLogger({
  predicate: (getState, action) => isDebuggingInChrome,
  collapsed: true,
  duration: true,
  diff: true,
});

export default function configureStore(onComplete) {

  const engine = createEngine('iDynasty');
  const storeMiddleware = storage.createMiddleware(engine);
  const sagaMiddleware = createSagaMiddleware();

  let store = createStore(
    storage.reducer(reducers), //Apply redux-storage so we can persist Redux state to disk
    compose(
      applyMiddleware(
        thunk,
        sagaMiddleware,
        storeMiddleware,
        loggerMiddleware,
      ),
      devTools(),
    ),
  );

  if (isDebuggingInChrome) {
    window.store = store;
  }

  const load = storage.createLoader(engine);
  load(store)
    .then(onComplete)
    .catch(() => console.log('Failed to load previous state'));

  sagaMiddleware.run(sagas);

  return store;
}
