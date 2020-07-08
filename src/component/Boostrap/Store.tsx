import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from '../../reducer';
import sagas from '../../sagas';

export const Store: React.FunctionComponent = ({ children }) => {
  const sagaMiddleware = createSagaMiddleware();

  let middleware = applyMiddleware(sagaMiddleware);
  middleware = composeWithDevTools(middleware);
  const store = createStore(rootReducer, {}, middleware);
  
  sagaMiddleware.run(sagas);

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
