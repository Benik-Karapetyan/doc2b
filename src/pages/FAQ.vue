<template>
    <v-sheet color="#e8e8e8" min-height="100%" class="pt-8">
        <v-row no-gutters justify="center">
            <v-col cols="10">
                <v-sheet
                    color="#f7f7f7"
                    class="ml-3 pa-10 rounded-lg"
                    min-height="calc(100vh - 148px)"
                >
                    <div class="b-title">Հաճախ տրվող հարցեր</div>

                    <v-expansion-panels
                        accordion
                        multiple
                        style="width: 1045px"
                    >
                        <v-expansion-panel
                            v-for="(faq, i) in faqs"
                            :key="i"
                            class="mb-5 rounded-lg"
                        >
                            <v-expansion-panel-header
                                class="font-weight-bold"
                                style="font-size: 1rem"
                                >{{ faq.title }}</v-expansion-panel-header
                            >

                            <v-expansion-panel-content
                                class="text--secondary font-italic"
                            >
                                <p>
                                    Nulla facilisi. Phasellus sollicitudin nulla
                                    et quam mattis feugiat. Aliquam eget maximus
                                    est, id dignissim quam. Nulla facilisi.
                                    Phasellus sollicitudin nulla et quam mattis
                                    feugiat. Aliquam eget maximus est, id
                                    dignissim quam.Nulla facilisi. Phasellus
                                    sollicitudin nulla et quam mattis feugiat.
                                    Aliquam eget maximus est, id dignissim quam.
                                    Nulla facilisi. Phasellus sollicitudin nulla
                                    et quam mattis feugiat. Aliquam eget maximus
                                    est, id dignissim quam. Nulla facilisi.
                                    Phasellus sollicitudin nulla et quam mattis
                                    feugiat. Aliquam eget maximus est, id
                                    dignissim quam.
                                </p>

                                <p>
                                    Nulla facilisi. Phasellus sollicitudin nulla
                                    et quam mattis feugiat. Aliquam eget maximus
                                    est, id dignissim quam. Nulla facilisi.
                                    Phasellus sollicitudin nulla et quam mattis
                                    feugiat. Aliquam eget maximus est, id
                                    dignissim quam. Nulla facilisi. Phasellus
                                    sollicitudin nulla et quam mattis feugiat.
                                    Aliquam eget maximus est, id dignissim quam.
                                </p>

                                <p>
                                    Nulla facilisi. Phasellus sollicitudin nulla
                                    et quam mattis feugiat. Aliquam eget maximus
                                    est, id dignissim quam.Nulla facilisi.
                                    Phasellus sollicitudin nulla et quam mattis
                                    feugiat. Aliquam eget maximus est, id
                                    dignissim quam.
                                </p>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>
                </v-sheet>
            </v-col>
        </v-row>
    </v-sheet>
</template>

<script>
export default {
    data: () => ({
        faqs: [
            { title: "Հարց 1. Ինչպե՞ս ստեղծել հաշիվ:" },
            { title: "Հարց 2. Ինչպե՞ս ստեղծել փաստաթուղթ:" },
            { title: "Հարց 3. Ինչպե՞ս ստեղծել փաստաթուղթ:" },
            { title: "Հարց 4. Ինչպե՞ս ստեղծել փաստաթուղթ:" },
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

<style lang="sass" scoped>
.v-expansion-panel
    box-shadow: -1px -1px 10px #FFFFFF, 1px 1px 10px #D9D9D9
</style>
