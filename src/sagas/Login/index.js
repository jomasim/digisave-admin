import { call, put, takeLatest } from 'redux-saga/effects';
import { NotificationManager } from 'react-notifications';
import api from '../../utils/api';
import * as types from '../../actions/Login/types';


export function* loginWorker({ payload }) {
    try {
        const response = yield call(api.userLogin, { user: payload });
        const token = response ? response.data.user.token: ''
        localStorage.setItem('ACCESS_TOKEN', token)
        yield put({
            type: types.LOGIN_SUCCESS,
            payload: {
                isLoggedin: true,
            }
        });
        NotificationManager.success('Login successful!', 'Success message', 5000);
    } catch (error) {
        const errorMessage = error.message || 'Something went wrong!'
        NotificationManager.error(errorMessage, 'Error message', 5000);
        yield put({
            type: types.LOGIN_FAILURE
        });
    }
};

export default function* loginWatcher() {
    yield takeLatest(types.LOGIN_REQUEST, loginWorker);
}