<template>
    <v-menu
        v-model="menu"
        offset-y
        top
        left
        min-width="345"
        max-width="345"
        nudge-top="44.5"
        nudge-right="30.5"
        rounded="lg"
        transition="scroll-y-reverse-transition"
        :close-on-content-click="false"
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

            <v-carousel
                v-model="carousel"
                height="181"
                class="my-5"
                hide-delimiters
            >
                <template v-slot:prev="{ on, attrs }">
                    <v-btn
                        color="white"
                        min-width="34"
                        class="rounded-lg px-0"
                        v-bind="attrs"
                        v-on="on"
                    >
                        <v-icon
                            class="text--secondary"
                            large
                            v-text="icons.mdiChevronLeft"
                        ></v-icon>
                    </v-btn>
                </template>
                <template v-slot:next="{ on, attrs }">
                    <v-btn
                        color="white"
                        min-width="34"
                        class="rounded-lg px-0"
                        v-bind="attrs"
                        v-on="on"
                    >
                        <v-icon
                            class="text--secondary"
                            large
                            v-text="icons.mdiChevronRight"
                        ></v-icon>
                    </v-btn>
                </template>
                <v-carousel-item v-for="(slide, i) in slides" :key="i">
                    <v-sheet class="b-carousel-item-content" height="100%" dark>
                        <v-row
                            no-gutters
                            class="fill-height"
                            align="center"
                            justify="center"
                        >
                            <v-col
                                cols="7"
                                class="text-uppercase text-center font-weight-bold"
                                style="font-size: 19px; line-height: 18px"
                                >{{ slide }}</v-col
                            >
                        </v-row>
                    </v-sheet>
                </v-carousel-item>

                <div class="b-delimeters">
                    <v-icon
                        v-for="(slide, i) in slides"
                        :key="i"
                        class="mr-1"
                        :style="{ opacity: carousel === i ? 1 : 0.5 }"
                        size="12"
                        v-text="icons.mdiCheckboxBlankCircle"
                    ></v-icon>
                </div>
            </v-carousel>

            <!-- <v-img
                src="@/assets/sunny.png"
                width="345"
                height="auto"
                class="my-5"
            ></v-img> -->

            <v-card elevation="0" rounded="lg">
                <v-list>
                    <v-list-item
                        v-for="(link, i) in links"
                        :key="i"
                        :to="link.to"
                        @click="menu = false"
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
    mdiChevronLeft,
    mdiChevronRight,
    mdiCheckboxBlankCircle,
    // mdiClockOutline,
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
        icons: {
            mdiMenu,
            mdiChevronLeft,
            mdiChevronRight,
            mdiCheckboxBlankCircle,
        },
        menu: false,
        links: [
            // {
            //     title: "Վերջին դիտված ֆայլեր",
            //     icon: mdiClockOutline,
            //     to: "/users",
            // },
            {
                title: "Ստացված ֆայլեր",
                icon: mdiFolderAccountOutline,
                to: "/received-documents",
            },
            {
                title: "Ջնջված",
                icon: mdiDeleteOutline,
                to: "/deleted-documents",
            },
            {
                title: "Հաճախ տրվող հարցեր",
                icon: mdiHelpCircleOutline,
                to: "/faq",
            },
            {
                title: "Հետադարձ կապ",
                icon: mdiCardAccountPhoneOutline,
                to: "/contact-us",
            },
            { title: "Կարգավորումներ", icon: mdiCogOutline, to: "/settings" },
        ],
        slides: [
            "շատ Հետաքրքիր վերնագիր եվ մի քիչ էլ տեքստ",
            "շատ Հետաքրքիր վերնագիր եվ մի քիչ էլ տեքստ",
            "շատ Հետաքրքիր վերնագիր եվ մի քիչ էլ տեքստ",
            "շատ Հետաքրքիր վերնագիր եվ մի քիչ էլ տեքստ",
        ],
        carousel: 0,
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

<style lang="sass" scoped>
.v-menu__content
    box-shadow: 0px 0px
</style>

<style scoped>
.v-menu__content::-webkit-scrollbar {
    width: 5px;
    height: 5px;
    border-radius: 8px;
}

.v-menu__content::-webkit-scrollbar-track {
    border-radius: 8px;
}

.v-menu__content::-webkit-scrollbar-thumb {
    background: #c4c4c4;
    border-radius: 8px;
}

.b-carousel-item-content {
    background: url(../../assets/signUp/building.jpg);
    background-size: cover;
}

.b-delimeters {
    position: absolute;
    bottom: 0;
    width: 100%;
    text-align: center;
    padding: 20px 0;
}
</style>
