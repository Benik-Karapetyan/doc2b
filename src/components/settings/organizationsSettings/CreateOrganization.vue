<template>
    <v-sheet
        color="#f7f7f7"
        class="ml-3 pa-10 pt-12 rounded-lg"
        min-height="calc(100vh - 248px)"
    >
        <div class="b-title">ավելացնել նոր կազմակերպություն</div>

        <v-row no-gutters justify="center">
            <v-sheet color="#f7f7f7" width="340" class="text-center">
                <v-text-field
                    label="Կազմակերպության անվանում"
                    outlined
                    dense
                ></v-text-field>

                <v-text-field
                    label="Գործունեության հասցե"
                    outlined
                    dense
                ></v-text-field>

                <v-text-field
                    label="Իրավաբանական հասցե"
                    outlined
                    dense
                ></v-text-field>

                <v-text-field label="ՀՎՀՀ" outlined dense></v-text-field>

                <v-text-field
                    label="Գրանցման համար"
                    outlined
                    dense
                ></v-text-field>

                <v-text-field label="Տնօրեն" outlined dense></v-text-field>

                <v-text-field label="Էլ. փոստ" outlined dense></v-text-field>

                <v-text-field label="Հաշվապահ" outlined dense></v-text-field>

                <v-text-field
                    label="Էլ. փոստ"
                    outlined
                    dense
                    hide-details="auto"
                ></v-text-field>

                <v-btn
                    color="#FFC107"
                    class="mt-5"
                    width="220"
                    dark
                    depressed
                    @click="$emit('update-mode')"
                >
                    Ավելացնել
                    <v-icon
                        class="ml-3"
                        size="22"
                        v-text="icons.mdiArrowRight"
                    ></v-icon>
                </v-btn>
            </v-sheet>
        </v-row>
    </v-sheet>
</template>

<script>
import { mdiArrowRight } from "@mdi/js";

export default {
    name: "CreateOrganization",

    data: () => ({
        icons: { mdiArrowRight },
    }),
};
</script>

<style scoped>
.b-title {
    color: #767676;
    font-size: 15px;
    text-transform: uppercase;
    margin-bottom: 80px;
}
</style>
