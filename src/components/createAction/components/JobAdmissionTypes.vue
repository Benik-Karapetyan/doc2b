<template>
    <div>
        <v-row
            v-for="(jobType, i) in jobAdmissionTypes"
            :key="i"
            no-gutters
            style="padding: 5px 0"
        >
            <v-col>
                <v-hover v-slot="{ hover }">
                    <v-alert
                        :color="hover ? '#FFC107' : 'rgba(0, 0, 0, 0.23)'"
                        role="listitem"
                        class="mb-0 py-0 px-3 rounded-pill b-clickable"
                        style="font-size: 15px"
                        text
                        outlined
                        dense
                        @click="$emit('click', jobType)"
                    >
                        <span
                            :class="hover ? 'text--primary' : 'text--secondary'"
                            v-text="jobType.title"
                        ></span>
                    </v-alert>
                </v-hover>
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
    name: "JobAdmissionTypes",

    data: () => ({
        icons: { mdiStarOutline },
        jobAdmissionTypes: [
            { title: "Մշտական" },
            { title: "Ժամանակավոր" },
            { title: "Վճարովի ծառայությունների մատուցման" },
            { title: "Կամավոր աշխատանքների մատուցման" },
            { title: "Նախագծային" },
        ],
    }),
};
</script>
