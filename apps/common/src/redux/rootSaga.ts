import { all } from 'redux-saga/effects';
import appRootSaga from './appRoot/saga';

function* rootSaga() {
    yield all([
        appRootSaga(),
    ]);
}

export default rootSaga;
