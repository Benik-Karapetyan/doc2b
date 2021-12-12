import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        options: { variations: false },
        themes: {
            light: {
                // primary: "#0E546D",
                // secondary: "#2a3042",
                // accent: "#1bbae1",
                // anchor: "#8c9eff"
            },
        },
    },

    icons: {
        iconfont: "mdiSvg",
    },
});
