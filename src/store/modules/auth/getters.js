import { GET_USER_TOKEN_GETTER, GET_USER_GETTER, IS_USER_AUTHENTICATED_GETTER } from '../../storeconstants';
export default {
    [GET_USER_TOKEN_GETTER]: (state) => {
        return state.token;
    },
    [GET_USER_GETTER]: (state) => {
        return state.user;
    },
    [IS_USER_AUTHENTICATED_GETTER]: (state) => {
        return !!state.token;
    },
};