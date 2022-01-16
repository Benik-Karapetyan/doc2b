<template>
    <v-sheet color="#e8e8e8" min-height="100%" class="pt-8">
        <v-row no-gutters justify="center">
            <v-col cols="10">
                <v-sheet
                    color="#f7f7f7"
                    class="ml-3 pa-10 rounded-lg"
                    min-height="calc(100vh - 148px)"
                >
                    <div class="b-title">հետադարձ կապ</div>

                    <v-sheet color="white" class="rounded-lg py-12">
                        <v-row no-gutters justify="center">
                            <v-col cols="8" class="text-center">
                                <v-card-title class="justify-center pa-0 b-5">
                                    <v-col cols="auto" class="pa-0">
                                        <span class="text--secondary"
                                            >Հարգելի</span
                                        >

                                        <h1 class="text-h4 text-uppercase">
                                            Նարեկ
                                        </h1>
                                    </v-col>
                                </v-card-title>

                                <p
                                    class="text--secondary mb-12"
                                    style="font-size: 15px"
                                >
                                    Ստորև ներկայացված դաշտում ընտրեք հարցի/խնդրի
                                    թեման, մուտքագրեք ձեր նամակը և ուղարկեք այն
                                    մեզ՝ սեղմելով Ուղարկել կոճակը: Մեր
                                    մասնագետները ձեզ հետ կկապվեն հնարավորինս
                                    շուտ:
                                </p>

                                <v-sheet width="340" class="mx-auto">
                                    <v-select
                                        v-model="theme"
                                        label="Թեմա"
                                        :items="themes"
                                        outlined
                                        dense
                                        menu-props="offsetY"
                                        clearable
                                        hide-details="auto"
                                        class="mb-5"
                                    ></v-select>

                                    <v-textarea
                                        v-model="text"
                                        label="Նամակ"
                                        outlined
                                        hide-details="auto"
                                        class="mb-5"
                                    ></v-textarea>
                                </v-sheet>

                                <v-btn
                                    color="#FFC107"
                                    width="220"
                                    dark
                                    depressed
                                >
                                    ուղարկել

                                    <v-icon
                                        size="20"
                                        class="ml-2"
                                        v-text="icons.mdiArrowRight"
                                    ></v-icon>
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-sheet>
                </v-sheet>
            </v-col>
        </v-row>
    </v-sheet>
</template>

<script>
import { mdiArrowRight } from "@mdi/js";

export default {
    data: () => ({
        icons: { mdiArrowRight },
        theme: 1,
        themes: [{ text: "Հաշվի հետ կախված խնդիր", value: 1 }],
        text: "Բարև ձեզ, գրում եմ հաշվիս հետ ծագած հարցի շուրջ. ցանկանում եմ երկարաձգել բաժանորդագրությունը. ",
    }),
};
</script>

<style scoped>
.b-title {
    color: #767676;
    font-size: 15px;
    text-transform: uppercase;
    margin-bottom: 50px;
}
</style>
