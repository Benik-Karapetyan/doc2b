<template>
    <v-menu
        v-model="menu"
        offset-y
        top
        left
        nudge-top="44.5"
        nudge-right="30.5"
        rounded="lg"
        transition="scroll-y-reverse-transition"
    >
        <template v-slot:activator="{ on }">
            <v-btn
                :color="menu ? '#0E546D' : '#ADADAD'"
                :text="!menu"
                class="px-4"
                dark
                small
                rounded
                depressed
                v-on="on"
                @click="menu = !menu"
            >
                <v-icon v-text="icons.mdiMenu"></v-icon>
            </v-btn>
        </template>

        <div style="height: 603px">
            <v-card elevation="0" rounded="lg">
                <v-card-title class="justify-end pa-3">
                    <v-col cols="auto" class="pa-0">
                        <span class="text--secondary">Բարի գալուստ,</span>

                        <h1 class="text-h4 text-right">ՆԱՐԵԿ</h1>
                    </v-col>
                </v-card-title>
            </v-card>

            <v-img
                src="@/assets/sunny.png"
                width="345"
                height="auto"
                class="my-5"
            ></v-img>

            <v-card elevation="0" rounded="lg">
                <v-list>
                    <v-list-item
                        v-for="(link, i) in links"
                        :key="i"
                        :to="link.to"
                    >
                        <v-list-item-icon class="mr-3 text--secondary">
                            <v-icon color="#ADADAD" v-text="link.icon"></v-icon>
                        </v-list-item-icon>
                        <v-list-item-title
                            class="black--text"
                            v-text="link.title"
                        ></v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-card>
        </div>
    </v-menu>
</template>

<script>
import {
    mdiMenu,
    mdiClockOutline,
    mdiFolderAccountOutline,
    mdiDeleteOutline,
    mdiHelpCircleOutline,
    mdiCardAccountPhoneOutline,
    mdiCogOutline,
} from "@mdi/js";
import { mapMutations } from "vuex";

export default {
    name: "UserDesk",

    data: () => ({
        icons: { mdiMenu },
        menu: false,
        links: [
            {
                title: "Վերջին դիտված ֆայլեր",
                icon: mdiClockOutline,
                to: "/recent",
            },
            { title: "Ստացված ֆայլեր", icon: mdiFolderAccountOutline, to: "" },
            { title: "Ջնջված", icon: mdiDeleteOutline, to: "" },
            { title: "Հաճախ տրվող հարցեր", icon: mdiHelpCircleOutline, to: "" },
            { title: "Հետադարձ կապ", icon: mdiCardAccountPhoneOutline, to: "" },
            { title: "Կարգավորումներ", icon: mdiCogOutline, to: "" },
        ],
    }),

    methods: {
        ...mapMutations(["setOverlay"]),
    },

    watch: {
        menu(val) {
            this.setOverlay(val);
        },
    },
};
</script>
