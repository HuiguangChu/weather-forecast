import { applyMiddleware, combineReducers, configureStore, StoreEnhancer } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from 'common/redux/rootSaga';
import { dashboardReducer } from "common/redux/dashboard/reducer";

const reducer = combineReducers({ dashboard: dashboardReducer});
const sagaMiddleware = createSagaMiddleware();
const middlewares: any = [ sagaMiddleware];

export const store = configureStore({
    reducer,
    enhancers: [applyMiddleware(...middlewares)] as ReadonlyArray<StoreEnhancer>
});

sagaMiddleware.run(rootSaga);
