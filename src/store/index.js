import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        overlay: false,
    },

    mutations: {
        setOverlay(state, payload) {
            state.overlay = payload;
        },
    },

    actions: {},

    modules: {},
});
