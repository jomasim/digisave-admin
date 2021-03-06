
import { LOGIN_REQUEST, LOGIN_FAILURE, LOGIN_SUCCESS, LOG_OUT } from './types';

export const loginUser = payload => ({
    type: LOGIN_REQUEST,
    payload,
});

export const loginSuccess = payload => ({
    type: LOGIN_SUCCESS,
    payload,
});

export const loginFailure = payload => ({
    type: LOGIN_FAILURE,
    payload,
});
export const logOut = () => ({
    type: LOG_OUT,
});
