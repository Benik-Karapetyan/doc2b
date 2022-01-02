<template>
    <v-sheet color="#e8e8e8" min-height="100%" class="pt-8">
        <v-row no-gutters justify="center">
            <v-col cols="10">
                <v-sheet
                    color="#f7f7f7"
                    class="ml-3 pa-10 pt-12 rounded-lg"
                    min-height="calc(100vh - 248px)"
                >
                    <div class="b-title">անձնական տվյալներ</div>

                    <v-row no-gutters justify="center">
                        <v-col cols="8">
                            <v-card class="pa-10">
                                <v-row no-gutters>
                                    <v-col cols="6">
                                        <v-card-title
                                            class="pa-0 mb-7"
                                            style="font-size: 23px"
                                        >
                                            <v-avatar
                                                color="#C4C4C4"
                                                size="70"
                                                class="mr-5"
                                            ></v-avatar>
                                            Աննա Նավասարդյան
                                        </v-card-title>

                                        <div class="ml-n4">
                                            <v-btn text class="text-capitalize">
                                                <v-icon
                                                    class="text--secondary mr-4"
                                                    v-text="
                                                        icons.mdiImageOutline
                                                    "
                                                ></v-icon>
                                                Վերբեռնել լուսանկար
                                            </v-btn>
                                        </div>

                                        <div class="ml-n4">
                                            <v-btn text class="text-capitalize">
                                                <v-icon
                                                    class="text--secondary mr-4"
                                                    v-text="
                                                        icons.mdiDeleteOutline
                                                    "
                                                ></v-icon>
                                                Ջնջել լուսանկարը
                                            </v-btn>
                                        </div>
                                    </v-col>

                                    <v-col cols="6">
                                        <v-text-field
                                            label="Անուն"
                                            outlined
                                            dense
                                        ></v-text-field>

                                        <v-text-field
                                            label="Ազգանուն"
                                            outlined
                                            dense
                                            hide-details="auto"
                                        ></v-text-field>

                                        <v-row
                                            no-gutters
                                            justify="end"
                                            class="mt-2 mb-5"
                                        >
                                            <v-card elevation="1" class="mr-5">
                                                <v-icon
                                                    color="#4CAF50"
                                                    size="27"
                                                    v-text="icons.mdiCheck"
                                                ></v-icon>
                                            </v-card>

                                            <v-card elevation="1">
                                                <v-icon
                                                    color="#F44336"
                                                    size="27"
                                                    v-text="icons.mdiClose"
                                                ></v-icon>
                                            </v-card>
                                        </v-row>

                                        <v-text-field
                                            label="Էլ. փոստ"
                                            outlined
                                            dense
                                        ></v-text-field>

                                        <v-row
                                            no-gutters
                                            justify="space-between"
                                        >
                                            <v-col cols="4">
                                                <v-select
                                                    label="Երկիր"
                                                    outlined
                                                    dense
                                                    menu-props="offsetY"
                                                    :items="[
                                                        '+374',
                                                        '+375',
                                                        '+376',
                                                    ]"
                                                    hide-details="auto"
                                                ></v-select>
                                            </v-col>
                                            <v-col cols="7">
                                                <v-text-field
                                                    placeholder="99 334 455"
                                                    outlined
                                                    dense
                                                    clearable
                                                    hide-details="auto"
                                                ></v-text-field>
                                            </v-col>
                                        </v-row>

                                        <v-row
                                            no-gutters
                                            justify="end"
                                            class="mt-2 mb-5"
                                        >
                                            <v-card elevation="1" class="mr-5">
                                                <v-icon
                                                    color="#4CAF50"
                                                    size="27"
                                                    v-text="icons.mdiCheck"
                                                ></v-icon>
                                            </v-card>

                                            <v-card elevation="1">
                                                <v-icon
                                                    color="#F44336"
                                                    size="27"
                                                    v-text="icons.mdiClose"
                                                ></v-icon>
                                            </v-card>
                                        </v-row>

                                        <v-divider></v-divider>

                                        <h3 class="subtitle-1 my-5">
                                            Փոխել գաղտնաբառը
                                        </h3>

                                        <v-text-field
                                            v-model="oldPassword"
                                            label="Մուտքագրեք հին գաղտնաբառը"
                                            :type="
                                                showPassword.old
                                                    ? 'text'
                                                    : 'password'
                                            "
                                            outlined
                                            dense
                                            clearable
                                            autocomplete="new-password"
                                            :append-icon="
                                                showPassword.old
                                                    ? icons.mdiEye
                                                    : icons.mdiEyeOff
                                            "
                                            @click:append="
                                                showPassword.old =
                                                    !showPassword.old
                                            "
                                        ></v-text-field>

                                        <v-text-field
                                            v-model="newPassword"
                                            label="Նոր գաղտնաբառ"
                                            :type="
                                                showPassword.new
                                                    ? 'text'
                                                    : 'password'
                                            "
                                            outlined
                                            dense
                                            clearable
                                            autocomplete="new-password"
                                            :append-icon="
                                                showPassword.new
                                                    ? icons.mdiEye
                                                    : icons.mdiEyeOff
                                            "
                                            @click:append="
                                                showPassword.new =
                                                    !showPassword.new
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
                                                showPassword.confirm
                                                    ? 'text'
                                                    : 'password'
                                            "
                                            outlined
                                            dense
                                            clearable
                                            autocomplete="new-password"
                                            hide-details="auto"
                                            :append-icon="
                                                showPassword.confirm
                                                    ? icons.mdiEye
                                                    : icons.mdiEyeOff
                                            "
                                            @click:append="
                                                showPassword.confirm =
                                                    !showPassword.confirm
                                            "
                                            :success="success.confirmPassword"
                                            :error-messages="
                                                error.confirmPassword
                                            "
                                            @focus="error.confirmPassword = ''"
                                            @blur="validateConfirmPassword"
                                        ></v-text-field>

                                        <div class="text-center">
                                            <v-btn
                                                color="#FFC107"
                                                dark
                                                width="220"
                                                depressed
                                                class="mt-5"
                                            >
                                                պահպանել
                                                <v-icon
                                                    class="ml-3"
                                                    size="20"
                                                    v-text="icons.mdiArrowRight"
                                                ></v-icon>
                                            </v-btn>
                                        </div>
                                    </v-col>
                                </v-row>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-sheet>
            </v-col>
        </v-row>
    </v-sheet>
</template>

<script>
import {
    mdiImageOutline,
    mdiDeleteOutline,
    mdiCheck,
    mdiClose,
    mdiEye,
    mdiEyeOff,
    mdiArrowRight,
} from "@mdi/js";
import validators from "@/utils/validators/personalSettings";

export default {
    mixins: [validators],

    data: () => ({
        icons: {
            mdiImageOutline,
            mdiDeleteOutline,
            mdiCheck,
            mdiClose,
            mdiEye,
            mdiEyeOff,
            mdiArrowRight,
        },
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
        showPassword: {
            old: false,
            new: false,
            confirm: false,
        },
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
