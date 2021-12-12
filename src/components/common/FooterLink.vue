<template>
    <v-btn
        :color="$route.name === routeName ? '#0E546D' : '#ADADAD'"
        :text="$route.name !== routeName"
        style="font-size: 1rem"
        class="px-5 mr-6"
        dark
        small
        rounded
        depressed
        :to="to"
    >
        <v-icon
            class="mr-2"
            v-text="$route.name === routeName ? activeIcon : icon"
        ></v-icon>
        {{ text }}
    </v-btn>
</template>

<script>
export default {
    name: "FooterLink",

    props: {
        text: String,
        to: String,
        routeName: String,
        activeIcon: String,
        icon: String,
    },
};
</script>
