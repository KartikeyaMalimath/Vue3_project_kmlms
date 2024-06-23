<template>
    <v-footer absolute>
        <span class="text-caption">
            Made with love by Kartikeya Malimath
        </span>
        <span class="text-end ml-auto text-caption">
            <span class="mx-2">
                About Us
            </span>
            <router-link :to="{ name:  'ManageLogin'}">
                <span class="mx-2">Management</span>
            </router-link>
        </span>
    </v-footer>
</template>

<script>
export default {
    name: 'ManageFooter'
}
</script>