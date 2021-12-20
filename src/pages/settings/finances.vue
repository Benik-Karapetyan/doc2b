<template>
    <v-sheet color="#e8e8e8" min-height="100%" class="pt-8">
        <v-row no-gutters justify="center">
            <v-col cols="10">
                <v-sheet
                    color="#f7f7f7"
                    class="ml-3 pa-10 pt-12 rounded-lg"
                    min-height="calc(100vh - 248px)"
                >
                    <div class="b-title">ֆինանսներ</div>

                    <v-row no-gutters justify="center">
                        <v-col cols="8">
                            <v-card elevation="0" rounded="lg" class="py-12">
                                <v-card-title class="justify-center pa-0 mb-5">
                                    <v-col cols="auto" class="pa-0 text-center">
                                        <span class="text--secondary">
                                            Հարգելի
                                        </span>

                                        <h1 class="text-h4">ՆԱՐԵԿ</h1>
                                    </v-col>
                                </v-card-title>

                                <v-card-text
                                    class="text-center mb-8 px-12"
                                    style="font-size: 15px"
                                >
                                    Ստորև ներկայացված են նախորդ և ներկայիս
                                    ամիսների ֆինանսական բացվածքները՝ ելնելով
                                    ծրագրում ստեղծված փաստաթղթերի քանակից:
                                    Բացվածքները նաև պարունակում են
                                    տեղեկատվություն ձեր ընթացիկ պարտավորության
                                    մասին՝ արտահայտված ՀՀ դրամով:
                                </v-card-text>

                                <v-row no-gutters justify="center">
                                    <v-col cols="7">
                                        <v-data-table
                                            :headers="headers"
                                            :items="items"
                                            hide-default-header
                                            hide-default-footer
                                        >
                                            <template v-slot:header>
                                                <tr
                                                    style="
                                                        background-color: #f2f2f2;
                                                    "
                                                >
                                                    <th
                                                        v-for="(
                                                            header, i
                                                        ) in headers"
                                                        :key="i"
                                                        class="font-weight-bold text-left py-2 px-4"
                                                        style="font-size: 14px"
                                                    >
                                                        {{ header.text }}
                                                    </th>
                                                </tr>
                                            </template>

                                            <template
                                                v-slot:item.date="{ item }"
                                            >
                                                <v-alert
                                                    color="#4CAF50"
                                                    class="font-weight-bold mb-0 py-1 px-5"
                                                    text
                                                    dense
                                                    style="font-size: 14px"
                                                    v-text="item.date"
                                                ></v-alert>
                                            </template>

                                            <template
                                                v-slot:item.documents="{ item }"
                                            >
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
                                                            v-text="
                                                                icons.mdiArrowRight
                                                            "
                                                        ></v-icon>
                                                    </v-btn>
                                                </v-row>
                                            </template>

                                            <template
                                                v-slot:item.price="{ item }"
                                            >
                                                <span
                                                    class="font-weight-bold"
                                                    v-text="item.price"
                                                ></span>
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
                                                        :items="[
                                                            5,
                                                            10,
                                                            15,
                                                            'All',
                                                        ]"
                                                        hide-details
                                                        class="mt-0 pt-0 mr-12"
                                                        style="
                                                            font-size: 12px;
                                                            max-width: 45.35px;
                                                        "
                                                    ></v-select>

                                                    <div
                                                        class="font-weight-bold text--secondary mr-12"
                                                    >
                                                        Էջ 1, 20-ից
                                                    </div>

                                                    <v-btn class="mr-3" icon>
                                                        <v-icon
                                                            v-text="
                                                                icons.mdiChevronLeft
                                                            "
                                                        ></v-icon>
                                                    </v-btn>

                                                    <v-btn icon>
                                                        <v-icon
                                                            v-text="
                                                                icons.mdiChevronRight
                                                            "
                                                        ></v-icon>
                                                    </v-btn>
                                                </v-row>
                                            </template>
                                        </v-data-table>

                                        <v-row
                                            no-gutters
                                            justify="end"
                                            align="center"
                                            class="py-3"
                                        >
                                            <v-col cols="auto">
                                                <div
                                                    class="font-italic text-right mb-5"
                                                    style="font-size: 14px"
                                                >
                                                    Բալանս՝
                                                </div>
                                                <div
                                                    class="font-italic text-right"
                                                    style="font-size: 14px"
                                                >
                                                    Թարմացված է առ՝
                                                </div>
                                            </v-col>

                                            <v-col cols="auto">
                                                <v-alert
                                                    color="#4CAF50"
                                                    class="ml-3 mb-3 py-1 px-5"
                                                    style="font-size: 14px"
                                                    dark
                                                    dense
                                                    >500 ՀՀ դրամ</v-alert
                                                >

                                                <v-alert
                                                    color="#4CAF50"
                                                    class="ml-3 mb-0 py-1 px-5"
                                                    style="font-size: 14px"
                                                    dark
                                                    dense
                                                    >15.11.2021</v-alert
                                                >
                                            </v-col>
                                        </v-row>
                                    </v-col>
                                </v-row>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-sheet>
            </v-col>
        </v-row>
    </v-sheet>
</template>

<script>
import {
    mdiFileDocumentOutline,
    mdiArrowRight,
    mdiChevronLeft,
    mdiChevronRight,
} from "@mdi/js";

export default {
    data: () => ({
        icons: {
            mdiFileDocumentOutline,
            mdiArrowRight,
            mdiChevronLeft,
            mdiChevronRight,
        },
        headers: [
            { text: "Ամսաթիվ", value: "date" },
            { text: "Ստեղծված թղթեր", value: "documents" },
            { text: "Արժեք", value: "price" },
        ],
        items: [
            { date: "Դեկտեմբեր", documents: 25, price: 250 },
            { date: "Նոյեմբեր", documents: 15, price: 150 },
            { date: "Հոկտեմբեր", documents: 10, price: 100 },
        ],
    }),
};
</script>

<style scoped>
.b-title {
    color: #767676;
    font-size: 15px;
    text-transform: uppercase;
    margin-bottom: 30px;
}
</style>
