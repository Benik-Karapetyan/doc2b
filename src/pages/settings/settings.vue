<template>
    <v-sheet color="#e8e8e8" min-height="100%" class="pt-8">
        <v-row no-gutters justify="center">
            <v-col cols="10">
                <v-sheet
                    color="#f7f7f7"
                    class="ml-3 pa-10 rounded-lg"
                    min-height="calc(100vh - 248px)"
                >
                    <h1 class="text-h5 text-center mb-5">ԿԱՐԳԱՎՈՐՈՒՄՆԵՐ</h1>

                    <v-row no-gutters justify="center">
                        <v-col cols="8">
                            <v-row no-gutters justify="center">
                                <v-col
                                    v-for="(item, i) in items"
                                    :key="i"
                                    cols="auto"
                                    class="pa-2"
                                >
                                    <info-card :item="item"></info-card>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-sheet>
            </v-col>
        </v-row>
    </v-sheet>
</template>

<script>
import programmerImg from "@/assets/settings/programmer1.png";
import digitalPlatformImg from "@/assets/settings/digital-platform1.png";
import billImg from "@/assets/settings/bill1.png";
import officeImg from "@/assets/settings/office1.png";
import InfoCard from "@/components/settings/InfoCard";

export default {
    components: { InfoCard },

    data: () => ({
        items: [
            {
                title: "Անձնական տվյալներ",
                text: "Կառավարեք ձեր անձնական տվյալները, փոփոխեք կամ վերականգնեք ձեր գաղտնաբառը:",
                image: programmerImg,
                buttonText: "Կառավարել անձնական տվյալները",
                to: "/personal-settings",
            },
            {
                title: "Ընդհանուր կարգավորումներ",
                text: "Կառավարեք հավելվածի լեզուն, անջատեք կամ ջնջեք ձեր հաշիվը:",
                image: digitalPlatformImg,
                buttonText: "Անցնել ընհանուր կարգավորումների էջ",
            },
            {
                title: "Ֆինանսներ",
                text: "Կառավարեք ձեր կցված վճարային միջոցները, ինչպես նաև բաժանորդագրության պլանը:",
                image: billImg,
                buttonText: "Կառավարել ֆինանսները",
                to: "/finances",
            },
            {
                title: "Կազմակերպություններ",
                text: "Ավելացրեք և կառավարեք կազմակերպությունների ցանկը: 4 ստեղծված կազմակերպություն",
                image: officeImg,
                buttonText: "Կարգավորել ընկերությունների ցանկը",
                to: "/organizations-settings",
            },
        ],
    }),
};
</script>
