<template>
    <v-app>
        <router-view name="header"></router-view>

        <v-main>
            <router-view />
        </v-main>

        <router-view name="footer"></router-view>

        <div v-if="overlay" class="b-overlay"></div>
    </v-app>
</template>

<script>
export default {
    name: "App",

    data: () => ({
        //
    }),

    computed: {
        overlay() {
            return this.$store.state.overlay;
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
