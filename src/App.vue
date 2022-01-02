<template>
    <v-app>
        <router-view name="header"></router-view>

        <v-main>
            <router-view />
        </v-main>

        <router-view name="footer"></router-view>

        <div v-if="overlay" class="b-overlay"></div>

        <CreateAction v-if="createAction" />
    </v-app>
</template>

<script>
import CreateAction from "@/components/createAction/CreateAction";

export default {
    name: "App",

    components: { CreateAction },

    data: () => ({
        //
    }),

    computed: {
        overlay() {
            return this.$store.state.overlay;
        },

        createAction() {
            return this.$store.state.createAction;
        },
    },
};
</script>

<style>
.bb {
    border: 1px solid black;
}

.bw {
    border: 1px solid white;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

input[type="number"] {
    -moz-appearance: textfield;
}

.b-clickable {
    cursor: pointer;
}

.b-text-unselectable {
    -webkit-user-select: none; /* Safari */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
    user-select: none;
}

.b-pos-relative {
    position: relative;
}
</style>

<style scoped>
.b-overlay {
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(214, 227, 230, 0.2);
    backdrop-filter: blur(5px);
    width: 100vw;
    height: 100vh;
    z-index: 5;
}
</style>
