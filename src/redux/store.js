import { createStore, applyMiddleware, compose } from 'redux'
import logger from 'redux-logger';
import rootReducer from './reducers/root-reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/root-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware();

let middlewares = [sagaMiddleware];

if(process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

export const store =  createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));
sagaMiddleware.run(rootSaga);
