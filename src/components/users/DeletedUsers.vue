<template>
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

        <template v-slot:item.user="{ item }">
            <v-avatar size="40" class="mr-5">
                <img src="@/assets/users/image1.png" />
            </v-avatar>

            <span class="font-weight-bold" v-text="item.user"></span>
        </template>

        <template v-slot:item.email="{ item }">
            <span
                class="text--secondary"
                style="letter-spacing: 0.05em"
                v-text="item.email"
            ></span>
        </template>

        <template v-slot:item.price="{ item }">
            <span class="font-weight-bold" v-text="item.price"></span>
        </template>

        <template v-slot:item.role="{ item }">
            <span class="font-italic" v-text="item.role"></span>
        </template>

        <template v-slot:item.status="{ item }">
            <v-chip
                :color="calculateStatusColor(item.status)"
                class="font-italic mr-2"
                style="min-width: 99px"
                small
                dark
            >
                <v-icon
                    class="mx-1"
                    size="7.2"
                    v-text="icons.mdiCheckboxBlankCircle"
                ></v-icon>

                {{ calculateStatusText(item.status) }}
            </v-chip>

            <span class="text--secondary" style="font-size: 12px">
                <span class="font-italic" v-text="item.statusText"></span>
                <span class="font-weight-bold ml-1" v-text="item.date"></span>
            </span>
        </template>

        <template v-slot:item.actions>
            <v-btn icon>
                <v-icon v-text="icons.mdiDotsVertical"></v-icon>
            </v-btn>
        </template>

        <template v-slot:footer>
            <v-row
                no-gutters
                align="center"
                class="py-2 px-2"
                style="background-color: #f2f2f2; font-size: 12px"
            >
                <div class="font-weight-bold text--secondary ml-auto mr-3">
                    Տողերի քանակ:
                </div>

                <v-select
                    :items="[5, 10, 15, 'All']"
                    hide-details
                    class="mt-0 pt-0 mr-12"
                    style="font-size: 12px; max-width: 45.35px"
                ></v-select>

                <div class="font-weight-bold text--secondary mr-10">
                    Էջ 1, 20-ից
                </div>

                <v-btn class="mr-10" icon>
                    <v-icon v-text="icons.mdiChevronLeft"></v-icon>
                </v-btn>

                <v-btn icon>
                    <v-icon v-text="icons.mdiChevronRight"></v-icon>
                </v-btn>
            </v-row>
        </template>
    </v-data-table>
</template>

<script>
import {
    mdiChevronLeft,
    mdiChevronRight,
    mdiDotsVertical,
    mdiCheckboxBlankCircle,
} from "@mdi/js";

export default {
    name: "DeletedUsers",

    data: () => ({
        icons: {
            mdiChevronLeft,
            mdiChevronRight,
            mdiDotsVertical,
            mdiCheckboxBlankCircle,
        },
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
                status: "deleted",
                statusText: "Վերջին մուտք՝",
                date: "25 Նոյեմբեր 2021",
            },
            {
                user: "Աննա Հովհաննիսյան",
                email: "example@email.com",
                role: "Ադմինիստրատոր",
                status: "deleted",
                statusText: "Կասեցման ամսաթիվ՝",
                date: "25 Նոյեմբեր 2021",
            },
            {
                user: "Աննա Հովհաննիսյան",
                email: "example@email.com",
                role: "Ադմինիստրատոր",
                status: "deleted",
                statusText: "Հրավերի ամսաթիվ՝",
                date: "25 Նոյեմբեր 2021",
            },
            {
                user: "Աննա Հովհաննիսյան",
                email: "example@email.com",
                role: "Ադմինիստրատոր",
                status: "deleted",
                statusText: "Ջնջման ամսաթիվ՝",
                date: "25 Նոյեմբեր 2021",
            },
        ],
    }),

    methods: {
        calculateStatusColor(status) {
            switch (status) {
                case "active":
                    return "#4CAF50";
                case "banned":
                    return "#C4C4C4";
                case "invited":
                    return "#2196F3";
                case "deleted":
                    return "#F44336";
            }
        },

        calculateStatusText(status) {
            switch (status) {
                case "active":
                    return "Ակտիվ";
                case "banned":
                    return "Կասեցված";
                case "invited":
                    return "Հրավիրված";
                case "deleted":
                    return "Ջնջված";
            }
        },
    },
};
</script>
