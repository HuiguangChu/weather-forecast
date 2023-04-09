import {
    applyMiddleware, combineReducers, configureStore, StoreEnhancer,
} from '@reduxjs/toolkit';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { appRootReducer } from 'common/src/redux/appRoot/reducer';
import rootSaga from 'common/src/redux/rootSaga';

const history = createBrowserHistory();
const reducer = combineReducers({ appRoot: appRootReducer, router: connectRouter(history) });
const sagaMiddleware = createSagaMiddleware();
const middlewares: any = [routerMiddleware(history), sagaMiddleware];

export const store = configureStore({
    reducer,
    enhancers: [applyMiddleware(...middlewares)] as ReadonlyArray<StoreEnhancer>,
});

sagaMiddleware.run(rootSaga);
