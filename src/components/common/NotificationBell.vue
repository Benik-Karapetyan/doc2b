<template>
    <v-menu
        v-model="menu"
        offset-y
        left
        nudge-bottom="33"
        nudge-right="55"
        rounded="lg"
        transition="scroll-y-transition"
    >
        <template v-slot:activator="{ on }">
            <v-btn
                :color="menu ? '#FFC107' : 'white'"
                fab
                width="33"
                height="33"
                light
                depressed
                v-on="on"
            >
                <v-badge
                    :color="menu ? 'white' : '#FFC107'"
                    overlap
                    dot
                    offset-x="9"
                    offset-y="11"
                >
                    <v-icon
                        :color="menu ? 'white' : '#0E546D'"
                        size="22"
                        v-text="icons.mdiBellOutline"
                    ></v-icon>
                </v-badge>
            </v-btn>
        </template>

        <v-card class="pa-5 pr-3">
            <v-sheet
                width="426"
                max-height="536"
                style="overflow: auto"
                class="b-content pr-7"
            >
                <v-card-title
                    class="subtitle-1 text--secondary justify-space-between pa-0"
                >
                    ԾԱՆՈՒՑՈՒՄՆԵՐ

                    <span style="color: #ffc107" class="font-italic">
                        Դիտել բոլորը (25)
                    </span>
                </v-card-title>

                <v-list two-line class="pb-0">
                    <template v-for="(notification, i) in notifications">
                        <v-list-item
                            :key="'notification' + i"
                            class="py-2"
                            @click="$router.push('/notifications')"
                        >
                            <v-list-item-action class="mr-3 text--secondary">
                                <v-icon
                                    color="#ffc107"
                                    v-text="icons.mdiBellRingOutline"
                                ></v-icon>
                            </v-list-item-action>
                            <v-list-item-content>
                                <v-list-item-title
                                    :class="{
                                        'font-weight-bold':
                                            !notification.isRead,
                                    }"
                                    class="text-wrap"
                                    v-text="notification.text"
                                ></v-list-item-title>
                                <v-list-item-subtitle
                                    class="font-italic mt-2"
                                    v-text="notification.secondaryText"
                                ></v-list-item-subtitle>
                            </v-list-item-content>
                            <v-list-item-action>
                                <v-icon
                                    v-if="!notification.isRead"
                                    color="#ffc107"
                                    size="15"
                                    v-text="icons.mdiCheckboxBlankCircle"
                                ></v-icon>
                            </v-list-item-action>
                        </v-list-item>
                        <v-divider :key="i"></v-divider>
                    </template>
                </v-list>
            </v-sheet>
        </v-card>
    </v-menu>
</template>

<script>
import {
    mdiBellOutline,
    mdiBellRingOutline,
    mdiCheckboxBlankCircle,
} from "@mdi/js";
import { mapMutations } from "vuex";

export default {
    name: "NotificationBell",

    data: () => ({
        icons: { mdiBellOutline, mdiBellRingOutline, mdiCheckboxBlankCircle },
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

    methods: {
        ...mapMutations(["setOverlay"]),
    },

    watch: {
        menu(val) {
            this.setOverlay(val);
        },
    },
};
</script>

<style lang="sass" scoped>
.v-menu__content
    box-shadow: -1px -1px 10px #FFFFFF, 1px 1px 10px #D9D9D9
</style>

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
