import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOG_OUT } from '../../actions/Login/types';

const initialState = {
    errors: {},
    isLoading: false,
    isLoggedin: false,
};

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state, ...action.payload, errors: {}, isLoading: true, isLoggedin: false,
            };
        case LOGIN_SUCCESS:
            return {
                ...state, ...action.payload, errors: {}, isLoading: false, isLoggedin: true,
            };
        case LOGIN_FAILURE:
            return {
                ...state, ...action.payload, errors: {}, isLoading: false, isLoggedin: false,
            };
        case LOG_OUT:
                return {
                    ...state, ...action.payload, errors: {}, isLoading: false, isLoggedin: false,
                };
        default:
            return state;
    }
}
export default loginReducer;