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
                    <h1 class="mb-5" style="font-size: 42px">Նոր գաղտնաբառ</h1>

                    <p class="mb-10">
                        Ստեղծեք նոր գաղտնաբառ, կրկնեք այն և սեղմեք Պահպանել
                        կոճակը:
                    </p>

                    <v-row no-gutters justify="center">
                        <v-col cols="6" xl="4">
                            <v-text-field
                                v-model="newPassword"
                                label="Նոր գաղտնաբառ"
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
                                :success="success.newPassword"
                                :error-messages="error.newPassword"
                                @focus="error.newPassword = ''"
                                @blur="validateNewPassword"
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

                            <v-btn
                                color="#FFC107"
                                width="220"
                                dark
                                depressed
                                class="mb-5"
                                to="/sign-in"
                            >
                                պահպանել
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
import validators from "@/utils/validators/newPassword";

export default {
    mixins: [validators],

    data: () => ({
        icons: { mdiEyeOutline, mdiEyeOffOutline, mdiArrowRight },
        newPassword: "",
        confirmPassword: "",
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

.b-right-section {
    background: url(../assets/signIn/skyscrapers.jpg);
    background-size: cover;
}
</style>
