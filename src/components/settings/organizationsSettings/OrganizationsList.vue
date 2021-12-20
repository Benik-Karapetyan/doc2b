<template>
    <v-sheet
        color="#f7f7f7"
        class="ml-3 pa-10 pt-12 pr-5 rounded-lg"
        min-height="calc(100vh - 248px)"
    >
        <v-row no-gutters justify="space-between" align="center" class="mb-3">
            <div class="b-title">
                կազմակերպություններ -
                <span class="font-weight-bold">5</span>
            </div>

            <v-btn color="#FFC107" dark depressed @click="$emit('update-mode')">
                ավելացնել

                <v-icon
                    class="ml-3"
                    size="22"
                    v-text="icons.mdiArrowRight"
                ></v-icon>
            </v-btn>
        </v-row>

        <v-row no-gutters style="margin-right: 200px">
            <v-col v-for="(item, i) in items" :key="i" cols="6" class="pa-2">
                <v-card elevation="1" rounded="lg" class="pa-4">
                    <v-row no-gutters>
                        <img
                            src="@/assets/office1.png"
                            width="95"
                            height="95"
                        />

                        <v-col class="text-right">
                            <div style="font-size: 15px; color: #767676">
                                Կազմակերպություն մեկ, երկու, երեք, չորս ՍՊԸ
                            </div>

                            <div
                                class="font-italic mb-5"
                                style="font-size: 22px; line-height: 25.3px"
                            >
                                Ա. Հակոբյան
                            </div>

                            <v-btn color="#0E546D" class="mr-3" dark depressed
                                >Խմբագրել</v-btn
                            >

                            <v-btn color="#D36E6E" dark depressed>ջնջել</v-btn>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>

        <!-- <v-alert
            color="#D36E6E"
            class="mb-0"
            style="font-size: 14px; font-weight: normal"
            dark
            dense
        >
            <v-row no-gutters justify="space-between" align="center">
                <v-col cols="auto">
                    <v-icon
                        class="mr-2"
                        v-text="icons.mdiAlertCircleOutline"
                    ></v-icon>
                    Տվյալ կազմակերպությունը իսպառ կջնջվի:
                </v-col>

                <v-btn depressed text>Հաստատել</v-btn>
            </v-row>
        </v-alert> -->
    </v-sheet>
</template>

<script>
import { mdiArrowRight, mdiAlertCircleOutline } from "@mdi/js";

export default {
    name: "OrganizationsList",

    props: {
        items: Array,
    },

    data: () => ({
        icons: { mdiArrowRight, mdiAlertCircleOutline },
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
