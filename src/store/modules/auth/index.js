import mutations from './mutations';
import actions from './actions';
import getters from './getters';

export default {
    namespaced: true,
    state() {
        return {
            // 'id','username', 'email', 'is_logged_in', 'is_activated', 'last_login', 'date_joined'
            user: null,
            token: null,
        };
    },
    mutations,
    actions,
    getters,
}