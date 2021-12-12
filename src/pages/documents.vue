<template>
    <v-sheet color="#e8e8e8" min-height="100%" class="pa-0 pt-8">
        <v-row no-gutters justify="center">
            <v-col cols="10">
                <v-sheet
                    color="#f7f7f7"
                    class="ml-3 pa-10 rounded-lg"
                    min-height="calc(100vh - 248px)"
                >
                    <v-row
                        no-gutters
                        justify="space-between"
                        align="center"
                        class="mb-6"
                    >
                        <div class="b-title">փաստաթղթեր</div>

                        <v-btn
                            color="#FFC107"
                            class="text-capitalize"
                            width="345"
                            dark
                            depressed
                            style="font-size: 1rem"
                        >
                            <v-row
                                no-gutters
                                justify="space-between"
                                align="center"
                            >
                                Ընտրեք ֆիլտրը
                                <v-icon
                                    v-text="icons.mdiFilterVariant"
                                ></v-icon>
                            </v-row>
                        </v-btn>
                    </v-row>

                    <v-row no-gutters class="ml-n2" style="margin-right: 100px">
                        <v-col
                            v-for="(document, i) in documents"
                            :key="i"
                            cols="4"
                            class="pa-2"
                        >
                            <v-card elevation="1" rounded="lg" class="pa-4">
                                <v-row
                                    no-gutters
                                    justify="space-between"
                                    align="center"
                                >
                                    <v-col cols="auto" class="b-pos-relative">
                                        <img
                                            src="@/assets/home/document/paper1.png"
                                            width="31"
                                            height="31"
                                        />

                                        <v-avatar
                                            color="#0C465A"
                                            size="15"
                                            class="b-floating-plus"
                                        >
                                            <v-icon
                                                color="white"
                                                v-text="icons.mdiPlus"
                                            ></v-icon>
                                        </v-avatar>
                                    </v-col>

                                    <div style="font-size: 15px">
                                        <div>աշխատանքի_ընդ.27_09_2021</div>

                                        <span
                                            class="text--disabled"
                                            style="font-size: 14px"
                                            v-text="document.author"
                                        ></span>

                                        <v-icon
                                            color="rgba(31, 31, 31, 0.7)"
                                            class="mx-1"
                                            size="5"
                                            v-text="
                                                icons.mdiCheckboxBlankCircle
                                            "
                                        ></v-icon>

                                        <span
                                            class="text--disabled"
                                            style="font-size: 14px"
                                            v-text="document.date"
                                        ></span>
                                    </div>

                                    <v-btn color="#080404" icon>
                                        <v-icon
                                            v-text="icons.mdiDotsVertical"
                                        ></v-icon>
                                    </v-btn>
                                </v-row>
                            </v-card>
                        </v-col>
                    </v-row>

                    <div class="text-center py-10">
                        <v-pagination
                            v-model="page"
                            color="#0E546D"
                            :length="4"
                            circle
                        ></v-pagination>
                    </div>
                </v-sheet>
            </v-col>
        </v-row>
    </v-sheet>
</template>

<script>
import {
    mdiArrowRight,
    mdiFilterVariant,
    mdiPlus,
    mdiDotsVertical,
    mdiCheckboxBlankCircle,
} from "@mdi/js";

export default {
    data: () => ({
        icons: {
            mdiArrowRight,
            mdiFilterVariant,
            mdiPlus,
            mdiDotsVertical,
            mdiCheckboxBlankCircle,
        },
        documents: [
            {
                title: "աշխատանքի_ընդ.27_09_2021",
                author: "Ա. Հովհաննիսյան",
                date: "29 sep 2021",
            },
            {
                title: "աշխատանքի_ընդ.27_09_2021",
                author: "Ա. Հովհաննիսյան",
                date: "29 sep 2021",
            },
            {
                title: "աշխատանքի_ընդ.27_09_2021",
                author: "Ա. Հովհաննիսյան",
                date: "29 sep 2021",
            },
            {
                title: "աշխատանքի_ընդ.27_09_2021",
                author: "Ա. Հովհաննիսյան",
                date: "29 sep 2021",
            },
            {
                title: "աշխատանքի_ընդ.27_09_2021",
                author: "Ա. Հովհաննիսյան",
                date: "29 sep 2021",
            },
            {
                title: "աշխատանքի_ընդ.27_09_2021",
                author: "Ա. Հովհաննիսյան",
                date: "29 sep 2021",
            },
            {
                title: "աշխատանքի_ընդ.27_09_2021",
                author: "Ա. Հովհաննիսյան",
                date: "29 sep 2021",
            },
            {
                title: "աշխատանքի_ընդ.27_09_2021",
                author: "Ա. Հովհաննիսյան",
                date: "29 sep 2021",
            },
            {
                title: "աշխատանքի_ընդ.27_09_2021",
                author: "Ա. Հովհաննիսյան",
                date: "29 sep 2021",
            },
            {
                title: "աշխատանքի_ընդ.27_09_2021",
                author: "Ա. Հովհաննիսյան",
                date: "29 sep 2021",
            },
            {
                title: "աշխատանքի_ընդ.27_09_2021",
                author: "Ա. Հովհաննիսյան",
                date: "29 sep 2021",
            },
            {
                title: "աշխատանքի_ընդ.27_09_2021",
                author: "Ա. Հովհաննիսյան",
                date: "29 sep 2021",
            },
            {
                title: "աշխատանքի_ընդ.27_09_2021",
                author: "Ա. Հովհաննիսյան",
                date: "29 sep 2021",
            },
            {
                title: "աշխատանքի_ընդ.27_09_2021",
                author: "Ա. Հովհաննիսյան",
                date: "29 sep 2021",
            },
            {
                title: "աշխատանքի_ընդ.27_09_2021",
                author: "Ա. Հովհաննիսյան",
                date: "29 sep 2021",
            },
            {
                title: "աշխատանքի_ընդ.27_09_2021",
                author: "Ա. Հովհաննիսյան",
                date: "29 sep 2021",
            },
            {
                title: "աշխատանքի_ընդ.27_09_2021",
                author: "Ա. Հովհաննիսյան",
                date: "29 sep 2021",
            },
            {
                title: "աշխատանքի_ընդ.27_09_2021",
                author: "Ա. Հովհաննիսյան",
                date: "29 sep 2021",
            },
        ],
        page: 1,
    }),
};
</script>

<style scoped>
.b-title {
    color: #767676;
    font-size: 15px;
    text-transform: uppercase;
}
</style>
