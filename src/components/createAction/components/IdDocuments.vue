<template>
    <div>
        <IdDocumentItem v-for="(doc, i) in idDocuments" :key="i" :item="doc" />

        <v-row
            no-gutters
            justify="center"
            align="center"
            class="b-outlined rounded-lg py-4 mb-8"
            style="font-size: 15px"
        >
            ID քարտ
            <v-icon
                color="#FFC107"
                class="ml-2"
                v-text="icons.mdiAttachment"
            ></v-icon>
        </v-row>

        <v-row
            no-gutters
            justify="center"
            style="background-color: rgba(0, 0, 0, 0.03)"
            class="b-dashed rounded-lg py-11 text--secondary"
        >
            <v-icon
                color="#FFC107"
                class="mr-2"
                v-text="icons.mdiPlusCircleOutline"
            ></v-icon>
            ԱՎԵԼԱՑՆԵԼ ԱՀ ՓԱՍՏԱԹՈՒՂԹ
        </v-row>
    </div>
</template>

<script>
import { mdiAttachment, mdiPlusCircleOutline } from "@mdi/js";
import IdDocumentItem from "./IdDocumentItem.vue";

export default {
    name: "IdDocuments",

    components: { IdDocumentItem },

    data: () => ({
        icons: { mdiAttachment, mdiPlusCircleOutline },
        idDocuments: [
            {
                name: "Անձնագիր",
                fileName: "passport.png",
                fileSize: 2.1,
                uploadValue: 50,
            },
            {
                name: "Սոցիալական քարտ",
                fileName: "social_card.jpg",
                fileSize: 2.1,
                uploadValue: 100,
            },
        ],
    }),
};
</script>

<style scoped>
.b-outlined {
    border: 1px solid rgba(0, 0, 0, 0.23);
}

.b-dashed {
    border: 1px dashed rgba(0, 0, 0, 0.23);
}
</style>
