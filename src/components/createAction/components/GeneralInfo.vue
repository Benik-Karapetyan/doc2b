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
export default {
    name: "GeneralInfo",

    data: () => ({
        progress: 60,
    }),
};
</script>
