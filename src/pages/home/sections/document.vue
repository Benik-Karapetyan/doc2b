<template>
    <v-sheet
        color="#f7f7f7"
        class="ml-3 py-6 pl-10 pr-5 rounded-lg"
        height="calc(100vh - 189px)"
    >
        <template v-if="!documentsActive">
            <v-row no-gutters align="center">
                <v-icon color="#FFC107" v-text="icons.mdiStar"></v-icon>
                <span class="b-title ml-1 mr-4">Նախընտրելի փաստաթղթեր</span>

                <v-btn
                    v-if="favoriteDocuments.length"
                    icon
                    class="ml-12"
                    @click="documentsActive = true"
                >
                    <v-icon v-text="icons.mdiPencilOutline"></v-icon>
                </v-btn>
            </v-row>

            <v-row
                v-if="!favoriteDocuments.length"
                no-gutters
                justify="center"
                align="center"
                class="fill-height"
            >
                <v-col cols="auto" style="margin-bottom: 100px">
                    <v-img
                        src="@/assets/home/document/paper1.png"
                        width="150"
                        height="150"
                        class="mb-11 mx-auto"
                    ></v-img>

                    <v-btn
                        color="#FFC107"
                        width="225"
                        dark
                        depressed
                        @click="documentsActive = true"
                    >
                        ավելացնել
                        <v-icon class="ml-3" v-text="icons.mdiPlus"></v-icon>
                    </v-btn>
                </v-col>
            </v-row>

            <v-row v-else no-gutters class="ml-n2" style="margin-right: 150px">
                <v-col
                    v-for="(document, i) in favoriteDocuments"
                    :key="i"
                    cols="4"
                    class="pa-2"
                >
                    <v-card
                        elevation="1"
                        rounded="lg"
                        class="pa-4"
                        @click="document.isSelected = !document.isSelected"
                    >
                        <v-row
                            no-gutters
                            justify="space-between"
                            align="center"
                        >
                            <v-col cols="auto" class="b-pos-relative">
                                <img
                                    src="@/assets/home/document/paper1.png"
                                    width="31"
                                    height="31"
                                />

                                <v-avatar
                                    color="#0C465A"
                                    size="15"
                                    class="b-floating-plus"
                                >
                                    <v-icon
                                        color="white"
                                        v-text="icons.mdiPlus"
                                    ></v-icon>
                                </v-avatar>
                            </v-col>

                            <span style="font-size: 15px"
                                >աշխատանքի_ընդ.27_09_2021</span
                            >

                            <v-icon
                                :color="
                                    document.isSelected
                                        ? '#FFC107'
                                        : 'rgba(0, 0, 0, 0.23)'
                                "
                                v-text="
                                    document.isSelected
                                        ? icons.mdiStar
                                        : icons.mdiStarOutline
                                "
                            ></v-icon>
                        </v-row>
                    </v-card>
                </v-col>
            </v-row>
        </template>

        <template v-else>
            <v-row no-gutters justify="space-between" class="mb-3">
                <span class="b-title">
                    գործընթացներ -
                    <span class="font-weight-bold"
                        >{{ favoriteDocuments.length }}/{{
                            documents.length
                        }}</span
                    >
                </span>

                <v-btn
                    color="#FFC107"
                    width="225"
                    dark
                    depressed
                    @click="documentsActive = false"
                    >Պահպանել</v-btn
                >
            </v-row>

            <v-row no-gutters class="ml-n2" style="margin-right: 150px">
                <v-col
                    v-for="(document, i) in documents"
                    :key="i"
                    cols="4"
                    class="pa-2"
                >
                    <v-card
                        elevation="1"
                        rounded="lg"
                        class="pa-4"
                        @click="document.isSelected = !document.isSelected"
                    >
                        <v-row
                            no-gutters
                            justify="space-between"
                            align="center"
                        >
                            <v-col cols="auto" class="b-pos-relative">
                                <img
                                    src="@/assets/home/document/paper1.png"
                                    width="31"
                                    height="31"
                                />

                                <v-avatar
                                    color="#0C465A"
                                    size="15"
                                    class="b-floating-plus"
                                >
                                    <v-icon
                                        color="white"
                                        v-text="icons.mdiPlus"
                                    ></v-icon>
                                </v-avatar>
                            </v-col>

                            <span style="font-size: 15px"
                                >աշխատանքի_ընդ.27_09_2021</span
                            >

                            <v-icon
                                :color="
                                    document.isSelected
                                        ? '#FFC107'
                                        : 'rgba(0, 0, 0, 0.23)'
                                "
                                v-text="
                                    document.isSelected
                                        ? icons.mdiStar
                                        : icons.mdiStarOutline
                                "
                            ></v-icon>
                        </v-row>
                    </v-card>
                </v-col>
            </v-row>
        </template>
    </v-sheet>
</template>

<script>
import { mdiStar, mdiStarOutline, mdiPlus, mdiPencilOutline } from "@mdi/js";

export default {
    data: () => ({
        icons: { mdiStar, mdiStarOutline, mdiPlus, mdiPencilOutline },
        documentsActive: false,
        documents: [
            { title: "Աշխ. ընդունման", isSelected: false },
            { title: "Աշխ. ընդունման", isSelected: false },
            { title: "Աշխ. ընդունման", isSelected: false },
            { title: "Աշխ. ընդունման", isSelected: false },
            { title: "Աշխ. ընդունման", isSelected: false },
            { title: "Աշխ. ընդունման", isSelected: false },
        ],
    }),

    computed: {
        favoriteDocuments() {
            return this.documents.filter(action => action.isSelected);
        },
    },
};
</script>

<style scoped>
.b-title {
    color: #767676;
    font-size: 15px;
    text-transform: uppercase;
}

.b-floating-plus {
    position: absolute;
    left: 15px;
    bottom: 4px;
}
</style>
