// import { mapMutations, mapState } from "vuex";

export default {
    data() {
        return {
            valid: {
                password: false,
                confirmPassword: false,
            },
            success: {
                password: false,
                confirmPassword: false,
            },
            error: {
                password: "",
                confirmPassword: "",
            },
        };
    },

    computed: {
        // ...mapState(["resetValidation"]),
        // formValid() {
        //     for (let key in this.valid) {
        //         if (!this.valid[key]) return false;
        //     }
        //     return true;
        // },
        // passwordHint() {
        //     if (!this.newPassword)
        //         return "Must contain at least 1 uppercase letter, 1 lowercase letter, 1 number and be at least 8 characters long";
        //     let hint = "Must contain at least ";
        //     let hasError = false;
        //     if (!/[A-Z]/.test(this.newPassword)) {
        //         hasError = true;
        //         hint += "1 uppercase letter, ";
        //     }
        //     if (!/[a-z]/.test(this.newPassword)) {
        //         hasError = true;
        //         hint += "1 lowercase letter, ";
        //     }
        //     if (!/\d/.test(this.newPassword)) {
        //         hasError = true;
        //         hint += "1 number ";
        //     }
        //     if (this.newPassword.length < 8) {
        //         if (hasError) {
        //             hint += "and be at least 8 characters long";
        //         } else {
        //             hasError = true;
        //             hint = "New Password must be at least 8 characters long";
        //         }
        //     }
        //     if (!hasError) return "";
        //     return hint;
        // },
        // confirmHint() {
        //     return this.confirmPassword === this.newPassword
        //         ? ""
        //         : "Must match New Password";
        // },
    },

    methods: {
        // ...mapMutations(["setResetValidation"]),

        validatePassword() {
            if (!this.password) {
                this.error.password = "Գաղտնաբառը պարտադիր է";
            } else {
                this.error.password = "";
            }
        },

        validateConfirmPassword() {
            if (!this.confirmPassword) {
                this.error.confirmPassword = "Գաղտնաբառերը չեն համընկնում";
            } else if (this.confirmPassword !== this.password) {
                this.error.confirmPassword = "Գաղտնաբառերը չեն համընկնում";
            } else {
                this.error.confirmPassword = "";
            }
        },
    },

    watch: {
        password: {
            immediate: true,
            handler(val) {
                if (val) {
                    this.valid.password = !!val;
                    this.success.password = !!val;
                    this.valid.confirmPassword = val === this.confirmPassword;
                    this.success.confirmPassword = val === this.confirmPassword;
                    this.error.confirmPassword = "";
                } else {
                    this.valid.password = false;
                    this.success.password = false;
                }
            },
        },

        confirmPassword: {
            immediate: true,
            handler(val) {
                if (val) {
                    this.valid.confirmPassword = val === this.password;
                    this.success.confirmPassword = val === this.password;
                } else {
                    this.valid.confirmPassword = false;
                    this.success.confirmPassword = false;
                }
            },
        },

        // resetValidation: {
        //     immediate: true,
        //     handler(val) {
        //         if (val) {
        //             this.error = {
        //                 newPassword: "",
        //                 confirmPassword: "",
        //             };

        //             this.setResetValidation(false);
        //         }
        //     },
        // },
    },
};
