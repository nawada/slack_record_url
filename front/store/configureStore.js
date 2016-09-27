import { createStore, applyMiddleware } from 'redux';
import rootReducers from '../reducers/Reducers';
import saga from 'redux-saga';
import rootSaga from '../sagas/Saga';

export default function configureStore(initialState) {
  const sagaMiddleware = saga();
  const store = createStore(
    rootReducers,
    initialState,
    applyMiddleware(sagaMiddleware),
  );
  sagaMiddleware.run(rootSaga);

  return store;
}
