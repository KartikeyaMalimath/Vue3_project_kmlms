<script setup>
import { computed } from "vue";
import { usePiniaStore } from "@/store";
import ManageSidebar from "@/layouts/sidebar/ManageSidebar.vue";

const store = usePiniaStore();
const layout = computed(() => store.Layout);
const sidenavType = computed(() => store.SideNavType);
const darkMode = computed(() => store.DarkMode);
</script>

<template>
  <div v-show="layout === 'default'"
    class="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl flex flex-wrap items-center justify-between md:w-64 z-10 py-4 px-6"
    :class="{ 'bg-white': darkMode, 'bg-white': !darkMode }"></div>
  <nav
    class="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-0">
    <div class="flex justify-center items-center">
      <router-link class="m-0 navbar-brand" to="/">
        <span class="ms-2 font-bold me-2 text-black">KM-LMS</span>
      </router-link>
    </div>

    <hr class="mt-2 border-t border-gray-300 dark:border-gray-700" />

    <!-- Ensure sidenavType conditionally renders manage-sidebar -->
    <manage-sidebar v-if="sidenavType === 'ManageSidenav'" />


  </nav>
</template>
