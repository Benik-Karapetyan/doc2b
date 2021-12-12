<template>
    <v-app-bar app color="#0E546D" flat dark style="z-index: 10">
        <v-row no-gutters justify="center" align="center" class="fill-height">
            <v-col cols="10">
                <v-row no-gutters align="center">
                    <v-col cols="auto">
                        <img
                            src="@/assets/doc2b-light.png"
                            width="54.57"
                            height="auto"
                        />
                    </v-col>

                    <v-sheet color="#0E546D" width="300" class="ml-12">
                        <company-dropdown
                            placeholder="Կազմակերպություն"
                            outlined
                            filled
                        ></company-dropdown>
                    </v-sheet>

                    <v-spacer></v-spacer>

                    <v-sheet width="300" class="rounded-xl" light>
                        <v-text-field
                            color="#FFC107"
                            placeholder="Որոնել"
                            rounded
                            dense
                            hide-details
                            outlined
                            :append-icon="icons.mdiMagnify"
                        ></v-text-field>
                    </v-sheet>

                    <v-col cols="auto" class="mx-10">
                        <notification-bell></notification-bell>
                    </v-col>

                    <v-col cols="auto">
                        <v-row no-gutters align="center">
                            <v-avatar color="white" size="32" class="mr-3">
                                <span class="name-first-letter">N</span>
                            </v-avatar>

                            Ն. ԿԱՐԱՅԱՆ
                        </v-row>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-app-bar>
</template>

<script>
import { mdiMagnify } from "@mdi/js";

import CompanyDropdown from "./common/CompanyDropdown.vue";
import NotificationBell from "./common/NotificationBell.vue";

export default {
    name: "AppHeader",

    components: { CompanyDropdown, NotificationBell },

    data: () => ({
        icons: { mdiMagnify },
    }),
};
</script>

<style scoped>
.name-first-letter {
    color: #0e546d;
    font-size: 20px;
}
</style>
