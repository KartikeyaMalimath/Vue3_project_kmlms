<script setup>
import { computed } from "vue";
import { usePiniaStore } from "@/store";

import SidenavItem from "./SidenavItem.vue";

const store = usePiniaStore();
const setActiveSidebarLi = computed(() => store.ActiveSidebarLi)

</script>

<template>
  <div class="collapse navbar-collapse w-auto h-auto h-100" id="sidenav-collapse-main">
    <ul class="navbar-nav">
      <li class="nav-item">
        <sidenav-item to="/dashboard" :class="{ active: setActiveSidebarLi === 'dashboard' }" navText="Dashboard">
          <template v-slot:icon>
            <span class="material-icons text-primary opacity-10">dashboard</span>
          </template>
        </sidenav-item>
      </li>
      <li class="nav-item">
        <sidenav-item to="/enterprises" :class="{ active: setActiveSidebarLi === 'enterprises' }" navText="Enterprises">
          <template v-slot:icon>
            <span class="material-icons text-primary opacity-10">business</span>
          </template>
        </sidenav-item>
      </li>

    </ul>
  </div>

  <div class="pt-3 mx-3 mt-3 sidenav-footer">
    <div v-show="layout !== 'landing'" class="card card-plain shadow-none" id="sidenavCard">
      <router-link to="/" class="mb-3 btn btn-success btn-sm w-100">
        Logout
      </router-link>
    </div>
  </div>
</template>
