<template>
    <v-row
        no-gutters
        justify="center"
        align="center"
        class="b-create-action-overlay"
    >
        <v-sheet
            rounded="lg"
            width="481"
            class="pa-7 mb-4"
            style="box-shadow: 1px 1px 30px rgba(0, 0, 0, 0.2)"
        >
            <v-row no-gutters justify="end">
                <v-btn icon @click="setCreateAction(false)">
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
                    <JobAdmissionTypes @click="step++" />
                </v-window-item>

                <v-window-item :value="2">
                    <ProbationPeriods @click="step++" />
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

                <v-window-item :value="6">
                    <Responsibilities @click="step++" />
                </v-window-item>

                <v-window-item :value="7">
                    <DataVerification />
                </v-window-item>

                <v-window-item :value="8">
                    <Summary />
                </v-window-item>
            </v-window>

            <v-card-actions class="pa-0">
                <v-btn
                    v-if="step > 1 && step < 8"
                    color="#FFC107"
                    class="mr-7 px-4"
                    :style="{
                        border:
                            step === 1
                                ? '2px solid rgba(0, 0, 0, 0.16)'
                                : '2px solid #ffc107',
                    }"
                    text
                    :disabled="step === 1"
                    @click="step--"
                >
                    <v-icon
                        size="20"
                        class="mr-1"
                        v-text="icons.mdiArrowLeft"
                    ></v-icon>
                    նախորդ
                </v-btn>

                <v-spacer></v-spacer>

                <v-btn
                    v-if="step > 2 && step < 8"
                    color="#FFC107"
                    class="px-4"
                    dark
                    depressed
                    @click="step++"
                >
                    հաջորդ
                    <v-icon
                        size="20"
                        class="ml-2"
                        v-text="icons.mdiArrowRight"
                    ></v-icon>
                </v-btn>

                <v-btn
                    v-if="step === 8"
                    color="#FFC107"
                    class="px-4"
                    dark
                    depressed
                    >ավարտել</v-btn
                >
            </v-card-actions>
        </v-sheet>
    </v-row>
</template>

<script>
import { mdiClose, mdiArrowLeft, mdiArrowRight } from "@mdi/js";
import { mapMutations } from "vuex";
import JobAdmissionTypes from "./components/JobAdmissionTypes.vue";
import ProbationPeriods from "./components/ProbationPeriods.vue";
import JobApplication from "./components/JobApplication.vue";
import IdDocuments from "./components/IdDocuments.vue";
import GeneralInfo from "./components/GeneralInfo.vue";
import Responsibilities from "./components/Responsibilities.vue";
import DataVerification from "./components/DataVerification.vue";
import Summary from "./components/Summary.vue";

export default {
    name: "CreateAction",

    components: {
        JobAdmissionTypes,
        ProbationPeriods,
        JobApplication,
        IdDocuments,
        GeneralInfo,
        Responsibilities,
        DataVerification,
        Summary,
    },

    data: () => ({
        icons: { mdiClose, mdiArrowLeft, mdiArrowRight },
        step: 1,
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

    methods: {
        ...mapMutations(["setCreateAction"]),
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

<style>
.b-container {
    max-height: calc(100vh - 413.59px);
    overflow: auto;
    padding: 0 10px 0 5px;
}

.b-container::-webkit-scrollbar {
    width: 5px;
    height: 5px;
    border-radius: 8px;
}

.b-container::-webkit-scrollbar-track {
    border-radius: 8px;
}

.b-container::-webkit-scrollbar-thumb {
    background: #c4c4c4;
    border-radius: 8px;
}
</style>
