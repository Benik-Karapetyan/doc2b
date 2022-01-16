<template>
    <v-sheet color="#e8e8e8" min-height="100%" class="pt-8">
        <v-row no-gutters justify="center">
            <v-col cols="10">
                <v-sheet
                    color="#f7f7f7"
                    class="ml-3 pa-10 rounded-lg"
                    min-height="calc(100vh - 148px)"
                >
                    <div class="b-title">իմ գործողությունները</div>

                    <v-card elevation="1" rounded="lg">
                        <v-row no-gutters>
                            <v-col cols="auto">
                                <v-treeview
                                    :items="items"
                                    dense
                                    transition
                                    hoverable
                                    :open.sync="open"
                                    style="font-size: 15px"
                                >
                                    <template v-slot:label="{ item, open }">
                                        <v-row no-gutters align="center">
                                            <span class="mr-2">{{
                                                item.name
                                            }}</span>

                                            <v-btn
                                                small
                                                icon
                                                @click="myFunc(item, open)"
                                            >
                                                <v-icon
                                                    size="20"
                                                    v-text="
                                                        icons.mdiPlusBoxOutline
                                                    "
                                                ></v-icon>
                                            </v-btn>

                                            <v-btn small icon>
                                                <v-icon
                                                    size="20"
                                                    v-text="icons.mdiPaperclip"
                                                ></v-icon>
                                            </v-btn>

                                            <v-btn small icon>
                                                <v-icon
                                                    color="red"
                                                    size="20"
                                                    v-text="
                                                        icons.mdiDeleteOutline
                                                    "
                                                ></v-icon>
                                            </v-btn>
                                        </v-row>
                                    </template>
                                </v-treeview>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-sheet>
            </v-col>
        </v-row>
    </v-sheet>
</template>

<script>
import { mdiPlusBoxOutline, mdiPaperclip, mdiDeleteOutline } from "@mdi/js";

export default {
    data: () => ({
        icons: { mdiPlusBoxOutline, mdiPaperclip, mdiDeleteOutline },
        open: [],
        items: [
            {
                id: 1,
                name: "Գործողություն 1",
                confirmed: true,
                children: [
                    {
                        id: 2,
                        name: "Գործողություն 1",
                        confirmed: true,
                        children: [
                            {
                                id: 1,
                                name: "Գործողություն 1",
                                confirmed: true,
                                children: [],
                            },
                            {
                                id: 2,
                                name: "Գործողություն 1",
                                confirmed: true,
                                children: [],
                            },
                            {
                                id: 3,
                                name: "Գործողություն 1",
                                confirmed: true,
                                children: [],
                            },
                            {
                                id: 4,
                                name: "Գործողություն 1",
                                confirmed: true,
                                children: [],
                            },
                        ],
                    },
                ],
            },
        ],
    }),

    methods: {
        myFunc(item) {
            item.children.push({
                id: item.id++ + " " + item.name,
                name: "Գործողություն 1",
                confirmed: false,
                children: [],
            });
        },
    },

    watch: {
        open(val) {
            console.log("Open", val);
        },
    },
};
</script>

<style scoped>
.b-title {
    color: #767676;
    font-size: 15px;
    text-transform: uppercase;
    margin-bottom: 190px;
}
</style>
