<template>
    <div>
        <v-btn
            color="#FFC107"
            class="text-capitalize mb-3"
            style="font-size: 15px; letter-spacing: 0.16px"
            dark
            block
            depressed
            >Ստանդարտ</v-btn
        >

        <v-btn
            class="text-capitalize text--secondary"
            style="
                font-size: 15px;
                letter-spacing: 0.16px;
                border: 1px solid rgba(0, 0, 0, 0.23);
            "
            block
            @click="editDialog = true"
        >
            <v-icon
                color="#FFC107"
                class="mr-1"
                v-text="icons.mdiPencilOutline"
            ></v-icon>
            Խմբագրել պարտականությունները</v-btn
        >

        <EditResponsibilitiesDialog
            :value="editDialog"
            @cancel="editDialog = false"
            @save="
                () => {
                    editDialog = false;
                    $emit('click');
                }
            "
        />
    </div>
</template>

<script>
import { mdiPencilOutline } from "@mdi/js";
import EditResponsibilitiesDialog from "./responsibilities/EditResponsibilitiesDialog.vue";

export default {
    name: "Responsibilities",

    components: { EditResponsibilitiesDialog },

    data: () => ({
        icons: {
            mdiPencilOutline,
        },
        editDialog: false,
    }),
};
</script>
