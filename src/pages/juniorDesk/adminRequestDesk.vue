<template>
    <v-sheet color="#e8e8e8" min-height="100%" class="pt-8">
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
                        <div class="b-title">իմ հայտերը</div>

                        <v-col cols="auto">
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
                        </v-col>
                    </v-row>

                    <v-row no-gutters>
                        <v-card
                            v-for="(application, i) in applications"
                            :key="i"
                            elevation="1"
                            rounded="lg"
                            class="my-2 pa-3 pr-1"
                        >
                            <v-row no-gutters align="center">
                                <v-icon
                                    class="mr-4"
                                    v-text="icons.mdiFileDocumentOutline"
                                ></v-icon>

                                <span
                                    class="mr-4"
                                    style="font-size: 15px"
                                    v-text="application.name"
                                ></span>

                                <span
                                    class="text--disabled mr-4"
                                    style="font-size: 14px"
                                    v-text="application.author"
                                ></span>

                                <span
                                    class="font-italic"
                                    style="font-size: 14px"
                                    v-text="application.company"
                                ></span>

                                <v-icon
                                    color="rgba(31, 31, 31, 0.7)"
                                    class="mx-1"
                                    style="margin-bottom: 2px"
                                    size="5"
                                    v-text="icons.mdiCheckboxBlankCircle"
                                ></v-icon>

                                <span
                                    class="text--disabled mr-12"
                                    style="font-size: 14px"
                                    v-text="application.date"
                                ></span>

                                <v-row
                                    v-if="application.status === 'pending'"
                                    no-gutters
                                    style="min-width: 110px"
                                >
                                    <v-card elevation="1" class="mr-5">
                                        <v-icon
                                            color="#4CAF50"
                                            size="27"
                                            v-text="icons.mdiCheck"
                                        ></v-icon>
                                    </v-card>

                                    <v-card elevation="1">
                                        <v-icon
                                            color="#F44336"
                                            size="27"
                                            v-text="icons.mdiClose"
                                        ></v-icon>
                                    </v-card>
                                </v-row>

                                <v-chip
                                    v-else
                                    :color="
                                        calculateStatusColor(application.status)
                                    "
                                    class="font-italic mr-2 justify-center"
                                    style="min-width: 99px"
                                    small
                                    dark
                                    v-text="
                                        calculateStatusText(application.status)
                                    "
                                ></v-chip>

                                <v-btn color="#080404" icon>
                                    <v-icon
                                        v-text="icons.mdiDotsVertical"
                                    ></v-icon>
                                </v-btn>
                            </v-row>
                        </v-card>
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

        <ApplicationDialog />
    </v-sheet>
</template>

<script>
import {
    mdiFilterVariant,
    mdiFileDocumentOutline,
    mdiCheckboxBlankCircle,
    mdiDotsVertical,
    mdiCheck,
    mdiClose,
} from "@mdi/js";
import ApplicationDialog from "./ApplicationDialog.vue";

export default {
    components: { ApplicationDialog },

    data: () => ({
        icons: {
            mdiFilterVariant,
            mdiFileDocumentOutline,
            mdiCheckboxBlankCircle,
            mdiDotsVertical,
            mdiCheck,
            mdiClose,
        },
        applications: [
            {
                name: "աշխատանքի_ընդ.27_09_2021",
                author: "Ա. Հովհաննիսյան",
                company: "Rem Argo LLC",
                date: "29 sep 2021",
                status: "pending",
            },
            {
                name: "աշխատանքի_ընդ.27_09_2021",
                author: "Ա. Հովհաննիսյան",
                company: "Rem Argo LLC",
                date: "29 sep 2021",
                status: "approved",
            },
            {
                name: "աշխատանքի_ընդ.27_09_2021",
                author: "Ա. Հովհաննիսյան",
                company: "Rem Argo LLC",
                date: "29 sep 2021",
                status: "approved",
            },
            {
                name: "աշխատանքի_ընդ.27_09_2021",
                author: "Ա. Հովհաննիսյան",
                company: "Rem Argo LLC",
                date: "29 sep 2021",
                status: "approved",
            },
            {
                name: "աշխատանքի_ընդ.27_09_2021",
                author: "Ա. Հովհաննիսյան",
                company: "Rem Argo LLC",
                date: "29 sep 2021",
                status: "pending",
            },
            {
                name: "աշխատանքի_ընդ.27_09_2021",
                author: "Ա. Հովհաննիսյան",
                company: "Rem Argo LLC",
                date: "29 sep 2021",
                status: "pending",
            },
            {
                name: "աշխատանքի_ընդ.27_09_2021",
                author: "Ա. Հովհաննիսյան",
                company: "Rem Argo LLC",
                date: "29 sep 2021",
                status: "rejected",
            },
            {
                name: "աշխատանքի_ընդ.27_09_2021",
                author: "Ա. Հովհաննիսյան",
                company: "Rem Argo LLC",
                date: "29 sep 2021",
                status: "approved",
            },
        ],
        page: 1,
    }),

    methods: {
        calculateStatusColor(status) {
            switch (status) {
                case "ongoing":
                    return "#2196F3";
                case "approved":
                    return "#4CAF50";
                case "rejected":
                    return "#F44336";
            }
        },

        calculateStatusText(status) {
            switch (status) {
                case "ongoing":
                    return "Ընթացքի մեջ";
                case "approved":
                    return "Հաստատված";
                case "rejected":
                    return "Մերժված";
            }
        },
    },
};
</script>

<style scoped>
.b-title {
    color: #767676;
    font-size: 15px;
    text-transform: uppercase;
}
</style>
