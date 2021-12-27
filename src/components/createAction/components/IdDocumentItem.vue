<template>
    <div>
        <v-row no-gutters class="mb-4">
            <v-icon
                color="rgba(0, 0, 0, 0.23)"
                class="mr-2 ml-n1"
                size="39"
                v-text="icons.mdiImageOutline"
            ></v-icon>

            <v-col style="margin-top: 2px">
                <v-row no-gutters justify="space-between">
                    <span style="font-size: 15px" v-text="item.name"></span>

                    <v-icon
                        color="rgba(0, 0, 0, 0.23)"
                        class="b-clickable"
                        v-text="icons.mdiClose"
                    ></v-icon>
                </v-row>

                <v-progress-linear
                    color="#2196F3"
                    :value="item.uploadValue"
                    style="margin-top: 3px; margin-bottom: 5px"
                ></v-progress-linear>

                <v-row no-gutters justify="space-between">
                    <v-col>
                        <v-icon
                            v-if="item.uploadValue === 100"
                            color="#4CAF50"
                            class="mr-1"
                            size="19"
                            v-text="icons.mdiCheckCircleOutline"
                        ></v-icon>

                        <span
                            class="text--secondary font-italic"
                            style="font-size: 13px"
                            v-text="item.fileName"
                        ></span>
                    </v-col>

                    <span style="color: rgba(0, 0, 0, 0.23); font-size: 13px"
                        >{{ item.fileSize }} MB</span
                    >
                </v-row>
            </v-col>
        </v-row>

        <v-divider class="mb-4"></v-divider>
    </div>
</template>

<script>
import { mdiImageOutline, mdiClose, mdiCheckCircleOutline } from "@mdi/js";

export default {
    name: "IdDocumentItem",

    props: {
        item: Object,
    },

    data: () => ({
        icons: { mdiImageOutline, mdiClose, mdiCheckCircleOutline },
    }),
};
</script>
