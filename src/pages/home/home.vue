<template>
    <v-sheet color="#e8e8e8" min-height="100%" class="pt-10">
        <v-row no-gutters justify="center">
            <v-col cols="10">
                <tabs></tabs>

                <router-view></router-view>
            </v-col>
        </v-row>
    </v-sheet>
</template>

<script>
import Tabs from "@/components/home/Tabs";

export default {
    components: { Tabs },
};
</script>
