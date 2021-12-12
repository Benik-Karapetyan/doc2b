<template>
    <v-menu v-model="menu" offset-y transition="slide-y-transition">
        <template v-slot:activator="{ on }">
            <v-text-field
                v-bind="$attrs"
                :value="getText(value)"
                :placeholder="placeholder"
                readonly
                rounded
                dense
                hide-details="auto"
                :append-icon="menu ? icons.mdiChevronUp : icons.mdiChevronDown"
                @click:append="menu = !menu"
                v-on="on"
            ></v-text-field>
        </template>

        <v-list color="#0E546D" dark>
            <v-list-item-group :value="value" @change="$emit('input', $event)">
                <v-list-item
                    v-for="(item, i) in items"
                    :key="i"
                    :value="getValue(item)"
                    active-class="b-select-item--active"
                >
                    <v-list-item-title>
                        {{ getText(item) }}
                    </v-list-item-title>
                </v-list-item>
            </v-list-item-group>
        </v-list>
    </v-menu>
</template>

<script>
import { mdiChevronUp, mdiChevronDown } from "@mdi/js";

export default {
    name: "CompanyDropdown",

    inheritAttrs: false,

    props: {
        id: String,
        value: [Object, String, Number, Boolean],
        placeholder: String,
        items: Array,
        itemText: {
            type: String,
            default: "text",
        },
        itemValue: {
            type: String,
            default: "value",
        },
    },

    data: () => ({
        icons: { mdiChevronUp, mdiChevronDown },
        menu: false,
    }),

    methods: {
        getText(item) {
            if (item) {
                if (typeof item === "object") {
                    return item[this.itemText];
                } else {
                    return this.items.find(i => i[this.itemValue] === item)[
                        this.itemText
                    ];
                }
            } else {
                return "";
            }
        },

        getValue(item) {
            return typeof item === "object" ? item[this.itemValue] : item;
        },
    },
};
</script>

<style scoped>
.b-select-item--active {
    background: #2727f5;
}
</style>
