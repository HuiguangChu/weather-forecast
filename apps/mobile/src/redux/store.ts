import {
    applyMiddleware, combineReducers, configureStore, StoreEnhancer, Reducer, Middleware,
} from '@reduxjs/toolkit';
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';
import rootSaga from 'common/src/redux/rootSaga';
import { appRootReducer } from 'common/src/redux/appRoot/reducer';

const reducer: Reducer = combineReducers({ appRoot: appRootReducer });
const sagaMiddleware: SagaMiddleware = createSagaMiddleware();
const middlewares: Middleware[] = [sagaMiddleware];

const store = configureStore({
    reducer,
    enhancers: [applyMiddleware(...middlewares)] as ReadonlyArray<StoreEnhancer>,
});

sagaMiddleware.run(rootSaga);

export default store;
