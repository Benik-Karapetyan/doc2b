<template>
    <div class="b-container">
        <v-row
            v-for="(document, i) in documents"
            :key="i"
            class="b-shadowed my-1 pa-4 rounded-lg"
            style="opacity: 1"
            no-gutters
            align="center"
        >
            <img
                src="@/assets/home/document/paper1.png"
                width="31"
                height="31"
                class="mr-4"
            />

            <div
                style="max-width: 250px; font-size: 15px"
                v-text="document.title"
            ></div>
        </v-row>

        <v-btn color="#FFC107" class="mt-3 mb-7" dark block depressed>
            <v-icon
                class="mr-2"
                v-text="icons.mdiCloudDownloadOutline"
            ></v-icon>
            Ներբեռնել
        </v-btn>

        <v-text-field
            label="Էլ. փոստ"
            class="mb-3"
            outlined
            dense
            hide-details="auto"
        ></v-text-field>

        <v-btn color="#4CAF50" dark block depressed>
            ուղարկել
            <v-icon
                class="ml-2"
                size="22"
                v-text="icons.mdiSendOutline"
            ></v-icon>
        </v-btn>
    </div>
</template>

<script>
import { mdiCloudDownloadOutline, mdiSendOutline } from "@mdi/js";

export default {
    name: "Summary",

    data: () => ({
        icons: { mdiCloudDownloadOutline, mdiSendOutline },
        documents: [
            { title: "Ընդունման դիմում", isActive: false },
            { title: "Ընդունման դիմում", isActive: false },
            { title: "Ընդունման դիմում", isActive: false },
        ],
    }),
};
</script>

<style scoped>
.b-container {
    padding: 0 4px;
    max-height: calc(100vh - 413.59px);
    overflow: auto;
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

.b-shadowed {
    box-shadow: -1px -1px 10px #ffffff, 1px 1px 10px #d9d9d9;
}
</style>
