<template>
    <v-dialog :value="value" width="500" @input="$emit('cancel')">
        <v-card class="b-container">
            <v-row
                v-for="(resp, i) in responsibilities"
                :key="i"
                :class="resp.isActive ? 'b-shadowed' : 'b-outlined'"
                class="my-3 pa-4 rounded-lg"
                :style="{ opacity: resp.isActive ? 1 : 0.6 }"
                no-gutters
                align="center"
            >
                <v-col cols="auto">
                    <v-icon class="mb-n4" v-text="icons.mdiMinus"></v-icon>
                    <br />
                    <v-icon class="mt-n6" v-text="icons.mdiMinus"></v-icon>
                </v-col>

                <v-btn
                    :color="resp.isActive ? '#FFC107' : ''"
                    class="mx-2"
                    icon
                    @click="resp.isActive = !resp.isActive"
                >
                    <v-icon
                        size="22"
                        v-text="
                            resp.isActive
                                ? icons.mdiCheckboxOutline
                                : icons.mdiCheckboxBlankOutline
                        "
                    ></v-icon>
                </v-btn>

                <span style="font-size: 15px">{{ resp.name }}</span>
            </v-row>

            <v-row
                no-gutters
                justify="center"
                style="background-color: rgba(0, 0, 0, 0.03); font-size: 15px"
                class="b-dashed rounded-lg py-4 text--secondary b-text-unselectable b-clickable mt-3 mb-7"
                @click="
                    responsibilities.push({
                        name: 'Պարտականություն մեկ',
                        isActive: false,
                    })
                "
            >
                <v-icon
                    color="#FFC107"
                    class="mr-2"
                    v-text="icons.mdiPlusCircleOutline"
                ></v-icon>
                ԱՎԵԼԱՑՆԵԼ ՆՈՐ ՊԱՐՏԱԿԱՆՈՒԹՅՈՒՆ
            </v-row>

            <v-card-actions class="pa-0 justify-end">
                <v-btn
                    color="#FFC107"
                    class="mr-7"
                    width="121"
                    style="border: 2px solid #ffc107"
                    dark
                    text
                    @click="$emit('cancel')"
                >
                    <v-icon size="20" v-text="icons.mdiArrowLeft"></v-icon>
                    ՉԵՂԱՐԿԵԼ
                </v-btn>

                <v-btn
                    color="#FFC107"
                    width="121"
                    dark
                    depressed
                    @click="$emit('save')"
                >
                    ՊԱՀՊԱՆԵԼ
                    <v-icon
                        size="20"
                        class="ml-1"
                        v-text="icons.mdiArrowRight"
                    ></v-icon>
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import {
    mdiMinus,
    mdiCheckboxBlankOutline,
    mdiCheckboxOutline,
    mdiPlusCircleOutline,
} from "@mdi/js";

export default {
    name: "EditResponsibilitiesDialog",

    props: {
        value: Boolean,
    },

    data: () => ({
        icons: {
            mdiMinus,
            mdiCheckboxBlankOutline,
            mdiCheckboxOutline,
            mdiPlusCircleOutline,
        },
        responsibilities: [
            { name: "Պարտականություն մեկ", isActive: false },
            { name: "Պարտականություն մեկ", isActive: false },
            { name: "Պարտականություն մեկ", isActive: false },
            { name: "Պարտականություն մեկ", isActive: false },
            { name: "Պարտականություն մեկ", isActive: false },
        ],
    }),
};
</script>

<style scoped>
.b-container {
    max-height: calc(100vh - 213.59px);
    overflow: auto;
    padding: 50px 30px;
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

.b-outlined {
    border: 1px solid rgba(0, 0, 0, 0.23);
}

.b-dashed {
    border: 1px dashed rgba(0, 0, 0, 0.23);
}
</style>
