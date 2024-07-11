<script setup>
import ManageSidebar from '@/components/sidebars/ManageSidebar.vue';
import ManageFooter from '@/components/footers/ManageFooter.vue';
import ManageDashNavbar from '@/components/navbars/ManageDashNavbar.vue';

</script>

<template>

    <ManageSidebar />
    <ManageDashNavbar />
    <router-view v-slot="{ Component, route }">
        <v-scale-transition>
            <component :is="Component" :key="route.path" />
        </v-scale-transition>
    </router-view>
    <ManageFooter />

</template>