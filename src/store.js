import {applyMiddleware, compose, createStore } from 'redux';
import {commonRootReducer} from './rootReducer';
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/rootSaga";
const sagaMiddleware = createSagaMiddleware();

function configureStore() {
  // __REDUX_DEVTOOLS_EXTENSION_COMPOSE__ is available if extension is present
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const appStore = createStore(
    commonRootReducer,
     composeEnhancers(applyMiddleware(sagaMiddleware)),
  );
  appStore.runSagaTask = () => {
    appStore.sagaTask = sagaMiddleware.run(rootSaga);
  };
  appStore.runSagaTask();
  return appStore;
}

const store = configureStore();

export default store;
