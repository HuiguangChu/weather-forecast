import { all } from 'redux-saga/effects';
import dashboardSga from './appRoot/saga';

function* rootSaga() {
    yield all([
        dashboardSga(),
    ]);
}

export default rootSaga;
