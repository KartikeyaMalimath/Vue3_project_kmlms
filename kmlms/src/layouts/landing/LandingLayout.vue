<script setup>
import LandingNavbar from "@/components/navbars/LandingNavbar.vue"
import LandingFooter from "@/components/footers/LandingFooter.vue"
</script>

<template>
    <LandingNavbar />
    <v-container fluid class="fill-height pa-0 d-block">
        <router-view />
    </v-container>
    <LandingFooter />
</template>
