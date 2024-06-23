<script setup>
import { computed } from "vue";
import { usePiniaStore } from "@/store";

import SidenavItem from "./SidenavItem.vue";


const store = usePiniaStore();
const setActiveSidebarLi = computed(() => store.ActiveSidebarLi)

</script>

<template>
  <div
    class="collapse navbar-collapse w-auto h-auto h-100"
    id="sidenav-collapse-main"
  >
    <ul class="navbar-nav">
      <li class="nav-item">
        <sidenav-item
          to="/dashboard"
          :class="{ active: setActiveSidebarLi === 'dashboard' }"
          navText="Dashboard"
        >
          <template v-slot:icon>
            <i class="ni ni-tv-2 text-primary text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>
    </ul>
  </div>
</template>
