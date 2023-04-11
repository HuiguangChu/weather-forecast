import {
    applyMiddleware, combineReducers, configureStore, StoreEnhancer,
    Reducer,
    Middleware,
} from '@reduxjs/toolkit';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory, History } from 'history';
import { appRootReducer } from 'common/src/redux/appRoot/reducer';
import rootSaga from 'common/src/redux/rootSaga';

const history: History = createBrowserHistory();
const reducer: Reducer = combineReducers({ appRoot: appRootReducer, router: connectRouter(history) });
const sagaMiddleware: Middleware = createSagaMiddleware();
const middlewares: Middleware[] = [routerMiddleware(history), sagaMiddleware];

export const store = configureStore({
    reducer,
    enhancers: [applyMiddleware(...middlewares)] as ReadonlyArray<StoreEnhancer>,
});

sagaMiddleware.run(rootSaga);
