<template>
    <v-sheet color="#e8e8e8" min-height="100%" class="pt-8">
        <v-row no-gutters justify="center">
            <v-col cols="10">
                <CreateOrganization
                    v-if="mode === 'create' || !organizations.length"
                    @update-mode="mode = ''"
                />

                <OrganizationsList
                    v-else
                    :items="organizations"
                    @update-mode="mode = 'create'"
                />
            </v-col>
        </v-row>
    </v-sheet>
</template>

<script>
import CreateOrganization from "@/components/settings/organizationsSettings/CreateOrganization";
import OrganizationsList from "@/components/settings/organizationsSettings/OrganizationsList";

export default {
    components: { CreateOrganization, OrganizationsList },

    data: () => ({
        mode: "",
        organizations: [
            {
                name: "Կամակերպություն մեկ, երկու, երեք, չորս ՍՊԸ",
                director: "Ա. Հակոբյան",
            },
            {
                name: "Կամակերպություն մեկ, երկու, երեք, չորս ՍՊԸ",
                director: "Ա. Հակոբյան",
            },
            {
                name: "Կամակերպություն մեկ, երկու, երեք, չորս ՍՊԸ",
                director: "Ա. Հակոբյան",
            },
            {
                name: "Կամակերպություն մեկ, երկու, երեք, չորս ՍՊԸ",
                director: "Ա. Հակոբյան",
            },
            {
                name: "Կամակերպություն մեկ, երկու, երեք, չորս ՍՊԸ",
                director: "Ա. Հակոբյան",
            },
        ],
    }),
};
</script>
