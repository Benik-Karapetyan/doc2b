<template>
    <v-sheet color="#e8e8e8" min-height="100%" class="pt-8 pb-12 mb-12">
        <v-row no-gutters justify="center">
            <v-col cols="10">
                <v-sheet
                    color="#f7f7f7"
                    class="ml-3 pa-10 rounded-lg"
                    min-height="calc(100vh - 248px)"
                >
                    <div class="b-title">օգտատերեր</div>

                    <v-sheet class="pa-10">
                        <v-row
                            no-gutters
                            justify="space-between"
                            align="center"
                            class="mb-5"
                        >
                            <v-col cols="auto">
                                <v-tabs
                                    v-model="tab"
                                    color="rgba(0, 0, 0, 0.87)"
                                >
                                    <v-tab
                                        v-for="tab in tabs"
                                        :key="tab"
                                        class="text-capitalize"
                                        v-text="tab"
                                    ></v-tab>
                                </v-tabs>
                                <v-divider></v-divider>
                            </v-col>

                            <v-btn color="#FFC107" dark depressed>
                                <v-icon
                                    class="mr-2"
                                    v-text="icons.mdiAccountPlusOutline"
                                ></v-icon>
                                ավելացնել
                            </v-btn>
                        </v-row>

                        <v-sheet max-width="92%">
                            <v-row
                                no-gutters
                                justify="space-between"
                                class="mb-5"
                            >
                                <v-btn
                                    color="#FFC107"
                                    class="text-capitalize"
                                    height="40"
                                    dark
                                    depressed
                                    style="font-size: 1rem"
                                >
                                    Ֆիլտր
                                    <v-icon
                                        class="ml-3"
                                        v-text="icons.mdiFilterVariant"
                                    ></v-icon>
                                </v-btn>

                                <v-sheet width="345">
                                    <v-text-field
                                        color="#FFC107"
                                        outlined
                                        rounded
                                        dense
                                        hide-details
                                        :append-icon="icons.mdiMagnify"
                                    ></v-text-field>
                                </v-sheet>
                            </v-row>
                        </v-sheet>

                        <v-tabs-items v-model="tab">
                            <v-tab-item :value="0">
                                <AllUsers />
                            </v-tab-item>

                            <v-tab-item :value="1">
                                <ActiveUsers />
                            </v-tab-item>

                            <v-tab-item :value="2">
                                <BannedUsers />
                            </v-tab-item>

                            <v-tab-item :value="3">
                                <InvitedUsers />
                            </v-tab-item>

                            <v-tab-item :value="4">
                                <DeletedUsers />
                            </v-tab-item>
                        </v-tabs-items>
                    </v-sheet>
                </v-sheet>
            </v-col>
        </v-row>
    </v-sheet>
</template>

<script>
import { mdiAccountPlusOutline, mdiFilterVariant, mdiMagnify } from "@mdi/js";

import AllUsers from "@/components/users/AllUsers.vue";
import ActiveUsers from "@/components/users/ActiveUsers.vue";
import BannedUsers from "@/components/users/BannedUsers.vue";
import InvitedUsers from "@/components/users/InvitedUsers.vue";
import DeletedUsers from "@/components/users/DeletedUsers.vue";

export default {
    components: {
        AllUsers,
        ActiveUsers,
        BannedUsers,
        InvitedUsers,
        DeletedUsers,
    },

    data: () => ({
        icons: {
            mdiAccountPlusOutline,
            mdiFilterVariant,
            mdiMagnify,
        },
        tab: null,
        tabs: ["Բոլորը", "Ակտիվ", "Կասեցված", "Հրավիրված", "Ջնջված"],
    }),
};
</script>

<style scoped>
.b-title {
    color: #767676;
    font-size: 15px;
    text-transform: uppercase;
    margin-bottom: 52px;
}
</style>
