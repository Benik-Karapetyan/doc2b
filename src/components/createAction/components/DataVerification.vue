<template>
    <div>
        <v-row no-gutters align="center" class="mb-7">
            <v-col>
                <v-progress-linear
                    color="#FFC107"
                    :value="progress"
                ></v-progress-linear>
            </v-col>

            <span class="ml-2 text--secondary" style="font-size: 14px"
                >{{ progress }}%</span
            >
        </v-row>

        <v-text-field
            label="Անուն"
            class="mb-3"
            outlined
            dense
            hide-details="auto"
        ></v-text-field>

        <v-text-field
            label="Ազգանուն"
            class="mb-3"
            outlined
            dense
            hide-details="auto"
        ></v-text-field>

        <v-row no-gutters justify="end" class="mt-2 mb-5">
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

        <v-text-field
            label="Հայրանուն"
            class="mb-3"
            outlined
            dense
            hide-details="auto"
        ></v-text-field>

        <v-text-field
            label="Ծննդյան ամսաթիվ"
            class="mb-3"
            outlined
            dense
            hide-details="auto"
        ></v-text-field>

        <v-text-field
            label="Անձնագրի համար"
            outlined
            dense
            hide-details="auto"
        ></v-text-field>
    </div>
</template>

<script>
import { mdiCheck, mdiClose } from "@mdi/js";

export default {
    name: "DataVerification",

    data: () => ({
        icons: { mdiCheck, mdiClose },
        progress: 60,
    }),
};
</script>
