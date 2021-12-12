<template>
    <v-row no-gutters class="fill-height">
        <v-col cols="6" class="b-pos-relative">
            <img
                src="@/assets/doc2b-dark.png"
                alt="app logo"
                width="142"
                height="auto"
                class="b-logo"
            />
            <v-row no-gutters class="fill-height" align="center">
                <v-col cols="12" class="text-center">
                    <h1 class="mb-5" style="font-size: 42px">Մուտք գործել</h1>

                    <p class="mb-10">
                        Լրացրեք ձեր տվյալները և դարձեք մեր խելացի համակարգի
                        օտգատերերից մեկը:
                    </p>

                    <v-row no-gutters justify="center">
                        <v-col cols="6" xl="4">
                            <v-text-field
                                label="Էլ. փոստ"
                                outlined
                                dense
                                clearable
                            ></v-text-field>

                            <v-text-field
                                label="Գաղտնաբառ"
                                :type="showPassword ? 'text' : 'password'"
                                outlined
                                dense
                                clearable
                                :append-icon="
                                    showPassword
                                        ? icons.mdiEyeOutline
                                        : icons.mdiEyeOffOutline
                                "
                                @click:append="showPassword = !showPassword"
                            ></v-text-field>

                            <v-btn
                                color="#FFC107"
                                width="220"
                                dark
                                depressed
                                class="mb-5"
                            >
                                մուտք գործել
                                <v-icon
                                    class="ml-3"
                                    size="20"
                                    v-text="icons.mdiArrowRight"
                                ></v-icon>
                            </v-btn>

                            <div>
                                <router-link
                                    class="black--text"
                                    style="font-size: 14px"
                                    to="/forgot-password"
                                    >Մոռացել եմ գաղտնաբառը</router-link
                                >
                            </div>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-col>

        <v-col cols="6" class="b-right-section">
            <v-row no-gutters align="center" class="fill-height">
                <v-col class="text-center white--text">
                    <h1 class="mb-5" style="font-size: 36px">
                        Ցանկանու՞մ եք ստեղծել հաշիվ
                    </h1>

                    <p class="mb-10">
                        Համակարգում հաշիվ ստեղծելու համար պարզապես լրացրեք
                        անհրաժեշտ դաշտերը:
                    </p>

                    <v-btn
                        style="color: #0e546d"
                        width="220"
                        depressed
                        class="mb-5"
                        to="/sign-up"
                    >
                        Ստեղծել հաշիվ
                        <v-icon
                            class="ml-3"
                            size="20"
                            v-text="icons.mdiArrowRight"
                        ></v-icon>
                    </v-btn>
                </v-col>
            </v-row>
        </v-col>
    </v-row>
</template>

<script>
import { mdiEyeOutline, mdiEyeOffOutline, mdiArrowRight } from "@mdi/js";

export default {
    data: () => ({
        icons: { mdiEyeOutline, mdiEyeOffOutline, mdiArrowRight },
        showPassword: false,
    }),
};
</script>

<style scoped>
.b-logo {
    width: 142px;
    height: auto;
    position: absolute;
    top: 50px;
    left: 130px;
}

.b-right-section {
    background: url(../assets/signIn/skyscrapers.jpg);
    background-size: cover;
}
</style>
