<script setup>
import { computed } from "vue";
import { usePiniaStore } from '@/store';
// import Navbar from "@/layouts/Navbars/NavBar.vue";
// import FooterDashboard from "@/layouts/FooterDashboard.vue";


const store = usePiniaStore();
// const isNavFixed = computed(() => store.IsNavFixed);
// const darkMode = computed(() => store.DarkMode);
// const isAbsolute = computed(() => store.IsAbsolute);
const showSidenav = computed(() => store.ShowSidenav);
const showNavbar = computed(() => store.ShowNavbar);
// const showFooter = computed(() => store.ShowFooter);
// const showConfig = computed(() => store.ShowConfig);
// const hideConfigButton = computed(() => store.HideConfigButton);
// const toggleConfigurator = () => store.toggleConfigurator();

// const navClasses = computed(() => {
//     return {
//         "position-sticky bg-white left-auto top-2 z-index-sticky":
//             isNavFixed.value && !darkMode.value,
//         "position-sticky bg-default left-auto top-2 z-index-sticky":
//             isNavFixed.value && darkMode.value,
//         "position-absolute px-4 mx-0 w-100 z-index-2": isAbsolute.value,
//         "px-0 mx-4": !isAbsolute.value,
//     };
// });
</script>

<template>
    <div class="h-full w-full fixed bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700">
        <div class="relative bg-blueGray-100 flex h-full">
            <sidebar-layout v-if="showSidenav" class="w-64" />
            <div class="fixed bg-emerald-600 w-full pb-64"></div>
                <main class="flex-1 relative h-full max-h-screen rounded-lg px-4 pt-12"
                    :class="showSidenav ? 'dashboard-sidebar-main' : 'dashboard-main'">
                    <manage-navbar v-if="showNavbar" />
                    <!-- <header-stats /> -->
                    <div class="pt-5 w-full">
                        <router-view />
                    </div>
                    <!-- <footer-admin /> -->
                </main>
        </div>
    </div>
</template>

<script>
import ManageNavbar from "@/components/navbars/ManageNavbar.vue";
import SidebarLayout from "@/layouts/sidebar/SidebarLayout.vue";
// import HeaderStats from "@/components/Headers/HeaderStats.vue";
// import FooterAdmin from "@/components/Footers/FooterAdmin.vue"; 
export default {
    name: "admin-layout",
    data() {
        return {
            showSidenav: false,
            showNavbar: true,
        }
    },
    components: {
        ManageNavbar
    },
};
</script>

<style>
.dashboard-sidebar-main {
    margin-left: 17.125rem;
}

.dashboard-main {
    margin-left: 0rem;
}


.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.7s ease;
}

.fade-enter-to,
.fade-leave-from {
    opacity: 1;
}
</style>