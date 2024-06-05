import { SET_USER_TOKEN_DATA_MUTATION } from "@/store/storeconstants";

export default {
    [SET_USER_TOKEN_DATA_MUTATION](state, payload) {
        state.user = payload.user;
        state.token = payload.token;
    }
};