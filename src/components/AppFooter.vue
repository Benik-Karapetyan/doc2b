<template>
    <v-footer
        app
        color="white"
        class="elevation-5 justify-center py-3"
        style="z-index: 10"
    >
        <v-col cols="7" class="pa-0">
            <v-row no-gutters justify="space-between" class="pos-relative">
                <v-col cols="auto">
                    <footer-link
                        text="գլխավոր"
                        to="/"
                        routeName="Home"
                        :activeIcon="icons.mdiHome"
                        :icon="icons.mdiHomeOutline"
                    ></footer-link>

                    <footer-link
                        text="փաստաթղթեր"
                        to="/documents"
                        routeName="Documents"
                        :activeIcon="icons.mdiFileDocument"
                        :icon="icons.mdiFileDocumentOutline"
                    ></footer-link>
                </v-col>

                <v-btn
                    color="#FFC107"
                    class="b-add-action-btn"
                    fab
                    dark
                    depressed
                >
                    <v-icon large v-text="icons.mdiPlus"></v-icon>
                </v-btn>

                <v-col cols="auto">
                    <footer-link
                        text="կազմակերպություններ"
                        to="/organizations"
                        routeName="Organizations"
                        :activeIcon="icons.mdiBriefcaseVariant"
                        :icon="icons.mdiBriefcaseVariantOutline"
                    ></footer-link>

                    <user-desk></user-desk>
                </v-col>
            </v-row>
        </v-col>
    </v-footer>
</template>

<script>
import {
    mdiHome,
    mdiHomeOutline,
    mdiFileDocument,
    mdiFileDocumentOutline,
    mdiBriefcaseVariant,
    mdiBriefcaseVariantOutline,
    mdiPlus,
} from "@mdi/js";
import FooterLink from "./common/FooterLink";
import UserDesk from "./common/UserDesk";

export default {
    name: "AppFooter",

    components: { FooterLink, UserDesk },

    data: () => ({
        icons: {
            mdiHome,
            mdiHomeOutline,
            mdiFileDocument,
            mdiFileDocumentOutline,
            mdiBriefcaseVariant,
            mdiBriefcaseVariantOutline,
            mdiPlus,
        },
    }),
};
</script>

<style scoped>
.b-add-action-btn {
    position: absolute;
    top: -60%;
    left: 50%;
    transform: translateX(-50%);
}
</style>
