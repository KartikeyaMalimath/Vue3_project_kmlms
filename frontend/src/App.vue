<script setup>
import { computed } from "vue";
import { usePiniaStore } from '@/store';
import Sidenav from "@/layouts/Sidenav/SidebarLayout.vue";
import Navbar from "@/layouts/Navbars/NavBar.vue";

const store = usePiniaStore();
const isNavFixed = computed(() => store.IsNavFixed);
const darkMode = computed(() => store.DarkMode);
const isAbsolute = computed(() => store.IsAbsolute);
const showSidenav = computed(() => store.ShowSidenav);
const layout = computed(() => store.Layout);
const showNavbar = computed(() => store.ShowNavbar);
const showFooter = computed(() => store.ShowFooter);
const showConfig = computed(() => store.ShowConfig);
const hideConfigButton = computed(() => store.HideConfigButton);
const toggleConfigurator = () => store.toggleConfigurator();

const navClasses = computed(() => {
  return {
    "position-sticky bg-white left-auto top-2 z-index-sticky":
      isNavFixed.value && !darkMode.value,
    "position-sticky bg-default left-auto top-2 z-index-sticky":
      isNavFixed.value && darkMode.value,
    "position-absolute px-4 mx-0 w-100 z-index-2": isAbsolute.value,
    "px-0 mx-4": !isAbsolute.value,
  };
});
</script>
<template>
  <div v-show="layout === 'landing'" class="landing-bg h-100 bg-gradient-primary position-fixed w-100"></div>
  <div class="min-height-300 position-absolute w-100 bg-primary"></div>
  <sidenav v-if="showSidenav" />

  <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg">
    
    <!-- nav -->

    <navbar :class="[navClasses]" v-if="showNavbar" />
    <transition name="fade">
      <router-view />
    </transition>

    <app-footer v-show="showFooter" />

    <configurator :toggle="toggleConfigurator" :class="[showConfig ? 'show' : '', hideConfigButton ? 'd-none' : '']" />
  </main>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0px;
  padding: 0px;
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
