import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

// automatic base components registration

import { upperFirst, camelCase } from "lodash";

const requireComponent = require.context(
    "./components/base",
    true,
    /B[A-Z]\w+\.(vue|js)$/
);

requireComponent.keys().forEach(fileName => {
    const componentConfig = requireComponent(fileName);

    const componentName = upperFirst(
        camelCase(
            fileName
                .split("/")
                .pop()
                .replace(/\.\w+$/, "")
        )
    );

    Vue.component(componentName, componentConfig.default || componentConfig);
});

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App),
}).$mount("#app");
