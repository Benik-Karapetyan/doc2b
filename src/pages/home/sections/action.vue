<template>
    <v-sheet
        color="#f7f7f7"
        class="ml-3 py-4 pl-10 pr-5 rounded-lg"
        height="calc(100vh - 189px)"
    >
        <template v-if="!actionsActive">
            <v-row no-gutters align="center">
                <v-icon color="#FFC107" v-text="icons.mdiStar"></v-icon>
                <span class="b-title ml-1 mr-4">Նախընտրելի գործընթացներ</span>

                <v-btn
                    v-if="favoriteActions.length"
                    icon
                    class="ml-12"
                    @click="actionsActive = true"
                >
                    <v-icon v-text="icons.mdiPencilOutline"></v-icon>
                </v-btn>
            </v-row>

            <v-row
                v-if="!favoriteActions.length"
                no-gutters
                justify="center"
                align="center"
                class="fill-height"
            >
                <v-col cols="auto" style="margin-bottom: 100px">
                    <v-img
                        src="@/assets/home/action/process1.png"
                        width="155"
                        height="155"
                        class="mb-11 mx-auto"
                    ></v-img>

                    <v-btn
                        color="#FFC107"
                        width="225"
                        dark
                        depressed
                        @click="actionsActive = true"
                    >
                        ավելացնել
                        <v-icon class="ml-3" v-text="icons.mdiPlus"></v-icon>
                    </v-btn>
                </v-col>
            </v-row>

            <v-row v-else no-gutters class="ml-n2" style="margin-right: 80px">
                <v-col
                    v-for="(action, i) in favoriteActions"
                    :key="i"
                    cols="2"
                    class="pa-2"
                >
                    <v-card
                        elevation="1"
                        rounded="lg"
                        class="pa-4 pt-3"
                        @click="action.isSelected = !action.isSelected"
                    >
                        <v-row
                            no-gutters
                            justify="space-between"
                            align="start"
                            class="mb-2"
                        >
                            <img
                                src="@/assets/home/action/process1.png"
                                width="45"
                                height="45"
                            />
                        </v-row>
                        <span style="font-size: 15px">Աշխ. ընդունման</span>
                    </v-card>
                </v-col>
            </v-row>
        </template>

        <template v-else>
            <v-row no-gutters justify="space-between" class="mb-3">
                <span class="b-title">
                    գործընթացներ -
                    <span class="font-weight-bold"
                        >{{ favoriteActions.length }}/{{ actions.length }}</span
                    >
                </span>

                <v-btn
                    color="#FFC107"
                    width="225"
                    dark
                    depressed
                    @click="actionsActive = false"
                    >Պահպանել</v-btn
                >
            </v-row>

            <v-row no-gutters class="ml-n2" style="margin-right: 80px">
                <v-col
                    v-for="(action, i) in actions"
                    :key="i"
                    cols="2"
                    class="pa-2"
                >
                    <v-card
                        elevation="1"
                        rounded="lg"
                        class="pa-4 pt-3"
                        @click="action.isSelected = !action.isSelected"
                    >
                        <v-row
                            no-gutters
                            justify="space-between"
                            align="start"
                            class="mb-2"
                        >
                            <img
                                src="@/assets/home/action/process1.png"
                                width="45"
                                height="45"
                            />

                            <v-icon
                                :color="
                                    action.isSelected
                                        ? '#FFC107'
                                        : 'rgba(0, 0, 0, 0.23)'
                                "
                                v-text="
                                    action.isSelected
                                        ? icons.mdiStar
                                        : icons.mdiStarOutline
                                "
                            ></v-icon>
                        </v-row>
                        <span style="font-size: 15px">Աշխ. ընդունման</span>
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
        actionsActive: false,
        actions: [
            { title: "Աշխ. ընդունման", isSelected: false },
            { title: "Աշխ. ընդունման", isSelected: false },
            { title: "Աշխ. ընդունման", isSelected: false },
            { title: "Աշխ. ընդունման", isSelected: false },
            { title: "Աշխ. ընդունման", isSelected: false },
            { title: "Աշխ. ընդունման", isSelected: false },
        ],
    }),

    computed: {
        favoriteActions() {
            return this.actions.filter(action => action.isSelected);
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
</style>
