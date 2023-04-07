import { all } from 'redux-saga/effects';
import dashboardSga from './dashboard/saga';

function* rootSaga() {
    yield all([
        dashboardSga(),
    ]);
}

export default rootSaga;
