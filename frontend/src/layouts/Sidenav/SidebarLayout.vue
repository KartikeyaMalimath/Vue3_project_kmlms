<script setup>
import { computed } from "vue";
import { usePiniaStore } from "@/store";
import SidenavList from "./SidenavList.vue";
import SidenavManageList from "./SidenavManageList.vue"
import logo from "@/assets/img/logo-ct-dark.png";
import logoWhite from "@/assets/img/logo-ct.png";

const store = usePiniaStore();
const layout = computed(() => store.Layout);
const sidenavType = computed(() => {
  return store.SideNavType; 
});
const sidebarType = computed(() => store.SidebarType);
const darkMode = computed(() => store.DarkMode);
</script>

<template>
  <div
    v-show="layout === 'default'"
    class="min-height-300 position-absolute w-100"
    :class="`${darkMode ? 'bg-transparent' : 'bg-success'}`"
  />

  <aside
    class="my-3 overflow-auto border-0 sidenav navbar navbar-vertical navbar-expand-xs border-radius-xl"
    :class="`fixed-start ms-3  
      ${
        layout === 'landing' ? 'bg-transparent shadow-none' : ' '
      } ${sidebarType}`"
    id="sidenav-main"
  >
    <div class="sidenav-header">
      <i
        class="top-0 p-3 cursor-pointer fas fa-times text-secondary opacity-5 position-absolute end-0 d-none d-xl-none"
        aria-hidden="true"
        id="iconSidenav"
      ></i>

      <router-link class="m-0 navbar-brand" to="#">
        <img
          :src="darkMode || sidebarType === 'bg-default' ? logoWhite : logo"
          class="navbar-brand-img h-100"
          alt="main_logo"
        />

        <span class="ms-2 font-weight-bold me-2">Welcome to KM-LMS</span>
      </router-link>
    </div>

    <hr class="mt-0 horizontal dark" />

    <sidenav-list v-if="sidenavType === 'SidenavList'" />
    <sidenav-manage-list v-else-if="sidenavType === 'SidenavManageList'" />
  </aside>
</template>
