<template>
    <v-sheet color="#e8e8e8" min-height="100%" class="pt-8">
        <v-row no-gutters justify="center">
            <v-col cols="10">
                <v-sheet
                    color="#f7f7f7"
                    class="ml-3 pa-10 rounded-lg"
                    min-height="calc(100vh - 148px)"
                >
                    <div class="b-title">ընդհանուր կարգավորումներ</div>

                    <v-row
                        no-gutters
                        align-content="center"
                        justify="center"
                        style="min-height: calc(100vh - 251px)"
                    >
                        <v-sheet
                            color="white"
                            rounded="lg"
                            width="620"
                            class="pt-2 px-7 pb-5 mb-5"
                        >
                            <v-row no-gutters align="center" class="mb-5">
                                <v-sheet width="80">
                                    <v-divider></v-divider>
                                </v-sheet>
                                <span class="b-subtitle"
                                    >Ծրագրի ինտերֆեյսի լեզուն</span
                                >
                                <v-divider></v-divider>
                            </v-row>

                            <v-row no-gutters>
                                <v-btn color="#FFC107" dark depressed
                                    >Հայերեն</v-btn
                                >

                                <div style="border-right: 1px solid #ffc107">
                                    <v-btn text>Ռուսերեն</v-btn>
                                </div>

                                <v-btn text>անգլերեն</v-btn>
                            </v-row>
                        </v-sheet>

                        <v-sheet
                            color="white"
                            rounded="lg"
                            width="620"
                            class="pt-2 px-7 pb-5"
                        >
                            <v-row no-gutters align="center" class="mb-5">
                                <v-sheet width="80">
                                    <v-divider></v-divider>
                                </v-sheet>
                                <span class="b-subtitle">Ջնջել հաշիվը</span>
                                <v-divider></v-divider>
                            </v-row>

                            <v-alert
                                color="#D36E6E"
                                dark
                                style="
                                    font-size: 14px;
                                    color: rgba(255, 255, 255, 0.8);
                                "
                                class="pr-2 mb-0"
                            >
                                <v-row no-gutters align="center">
                                    <v-icon
                                        class="mr-4"
                                        v-text="icons.mdiAlertCircleOutline"
                                    ></v-icon>

                                    <v-col cols="8">
                                        Սեղմելով ՀԱՍՏԱՏԵԼ կոճակը դուք կջնջեք ձեր
                                        հաշիվը: Այն կարելի է վերականգնել մոտակա
                                        20 օրերի ընթացքում՝ հաստատելով հետադարձ
                                        կապ մեզ հետ:
                                    </v-col>

                                    <v-spacer></v-spacer>

                                    <v-btn class="px-3" text>Հաստատել</v-btn>
                                </v-row>
                            </v-alert>
                        </v-sheet>
                    </v-row>
                </v-sheet>
            </v-col>
        </v-row>
    </v-sheet>
</template>

<script>
import { mdiAlertCircleOutline } from "@mdi/js";

export default {
    data: () => ({
        icons: { mdiAlertCircleOutline },
    }),
};
</script>

<style scoped>
.b-title {
    color: #767676;
    font-size: 15px;
    text-transform: uppercase;
}

.b-subtitle {
    margin: 0 12px;
    font-size: 12px;
    line-height: 266%;
    letter-spacing: 1px;
}
</style>
