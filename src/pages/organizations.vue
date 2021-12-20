<template>
    <v-sheet color="#e8e8e8" min-height="100%" class="pt-8">
        <v-row no-gutters justify="center">
            <v-col cols="10">
                <v-sheet
                    color="#f7f7f7"
                    class="ml-3 pa-10 rounded-lg"
                    min-height="calc(100vh - 248px)"
                >
                    <div class="b-title">ընտրել կազմակերպությունը</div>

                    <v-row no-gutters>
                        <v-col cols="auto">
                            <v-card
                                v-for="(organization, i) in organizations"
                                :key="i"
                                :elevation="i === 0 ? 1 : 0"
                                rounded="lg"
                                class="pa-4 mb-5 text-capitalize"
                                :style="{ opacity: i === 0 ? 1 : 0.7 }"
                            >
                                <v-row no-gutters align="center">
                                    <img
                                        src="@/assets/office1.png"
                                        width="45"
                                        height="45"
                                    />

                                    <span
                                        class="font-italic ml-5 mr-7"
                                        style="font-size: 14px"
                                        v-text="organization.title"
                                    ></span>

                                    <v-chip
                                        color="#2196F3"
                                        dark
                                        class="font-italic"
                                        small
                                        v-text="organization.role"
                                    ></v-chip>

                                    <v-btn
                                        v-if="!organization.isLogged"
                                        color="#FFC107"
                                        class="ml-12"
                                        depressed
                                        dark
                                    >
                                        մուտք
                                        <v-icon
                                            class="ml-3"
                                            size="22"
                                            v-text="icons.mdiArrowRight"
                                        ></v-icon>
                                    </v-btn>
                                </v-row>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-sheet>
            </v-col>
        </v-row>
    </v-sheet>
</template>

<script>
import { mdiArrowRight } from "@mdi/js";

export default {
    data: () => ({
        icons: { mdiArrowRight },
        organizations: [
            {
                title: "Կազմակերպություն մեկ, երկու, երեք, չորս ՍՊԸ",
                role: "Ադմին",
                isLogged: true,
            },
            {
                title: "Կազմակերպություն մեկ, երկու, երեք, չորս ՍՊԸ",
                role: "Հաշվապահ",
                isLogged: false,
            },
            {
                title: "Կազմակերպություն մեկ, երկու, երեք, չորս ՍՊԸ",
                role: "Հաշվապահ",
                isLogged: false,
            },
            {
                title: "Կազմակերպություն մեկ, երկու, երեք, չորս ՍՊԸ",
                role: "Հաշվապահ",
                isLogged: false,
            },
            {
                title: "Կազմակերպություն մեկ, երկու, երեք, չորս ՍՊԸ",
                role: "Հաշվապահ",
                isLogged: false,
            },
            {
                title: "Կազմակերպություն մեկ, երկու, երեք, չորս ՍՊԸ",
                role: "Հաշվապահ",
                isLogged: false,
            },
            {
                title: "Կազմակերպություն մեկ, երկու, երեք, չորս ՍՊԸ",
                role: "Հաշվապահ",
                isLogged: false,
            },
        ],
    }),
};
</script>

<style scoped>
.b-title {
    color: #767676;
    font-size: 15px;
    text-transform: uppercase;
    margin-bottom: 30px;
}
</style>
