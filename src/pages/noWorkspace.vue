<template>
    <v-sheet color="#e8e8e8" min-height="100%" class="pa-0 pt-4">
        <v-row no-gutters justify="center">
            <v-col cols="10">
                <v-sheet
                    color="#f7f7f7"
                    class="ml-3 pt-5 pb-7 rounded-lg"
                    min-height="calc(100vh - 248px)"
                >
                    <v-card-title class="justify-center pa-0 mb-7">
                        <v-col cols="auto" class="pa-0">
                            <span class="text--secondary">Բարի գալուստ,</span>

                            <h1 class="text-h4 text-center">ՆԱՐԵԿ</h1>
                        </v-col>
                    </v-card-title>
                    <v-row no-gutters justify="center">
                        <v-sheet
                            width="422"
                            height="422"
                            class="rounded-circle text-center"
                            style="padding: 60px 60px 110px"
                        >
                            <v-img
                                src="@/assets/office1.png"
                                width="142"
                                height="142"
                                class="mx-auto"
                            ></v-img>
                            <p
                                class="text--secondary text-center mb-10"
                                style="font-size: 15px"
                            >
                                Ավելացրեք կազմակերպություն, որպեսքի սկսեք ձեր
                                աշխատանքը համակարգում:
                            </p>

                            <v-btn color="#FFC107" width="188" dark depressed>
                                ավելացնել
                                <v-icon
                                    class="ml-3"
                                    v-text="icons.mdiPlus"
                                ></v-icon>
                            </v-btn>
                        </v-sheet>
                    </v-row>
                </v-sheet>
            </v-col>
        </v-row>
    </v-sheet>
</template>

<script>
import { mdiPlus } from "@mdi/js";

export default {
    data: () => ({
        icons: { mdiPlus },
    }),
};
</script>
