<template>
    <v-dialog v-model="appDialog">
        <v-card width="468" class="text-center pa-5">
            <v-row no-gutters justify="end" class="mb-2 px-6">
                <v-btn icon @click="appDialog = false">
                    <v-icon v-text="icons.mdiClose"></v-icon>
                </v-btn>
            </v-row>

            <h1 class="subtitle-1 pa-0 mb-7">
                Ընտրեք աշխատակցին և փաստաթղթի տեսակը
            </h1>

            <v-sheet width="340" class="mx-auto">
                <v-autocomplete
                    label="Աշխատակցի ԱԱՀ"
                    outlined
                    dense
                    clearable
                    hide-details="auto"
                    class="mb-5"
                ></v-autocomplete>

                <v-autocomplete
                    label="Փաստաթղթի տեսակ"
                    outlined
                    dense
                    clearable
                    hide-details="auto"
                    class="mb-5"
                ></v-autocomplete>
            </v-sheet>

            <v-btn color="#FFC107" width="220" dark depressed
                >ուղարկել հարցումը</v-btn
            >
        </v-card>
    </v-dialog>
</template>

<script>
import { mdiClose } from "@mdi/js";
import { mapMutations } from "vuex";

export default {
    name: "ApplicationDialog",

    data: () => ({
        icons: { mdiClose },
    }),

    computed: {
        appDialog: {
            get() {
                return this.$store.state.appDialog;
            },

            set(val) {
                this.setAppDialog(val);
            },
        },
    },

    methods: {
        ...mapMutations(["setAppDialog"]),
    },
};
</script>
