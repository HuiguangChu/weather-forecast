import { applyMiddleware, combineReducers, configureStore, StoreEnhancer } from '@reduxjs/toolkit';
import { connectRouter, routerMiddleware, RouterState } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { counterReducer, CounterState } from 'common/redux/counter/reducer';
import rootSaga from 'common/redux/rootSaga';

const history = createBrowserHistory();
const reducer = combineReducers({ counter: counterReducer, router: connectRouter(history) });
const sagaMiddleware = createSagaMiddleware();
const middlewares: any = [routerMiddleware(history), sagaMiddleware];

export interface RootState {
    readonly counter: CounterState;
    readonly router: RouterState;
}

export const store = configureStore({
    reducer,
    enhancers: [applyMiddleware(...middlewares)] as ReadonlyArray<StoreEnhancer>
});

sagaMiddleware.run(rootSaga);
