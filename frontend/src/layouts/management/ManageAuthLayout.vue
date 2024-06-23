<template>
    <v-main>
        <router-view />
        <ManageFooter />
    </v-main>
</template>

<script>
import ManageFooter from '@/components/footers/ManageFooter.vue';

export default {
    name: 'ManageAuthLayout',
    components: {
        ManageFooter
    }
}

</script>