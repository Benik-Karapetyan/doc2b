<template>
    <div class="b-container">
        <div
            v-for="(appType, i) in jobApplicationTypes"
            :key="i"
            :class="appType.isActive ? 'b-shadowed' : 'b-outlined'"
            class="my-3 pa-4 rounded-lg"
            :style="{ opacity: appType.isActive ? 1 : 0.6 }"
        >
            <v-row no-gutters align="center">
                <img
                    src="@/assets/home/document/paper1.png"
                    width="31"
                    height="31"
                    class="mr-4"
                />

                <div
                    style="max-width: 250px; font-size: 15px"
                    v-text="appType.title"
                ></div>

                <v-spacer></v-spacer>

                <v-btn
                    :color="appType.isActive ? '#FFC107' : ''"
                    icon
                    @click="appType.isActive = !appType.isActive"
                >
                    <v-icon
                        size="22"
                        v-text="
                            appType.isActive
                                ? icons.mdiCheckboxOutline
                                : icons.mdiCheckboxBlankOutline
                        "
                    ></v-icon>
                </v-btn>

                <v-btn color="#080404" icon>
                    <v-icon v-text="icons.mdiDotsVertical"></v-icon>
                </v-btn>
            </v-row>
        </div>
    </div>
</template>

<script>
import {
    mdiCheckboxBlankOutline,
    mdiCheckboxOutline,
    mdiDotsVertical,
} from "@mdi/js";

export default {
    name: "JobApplication",

    data: () => ({
        icons: { mdiCheckboxBlankOutline, mdiCheckboxOutline, mdiDotsVertical },
        jobApplicationTypes: [
            { title: "Ընդունման դիմում", isActive: false },
            { title: "Հրաման", isActive: false },
            { title: "Պայմանագիր", isActive: false },
            { title: "ՆԱՊ պայմանագիր", isActive: false },
            { title: "Մտավոր սեփականության պայմանագիր", isActive: false },
        ],
    }),
};
</script>

<style scoped>
.b-shadowed {
    box-shadow: -1px -1px 10px #ffffff, 1px 1px 10px #d9d9d9;
}

.b-outlined {
    border: 1px solid rgba(0, 0, 0, 0.23);
}
</style>
