<template>
    <v-row
        no-gutters
        justify="center"
        align="center"
        class="b-create-action-overlay"
    >
        <v-card rounded="lg" width="419" class="pa-7">
            <v-row no-gutters justify="end">
                <v-btn icon>
                    <v-icon v-text="icons.mdiClose"></v-icon>
                </v-btn>
            </v-row>

            <v-card-title
                class="text-uppercase mb-7 pa-0"
                style="font-size: 18px"
            >
                <v-avatar
                    color="#FFC107"
                    class="white--text rounded mr-2"
                    size="40"
                    tile
                >
                    <span style="font-size: 25px" v-text="step"></span>
                </v-avatar>
                {{ title }}
            </v-card-title>

            <v-window v-model="step" class="mb-7">
                <v-window-item :value="1">
                    <JobAdmissionTypes />
                </v-window-item>

                <v-window-item :value="2">
                    <ProbationPeriods />
                </v-window-item>

                <v-window-item :value="3">
                    <JobApplication />
                </v-window-item>

                <v-window-item :value="4">
                    <IdDocuments />
                </v-window-item>

                <v-window-item :value="5">
                    <GeneralInfo />
                </v-window-item>
            </v-window>

            <v-card-actions class="pa-0 justify-space-between">
                <v-btn
                    color="#FFC107"
                    width="121"
                    outlined
                    :disabled="step === 1"
                    @click="step--"
                >
                    <v-icon size="20" v-text="icons.mdiArrowLeft"></v-icon>
                    նախորդ
                </v-btn>

                <v-btn
                    color="#FFC107"
                    width="121"
                    dark
                    depressed
                    @click="step++"
                >
                    հաջորդ
                    <v-icon
                        size="20"
                        class="ml-1"
                        v-text="icons.mdiArrowRight"
                    ></v-icon>
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-row>
</template>

<script>
import { mdiClose, mdiArrowLeft, mdiArrowRight } from "@mdi/js";
import JobAdmissionTypes from "./components/JobAdmissionTypes.vue";
import ProbationPeriods from "./components/ProbationPeriods.vue";
import JobApplication from "./components/JobApplication.vue";
import IdDocuments from "./components/IdDocuments.vue";
import GeneralInfo from "./components/GeneralInfo.vue";

export default {
    name: "CreateAction",

    components: {
        JobAdmissionTypes,
        ProbationPeriods,
        JobApplication,
        IdDocuments,
        GeneralInfo,
    },

    data: () => ({
        icons: { mdiClose, mdiArrowLeft, mdiArrowRight },
        step: 4,
    }),

    computed: {
        title() {
            switch (this.step) {
                case 1:
                    return "Աշխատանքի ընդունման տեսակ";
                case 2:
                    return "փորձաշրջանի տեվողություն";
                case 3:
                    return "աշխատանքի դիմում";
                case 4:
                    return "ԱՀ փաստաթղթեր";
                case 5:
                    return "ընդհանուր տվյալներ";
                case 6:
                    return "պարտականություններ";
                case 7:
                    return "տվյալների ստուգում";
                case 8:
                    return "Ամփոփում";
                default:
                    return "";
            }
        },
    },
};
</script>

<style scoped>
.b-create-action-overlay {
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(214, 227, 230, 0.2);
    backdrop-filter: blur(50px);
    width: 100vw;
    height: 100vh;
    z-index: 5;
}

.b-outlined {
    border: 1px solid rgba(0, 0, 0, 0.12);
}
</style>
