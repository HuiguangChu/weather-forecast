import { all, takeLatest } from 'redux-saga/effects';
import { CounterActionTypes } from './actions';

function* callIncreaseCounter(): any {
    // can do some api call or yield put another action
    console.log('click increase');
    yield null;
}

function* callDeCreaseCounter() {
    // can do some api call or yield put another action
    console.log('click decrease');
    yield null;
}
function* watchCounterIncreaseClick() {
    yield takeLatest(CounterActionTypes.INCREASE_COUNTER, callIncreaseCounter);
}

function* watchCounterDeCreaseClick() {
    yield takeLatest(CounterActionTypes.DECREASE_COUNTER, callDeCreaseCounter);
}

function* counterSaga() {
    yield all([
        watchCounterIncreaseClick(),
        watchCounterDeCreaseClick(),
    ]);
}

export default counterSaga;
