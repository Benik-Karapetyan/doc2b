<template>
    <v-card rounded="lg" width="355" class="pa-5">
        <v-row no-gutters justify="space-between" align="center">
            <v-col style="height: 96px">
                <v-card-title
                    class="px-0 pt-0 pb-3 text-none"
                    style="word-break: normal; line-height: 23px"
                    v-text="item.title"
                ></v-card-title>
                <v-card-subtitle
                    class="mt-0 px-0 pb-2 text--secondary"
                    style="line-height: 15px"
                    v-text="item.text"
                ></v-card-subtitle>
            </v-col>

            <img :src="item.image" width="80" height="80" />
        </v-row>

        <v-divider class="mt-5 mb-3"></v-divider>

        <v-btn
            color="#FFC107"
            class="text-capitalize font-weight-bold pa-0"
            text
            style="font-size: 13px"
            :to="item.to"
            >{{ item.buttonText }}</v-btn
        >
    </v-card>
</template>

<script>
export default {
    name: "InfoCard",

    props: {
        item: Object,
    },
};
</script>

<style lang="sass" scoped>
.v-sheet.v-card
   box-shadow: 1px 1px 50px rgba(0, 0, 0, 0.05)
</style>
