import { all, fork } from 'redux-saga/effects';
import loginWatcher from './Login';

export default function* rootSaga() {
    yield all([
        fork(loginWatcher),
    ]);
}