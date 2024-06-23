<template>
    <v-main>
        <LandingNavbar/>
        <router-view />
        <LandingFooter />
    </v-main>
</template>

<script>
import LandingNavbar from '@/components/navbars/LandingNavbar.vue';
import LandingFooter from '@/components/footers/LandingFooter.vue';

export default {
    name: 'LandingLayout',
    components: {
        LandingNavbar,
        LandingFooter
    }
}

</script>