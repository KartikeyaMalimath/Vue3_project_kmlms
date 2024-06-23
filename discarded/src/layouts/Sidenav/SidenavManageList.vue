<script setup>
import { computed } from "vue";
import { usePiniaStore } from "@/store";

import SidenavItem from "./SidenavItem.vue";
import SidenavCollapseItem from "./SidenavCollapseItem.vue";

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
      <li class="nav-item mt-3">
        <h6 class="ps-4 ms-2 text-uppercase text-sm font-weight-bolder opacity-7">
          Admin
        </h6>
        <hr class="dark horizontal my-1">
      </li>
      <SidenavItem to="/users/1" :class="{ active: setActiveSidebarLi === 'users' }" navText="Users">
        <template v-slot:icon>
          <span class="material-icons text-primary opacity-10">group</span>
        </template>
      </SidenavItem>
      <SidenavCollapseItem navText="Settings">
        <template v-slot:icon>
          <span class="material-icons text-primary opacity-10">settings</span>
        </template>
        <li class="nav-item">
          <SidenavItem to="/profile" :class="{ active: setActiveSidebarLi === 'test' }" navText="Config">
            <template v-slot:icon>
              <span class="text-primary opacity-10">C</span>
            </template>
          </SidenavItem>
        </li>
        <li class="nav-item">
          <SidenavItem to="/enterprises" navText="Users">
            <template v-slot:icon>
              <span class="text-primary opacity-10">U</span>
            </template>
          </SidenavItem>
        </li>
        <!-- Add more SidenavItem components as needed -->
      </SidenavCollapseItem>

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
