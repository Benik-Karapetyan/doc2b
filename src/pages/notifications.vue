<template>
    <v-container fluid class="pa-0 pt-8" style="padding-bottom: 60px">
        <v-row no-gutters justify="center" style="height: calc(100vh - 208px)">
            <v-col cols="10">
                <v-sheet
                    color="#f7f7f7"
                    height="100%"
                    class="ml-3 py-8 rounded-lg"
                >
                    <v-row no-gutters justify="center">
                        <v-col cols="7">
                            <v-card elevation="0" class="pa-5 pr-3">
                                <v-sheet
                                    max-height="calc(100vh - 312px)"
                                    style="overflow: auto"
                                    class="b-content pr-4"
                                >
                                    <v-card-title
                                        class="subtitle-1 text--secondary justify-space-between pa-0"
                                        >ԾԱՆՈՒՑՈՒՄՆԵՐ</v-card-title
                                    >

                                    <v-list two-line class="pb-0">
                                        <template
                                            v-for="(
                                                notification, i
                                            ) in notifications"
                                        >
                                            <v-list-item
                                                :key="'notification' + i"
                                                class="py-2"
                                                @click="
                                                    $router.push(
                                                        '/notifications'
                                                    )
                                                "
                                            >
                                                <v-list-item-action
                                                    class="mr-3 text--secondary"
                                                >
                                                    <v-icon
                                                        color="#ffc107"
                                                        v-text="
                                                            icons.mdiBellRingOutline
                                                        "
                                                    ></v-icon>
                                                </v-list-item-action>
                                                <v-list-item-content>
                                                    <v-list-item-title
                                                        :class="{
                                                            'font-weight-bold':
                                                                !notification.isRead,
                                                        }"
                                                        class="text-wrap"
                                                        v-text="
                                                            notification.text
                                                        "
                                                    ></v-list-item-title>
                                                    <v-list-item-subtitle
                                                        class="font-italic mt-2"
                                                        v-text="
                                                            notification.secondaryText
                                                        "
                                                    ></v-list-item-subtitle>
                                                </v-list-item-content>
                                                <v-list-item-action>
                                                    <v-icon
                                                        v-if="
                                                            !notification.isRead
                                                        "
                                                        color="#ffc107"
                                                        size="15"
                                                        v-text="
                                                            icons.mdiCheckboxBlankCircle
                                                        "
                                                    ></v-icon>
                                                </v-list-item-action>
                                            </v-list-item>
                                            <v-divider :key="i"></v-divider>
                                        </template>
                                    </v-list>
                                </v-sheet>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-sheet>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { mdiBellRingOutline, mdiCheckboxBlankCircle } from "@mdi/js";

export default {
    data: () => ({
        icons: { mdiBellRingOutline, mdiCheckboxBlankCircle },
        menu: false,
        notifications: [
            {
                text: "Դուք ստացել եք նոր փաստաթուղթ վավերացման համար:",
                secondaryText: "15 րոպե առաջ",
                isRead: false,
            },
            {
                text: "Դուք ստացել եք նոր փաստաթուղթ վավերացման համար:",
                secondaryText: "30 րոպե առաջ",
                isRead: true,
            },
            {
                text: "Դուք ստացել եք նոր փաստաթուղթ վավերացման համար:",
                secondaryText: "30 րոպե առաջ",
                isRead: true,
            },
            {
                text: "Դուք ստացել եք նոր փաստաթուղթ վավերացման համար:",
                secondaryText: "30 րոպե առաջ",
                isRead: true,
            },
            {
                text: "Դուք ստացել եք նոր փաստաթուղթ վավերացման համար:",
                secondaryText: "30 րոպե առաջ",
                isRead: true,
            },
            {
                text: "Դուք ստացել եք նոր փաստաթուղթ վավերացման համար:",
                secondaryText: "15 րոպե առաջ",
                isRead: false,
            },
            {
                text: "Դուք ստացել եք նոր փաստաթուղթ վավերացման համար:",
                secondaryText: "30 րոպե առաջ",
                isRead: true,
            },
            {
                text: "Դուք ստացել եք նոր փաստաթուղթ վավերացման համար:",
                secondaryText: "30 րոպե առաջ",
                isRead: true,
            },
            {
                text: "Դուք ստացել եք նոր փաստաթուղթ վավերացման համար:",
                secondaryText: "30 րոպե առաջ",
                isRead: true,
            },
            {
                text: "Դուք ստացել եք նոր փաստաթուղթ վավերացման համար:",
                secondaryText: "30 րոպե առաջ",
                isRead: true,
            },
        ],
    }),
};
</script>

<style scoped>
.b-content::-webkit-scrollbar {
    width: 5px;
    height: 5px;
    border-radius: 8px;
}

.b-content::-webkit-scrollbar-track {
    border-radius: 8px;
}

.b-content::-webkit-scrollbar-thumb {
    background: #c4c4c4;
    border-radius: 8px;
}
</style>
