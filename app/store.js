/**
 * Create the store with asynchronously loaded reducers
 */

import { createStore, applyMiddleware, compose } from 'redux';
import { fromJS } from 'immutable';
import { createLogger } from 'redux-logger';
// import createSagaMiddleware from 'redux-saga';
import createReducer from './reducers';

const devtools = window.devToolsExtension || (() => noop => noop);

export default function configureStore(initialState = {}) {
  // Create the store with middlewares

  // Logger for redux actions and actioncreators on console
  const reduxLogger = createLogger({
    stateTransformer: state => JSON.parse(JSON.stringify(state)),
  });

  // const sagaMiddleware = createSagaMiddleware();

  const middlewares = [
    // sagaMiddleware,
    reduxLogger,
  ];

  const enhancers = [
    applyMiddleware(...middlewares),
  ];

  const store = createStore(
    createReducer(),
    fromJS(initialState),
    compose(...enhancers),
    devtools,
  );

  // Make reducers hot reloadable, see http://mxs.is/googmo
  /* istanbul ignore next */
  if (module.hot) {
    System.import('./reducers').then((reducerModule) => {
      const createReducers = reducerModule.default;
      const nextReducers = createReducers(store.asyncReducers);

      store.replaceReducer(nextReducers);
    });
  }

  // sagaMiddleware.run(rootSaga);
  // Initialize it with no other reducers
  store.asyncReducers = {};
  return store;
}
