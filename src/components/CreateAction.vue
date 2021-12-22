<template>
    <v-row
        no-gutters
        justify="center"
        align="center"
        class="b-create-action-overlay"
    >
        <v-card rounded="lg" width="419" class="pa-7">
            <v-row no-gutters justify="end">
                <v-btn icon>
                    <v-icon v-text="icons.mdiClose"></v-icon>
                </v-btn>
            </v-row>

            <v-card-title>
                <v-avatar></v-avatar>
                Աշխատանքի ընդունման տեսակ
            </v-card-title>
        </v-card>
    </v-row>
</template>

<script>
import { mdiClose } from "@mdi/js";

export default {
    name: "CreateAction",

    data: () => ({
        icons: { mdiClose },
    }),
};
</script>

<style scoped>
.b-create-action-overlay {
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(214, 227, 230, 0.2);
    backdrop-filter: blur(50px);
    width: 100vw;
    height: 100vh;
    z-index: 5;
}
</style>
