import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user: {
            role: "senior",
        },
        appDialog: false,
        overlay: false,
        createAction: false,
    },

    mutations: {
        setOverlay(state, payload) {
            state.overlay = payload;
        },

        setCreateAction(state, payload) {
            state.createAction = payload;
        },

        setRole(state, payload) {
            state.user.role = payload;
        },

        setAppDialog(state, payload) {
            state.appDialog = payload;
        },
    },

    actions: {},

    modules: {},
});
