<template>
    <v-sheet
        color="#f7f7f7"
        class="ml-3 py-8 px-10 rounded-lg"
        min-height="calc(100vh - 189px)"
    >
        <v-row no-gutters>
            <v-col cols="6" class="pr-4">
                <div class="b-title">վիճակագրություն</div>

                <v-row no-gutters>
                    <v-col cols="6" style="padding-right: 10px">
                        <v-card
                            rounded="lg"
                            elevation="1"
                            class="py-6 px-4 mb-5"
                        >
                            <v-row
                                no-gutters
                                justify="space-between"
                                align="center"
                            >
                                <v-col cols="auto">
                                    <v-img
                                        src="@/assets/home/statistics/paper1.png"
                                        width="56.96"
                                        height="56.96"
                                    ></v-img>
                                </v-col>

                                <v-col cols="auto" class="text-right">
                                    <div class="b-card-title">
                                        Ընթացիկ փաստաթղթեր
                                    </div>
                                    <span class="b-card-number">23</span>
                                </v-col>
                            </v-row>
                        </v-card>

                        <v-card rounded="lg" elevation="1" class="py-6 px-4">
                            <v-row
                                no-gutters
                                justify="space-between"
                                align="center"
                            >
                                <v-col cols="auto">
                                    <v-img
                                        src="@/assets/home/statistics/paper1.png"
                                        width="56.96"
                                        height="56.96"
                                    ></v-img>
                                </v-col>

                                <v-col cols="auto" class="text-right">
                                    <div class="b-card-title">
                                        Ստեղծված փաստաթղթեր
                                    </div>
                                    <span class="b-card-number">156</span>
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-col>

                    <v-col cols="6" style="padding-left: 10px">
                        <v-card
                            rounded="lg"
                            elevation="0"
                            height="100%"
                            class="pt-7 px-7 pb-6 mb-5 pos-relative"
                        >
                            <v-radio-group
                                v-model="selectedInterval"
                                class="b-interval-radio"
                                hide-details
                            >
                                <v-radio
                                    v-for="interval in timeIntervals"
                                    :key="interval"
                                    color="#FFC107"
                                >
                                    <template v-slot:label>
                                        <span
                                            class="text--primary"
                                            v-text="interval"
                                        ></span>
                                    </template>
                                </v-radio>
                            </v-radio-group>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>

            <v-col cols="6" class="pl-4">
                <div class="b-title">ՀԱՃԱԽԱԿԻ ՕԳՏԱԳՈՐԾՎԱԾ գործընթացներ</div>

                <v-row no-gutters>
                    <v-col cols="4" class="mr-4">
                        <v-card class="pa-4 pt-3 mb-4">
                            <v-row
                                no-gutters
                                justify="space-between"
                                class="mb-2"
                            >
                                <v-col cols="auto">
                                    <v-img
                                        src="@/assets/home/statistics/process1.png"
                                        width="45"
                                        height="45"
                                    ></v-img>
                                </v-col>

                                <v-chip color="#048BA8" dark class="px-5">
                                    46
                                    <span style="opacity: 0.5">/156</span>
                                </v-chip>
                            </v-row>

                            <v-row no-gutters justify="space-between">
                                <span style="font-size: 15px"
                                    >Աշխ. ընդունման</span
                                >

                                <v-icon
                                    color="rgba(0, 0, 0, 0.23)"
                                    v-text="icons.mdiStarOutline"
                                ></v-icon>
                            </v-row>
                        </v-card>

                        <v-card class="pa-4 pt-3 mb-4">
                            <v-row
                                no-gutters
                                justify="space-between"
                                class="mb-2"
                            >
                                <v-col cols="auto">
                                    <v-img
                                        src="@/assets/home/statistics/process1.png"
                                        width="45"
                                        height="45"
                                    ></v-img>
                                </v-col>

                                <v-chip color="#048BA8" dark class="px-5">
                                    46
                                    <span style="opacity: 0.5">/156</span>
                                </v-chip>
                            </v-row>

                            <v-row no-gutters justify="space-between">
                                <span style="font-size: 15px"
                                    >Աշխ. ընդունման</span
                                >

                                <v-icon
                                    color="rgba(0, 0, 0, 0.23)"
                                    v-text="icons.mdiStarOutline"
                                ></v-icon>
                            </v-row>
                        </v-card>
                    </v-col>

                    <v-col cols="4">
                        <v-card class="pa-4 pt-3 mb-4">
                            <v-row
                                no-gutters
                                justify="space-between"
                                class="mb-2"
                            >
                                <v-col cols="auto">
                                    <v-img
                                        src="@/assets/home/statistics/process1.png"
                                        width="45"
                                        height="45"
                                    ></v-img>
                                </v-col>

                                <v-chip color="#048BA8" dark class="px-5">
                                    46
                                    <span style="opacity: 0.5">/156</span>
                                </v-chip>
                            </v-row>

                            <v-row no-gutters justify="space-between">
                                <span style="font-size: 15px"
                                    >Աշխ. ընդունման</span
                                >

                                <v-icon
                                    color="rgba(0, 0, 0, 0.23)"
                                    v-text="icons.mdiStarOutline"
                                ></v-icon>
                            </v-row>
                        </v-card>

                        <v-card class="pa-4 pt-3 mb-4">
                            <v-row
                                no-gutters
                                justify="space-between"
                                class="mb-2"
                            >
                                <v-col cols="auto">
                                    <v-img
                                        src="@/assets/home/statistics/process1.png"
                                        width="45"
                                        height="45"
                                    ></v-img>
                                </v-col>

                                <v-chip color="#048BA8" dark class="px-5">
                                    46
                                    <span style="opacity: 0.5">/156</span>
                                </v-chip>
                            </v-row>

                            <v-row no-gutters justify="space-between">
                                <span style="font-size: 15px"
                                    >Աշխ. ընդունման</span
                                >

                                <v-icon
                                    color="rgba(0, 0, 0, 0.23)"
                                    v-text="icons.mdiStarOutline"
                                ></v-icon>
                            </v-row>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-sheet>
</template>

<script>
import { mdiStarOutline } from "@mdi/js";

export default {
    data: () => ({
        icons: { mdiStarOutline },
        selectedInterval: 0,
        timeIntervals: ["Տարի", "Ամիս"],
    }),
};
</script>

<style scoped>
.b-title {
    color: #767676;
    font-size: 15px;
    text-transform: uppercase;
    margin-bottom: 10px;
}

.b-card-title {
    color: #767676;
    font-size: 15px;
    line-height: 17.25px;
}

.b-card-number {
    font-size: 25px;
    line-height: 28.75px;
}

.b-interval-radio {
    position: absolute;
    top: 22px;
    right: 27px;
    margin: 0;
    padding: 0;
}
</style>
