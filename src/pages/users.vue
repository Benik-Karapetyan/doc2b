<template>
    <v-sheet color="#e8e8e8" min-height="100%" class="pt-8 pb-12 mb-12">
        <v-row no-gutters justify="center">
            <v-col cols="10">
                <v-sheet
                    color="#f7f7f7"
                    class="ml-3 pa-10 rounded-lg"
                    min-height="calc(100vh - 248px)"
                >
                    <div class="b-title">օգտատերեր</div>

                    <v-sheet class="pa-10">
                        <v-row
                            no-gutters
                            justify="space-between"
                            align="center"
                            class="mb-5"
                        >
                            <v-col cols="auto">
                                <v-tabs
                                    v-model="tab"
                                    color="rgba(0, 0, 0, 0.87)"
                                >
                                    <v-tab
                                        v-for="tab in tabs"
                                        :key="tab"
                                        class="text-capitalize"
                                        v-text="tab"
                                    ></v-tab>
                                </v-tabs>
                                <v-divider></v-divider>
                            </v-col>

                            <v-btn color="#FFC107" dark depressed>
                                <v-icon
                                    class="mr-2"
                                    v-text="icons.mdiAccountPlusOutline"
                                ></v-icon>
                                ավելացնել
                            </v-btn>
                        </v-row>

                        <v-sheet max-width="92%">
                            <v-row
                                no-gutters
                                justify="space-between"
                                class="mb-5"
                            >
                                <v-btn
                                    color="#FFC107"
                                    class="text-capitalize"
                                    height="40"
                                    dark
                                    depressed
                                    style="font-size: 1rem"
                                >
                                    Ֆիլտր
                                    <v-icon
                                        class="ml-3"
                                        v-text="icons.mdiFilterVariant"
                                    ></v-icon>
                                </v-btn>

                                <v-sheet width="345">
                                    <v-text-field
                                        color="#FFC107"
                                        outlined
                                        rounded
                                        dense
                                        hide-details
                                        :append-icon="icons.mdiMagnify"
                                    ></v-text-field>
                                </v-sheet>
                            </v-row>

                            <v-data-table
                                :headers="headers"
                                :items="users"
                                hide-default-header
                                hide-default-footer
                            >
                                <template v-slot:header>
                                    <tr style="background-color: #f2f2f2">
                                        <th
                                            v-for="(header, i) in headers"
                                            :key="i"
                                            class="font-weight-bold text-left py-2 px-4"
                                            style="font-size: 14px"
                                        >
                                            {{ header.text }}
                                        </th>
                                    </tr>
                                </template>

                                <template v-slot:item.date="{ item }">
                                    <v-alert
                                        color="#4CAF50"
                                        class="font-weight-bold mb-0 py-1 px-5"
                                        text
                                        dense
                                        style="font-size: 14px"
                                        v-text="item.date"
                                    ></v-alert>
                                </template>

                                <template v-slot:item.documents="{ item }">
                                    <v-row
                                        no-gutters
                                        justify="space-between"
                                        align="center"
                                    >
                                        <v-col cols="auto">
                                            <v-icon
                                                v-text="
                                                    icons.mdiFileDocumentOutline
                                                "
                                            ></v-icon>
                                            {{ item.documents }}
                                        </v-col>

                                        <v-btn
                                            color="#FFC107"
                                            class="font-weight-bold"
                                            text
                                            small
                                        >
                                            դիտել
                                            <v-icon
                                                class="ml-2"
                                                small
                                                v-text="icons.mdiArrowRight"
                                            ></v-icon>
                                        </v-btn>
                                    </v-row>
                                </template>

                                <template v-slot:item.price="{ item }">
                                    <span
                                        class="font-weight-bold"
                                        v-text="item.price"
                                    ></span>
                                </template>

                                <template v-slot:item.actions>
                                    <v-btn icon>
                                        <v-icon
                                            v-text="icons.mdiDotsVertical"
                                        ></v-icon>
                                    </v-btn>
                                </template>

                                <template v-slot:footer>
                                    <v-row
                                        no-gutters
                                        align="center"
                                        class="py-2 px-2"
                                        style="
                                            background-color: #f2f2f2;
                                            font-size: 12px;
                                        "
                                    >
                                        <div
                                            class="font-weight-bold text--secondary ml-auto mr-3"
                                        >
                                            Տողերի քանակ:
                                        </div>

                                        <v-select
                                            :items="[5, 10, 15, 'All']"
                                            hide-details
                                            class="mt-0 pt-0 mr-12"
                                            style="
                                                font-size: 12px;
                                                max-width: 45.35px;
                                            "
                                        ></v-select>

                                        <div
                                            class="font-weight-bold text--secondary mr-10"
                                        >
                                            Էջ 1, 20-ից
                                        </div>

                                        <v-btn class="mr-10" icon>
                                            <v-icon
                                                v-text="icons.mdiChevronLeft"
                                            ></v-icon>
                                        </v-btn>

                                        <v-btn icon>
                                            <v-icon
                                                v-text="icons.mdiChevronRight"
                                            ></v-icon>
                                        </v-btn>
                                    </v-row>
                                </template>
                            </v-data-table>
                        </v-sheet>
                    </v-sheet>
                </v-sheet>
            </v-col>
        </v-row>
    </v-sheet>
</template>

<script>
import {
    mdiAccountPlusOutline,
    mdiFilterVariant,
    mdiMagnify,
    mdiChevronLeft,
    mdiChevronRight,
    mdiDotsVertical,
} from "@mdi/js";

export default {
    data: () => ({
        icons: {
            mdiAccountPlusOutline,
            mdiFilterVariant,
            mdiMagnify,
            mdiChevronLeft,
            mdiChevronRight,
            mdiDotsVertical,
        },
        tab: null,
        tabs: ["Բոլորը", "Ակտիվ", "Կասեցված", "Հրավիրված", "Ջնջված"],
        headers: [
            { text: "ՕԳՏԱՏԵՐ", value: "user" },
            { text: "ԷԼ.ՓՈՍՏ", value: "email" },
            { text: "ԴԵՐ", value: "role" },
            { text: "ԿԱՐԳԱՎԻՃԱԿ", value: "status" },
            { text: "", value: "actions" },
        ],
        users: [
            {
                user: "Աննա Հովհաննիսյան",
                email: "example@email.com",
                role: "Ադմինիստրատոր",
                status: "active",
                statusText: "Վերջին մուտք՝ 25 Նոյեմբեր 2021",
            },
            {
                user: "Աննա Հովհաննիսյան",
                email: "example@email.com",
                role: "Ադմինիստրատոր",
                status: "active",
                statusText: "Կասեցման ամսաթիվ՝ 25 Նոյեմբեր 2021",
            },
            {
                user: "Աննա Հովհաննիսյան",
                email: "example@email.com",
                role: "Ադմինիստրատոր",
                status: "active",
                statusText: "Հրավերի ամսաթիվ՝ 25 Նոյեմբեր 2021",
            },
            {
                user: "Աննա Հովհաննիսյան",
                email: "example@email.com",
                role: "Ադմինիստրատոր",
                status: "active",
                statusText: "Ջնջման ամսաթիվ՝ 25 Նոյեմբեր 2021",
            },
        ],
    }),
};
</script>

<style scoped>
.b-title {
    color: #767676;
    font-size: 15px;
    text-transform: uppercase;
    margin-bottom: 52px;
}
</style>
