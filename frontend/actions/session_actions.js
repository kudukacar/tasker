import * as APIUtil from '../util/session_api_util';

export const RECEIVE_USER = "RECEIVE_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveUser = (user) => ({
    type: RECEIVE_USER,
    user
});

export const logoutUser = () => ({
    type: LOGOUT_USER
});

export const receiveErrors = (errors) => {
   return {
    type: RECEIVE_ERRORS,
    errors
    }
}

export const signup = user => dispatch => {
    return APIUtil.signup(user).then((user_rsp) => dispatch(receiveUser(user_rsp)), (errors) => dispatch(receiveErrors(errors.responseJSON)));
};

export const login = user => dispatch => {
    return APIUtil.login(user).then((user_rsp) => dispatch(receiveUser(user_rsp)), (errors) => {
        return dispatch(receiveErrors(errors.responseJSON))
    })
};

export const logout = () => dispatch => {
    return APIUtil.logout().then(() => dispatch(logoutUser()));
};