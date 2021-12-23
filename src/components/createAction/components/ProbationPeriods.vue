<template>
    <div>
        <v-row
            v-for="(period, i) in probationPeriods"
            :key="i"
            no-gutters
            style="padding: 5px 0"
        >
            <v-col>
                <v-alert
                    :color="
                        selectedPeriod === i ? '#FFC107' : 'rgba(0, 0, 0, 0.23)'
                    "
                    role="listitem"
                    class="mb-0 py-0 px-3 rounded-pill b-clickable"
                    style="font-size: 15px"
                    text
                    outlined
                    dense
                    @click="selectedPeriod = i"
                >
                    <span
                        :class="
                            selectedPeriod === i
                                ? 'text--primary'
                                : 'text--secondary'
                        "
                        v-text="period.title"
                    ></span>
                </v-alert>
            </v-col>

            <v-icon
                color="rgba(0, 0, 0, 0.23)"
                class="ml-2"
                v-text="icons.mdiStarOutline"
            ></v-icon>
        </v-row>
    </div>
</template>

<script>
import { mdiStarOutline } from "@mdi/js";

export default {
    name: "ProbationPeriods",

    data: () => ({
        icons: { mdiStarOutline },
        probationPeriods: [
            { title: "Երեք ամիս" },
            { title: "Չորս ամիս" },
            { title: "Անժամկետ" },
        ],
        selectedPeriod: null,
    }),
};
</script>
