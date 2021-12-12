<template>
    <v-row no-gutters class="fill-height">
        <v-col cols="6" class="b-left-section">
            <img
                src="@/assets/signUp/doc2b-light.png"
                alt="app logo"
                width="142"
                height="auto"
                class="b-logo"
            />
            <v-row no-gutters align="center" class="fill-height">
                <v-col class="text-center white--text">
                    <h1 class="mb-5" style="font-size: 36px">
                        Արդեն ունե՞ք հաշիվ
                    </h1>

                    <p class="mb-10">
                        Համակարգ մուտք գործելու համար պարզապես սեղմեք ստորև
                        ներկայացված կոճակը:
                    </p>

                    <v-btn
                        width="220"
                        depressed
                        class="mb-5"
                        style="color: #0e546d"
                        to="/sign-in"
                    >
                        մուտք գործել
                        <v-icon
                            class="ml-3"
                            size="20"
                            v-text="icons.mdiArrowRight"
                        ></v-icon>
                    </v-btn>
                </v-col>
            </v-row>
        </v-col>

        <v-col cols="6" class="b-pos-relative">
            <v-row no-gutters class="fill-height" align="center">
                <v-col cols="12" class="text-center">
                    <h1 class="mb-5" style="font-size: 42px">Ստեղծել հաշիվ</h1>

                    <p class="mb-10">
                        Լրացրեք ձեր տվյալները և դարձեք մեր խելացի համակարգի
                        օտգատերերից մեկը:
                    </p>

                    <v-row no-gutters justify="center">
                        <v-col cols="6" xl="4">
                            <v-text-field
                                label="Անուն"
                                outlined
                                dense
                                clearable
                            ></v-text-field>

                            <v-text-field
                                label="Ազգանուն"
                                outlined
                                dense
                                clearable
                            ></v-text-field>

                            <v-text-field
                                label="Էլ. փոստ"
                                outlined
                                dense
                                clearable
                            ></v-text-field>

                            <v-row no-gutters justify="space-between">
                                <v-col cols="3">
                                    <v-select
                                        label="Երկիր"
                                        outlined
                                        dense
                                        menu-props="offsetY"
                                        :items="['+374', '+375', '+376']"
                                    ></v-select>
                                </v-col>
                                <v-col cols="8">
                                    <v-text-field
                                        placeholder="99 334 455"
                                        outlined
                                        dense
                                        clearable
                                    ></v-text-field>
                                </v-col>
                            </v-row>

                            <v-text-field
                                v-model="password"
                                label="Գաղտնաբառ"
                                :type="showPassword.new ? 'text' : 'password'"
                                outlined
                                dense
                                clearable
                                autocomplete="new-password"
                                :append-icon="
                                    showPassword.new
                                        ? icons.mdiEyeOutline
                                        : icons.mdiEyeOffOutline
                                "
                                @click:append="
                                    showPassword.new = !showPassword.new
                                "
                                :success="success.password"
                                :error-messages="error.password"
                                @focus="error.password = ''"
                                @blur="validatePassword"
                            ></v-text-field>

                            <v-text-field
                                v-model="confirmPassword"
                                label="Կրկնեք նոր գաղտնաբառը"
                                :type="
                                    showPassword.confirm ? 'text' : 'password'
                                "
                                outlined
                                dense
                                clearable
                                autocomplete="new-password"
                                :append-icon="
                                    showPassword.confirm
                                        ? icons.mdiEyeOutline
                                        : icons.mdiEyeOffOutline
                                "
                                @click:append="
                                    showPassword.confirm = !showPassword.confirm
                                "
                                :success="success.confirmPassword"
                                :error-messages="error.confirmPassword"
                                @focus="error.confirmPassword = ''"
                                @blur="validateConfirmPassword"
                            ></v-text-field>

                            <v-row
                                no-gutters
                                justify="center"
                                align="center"
                                class="mb-6"
                            >
                                <v-checkbox
                                    v-model="terms"
                                    class="mt-0 pt-0 text-center"
                                    hide-details="auto"
                                ></v-checkbox>
                                <span
                                    class="b-clickable"
                                    style="font-size: 14px"
                                    @click="terms = !terms"
                                >
                                    Համաձայն եմ
                                    <span class="font-weight-bold"
                                        >Terms and Conditions:</span
                                    >
                                </span>
                            </v-row>

                            <v-btn
                                color="#FFC107"
                                width="220"
                                dark
                                depressed
                                class="mb-5"
                            >
                                ստեղծել
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
        </v-col>
    </v-row>
</template>

<script>
import { mdiEyeOutline, mdiEyeOffOutline, mdiArrowRight } from "@mdi/js";
import validators from "@/utils/validators/signUp";

export default {
    mixins: [validators],

    data: () => ({
        icons: { mdiEyeOutline, mdiEyeOffOutline, mdiArrowRight },
        password: "",
        confirmPassword: "",
        terms: false,
        showPassword: {
            new: false,
            confirm: false,
        },
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

.b-left-section {
    position: relative;
    background: url(../assets/signUp/building.jpg);
    background-size: cover;
}
</style>
