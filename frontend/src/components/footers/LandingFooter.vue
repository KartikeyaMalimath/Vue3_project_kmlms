<template>
    <v-footer absolute>
        <span class="text-caption">
            Made with love by Kartikeya Malimath
        </span>
        <span class="text-end ml-auto">
            <router-link :to="{ name:  'ManageLogin'}">
                <span class="text-caption">Management</span>
            </router-link>
        </span>
    </v-footer>
</template>

<script>
export default {
    name: 'LandingFooter'
}
</script>