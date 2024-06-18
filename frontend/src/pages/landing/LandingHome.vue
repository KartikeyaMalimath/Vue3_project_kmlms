<script setup>
import { onBeforeUnmount, onBeforeMount } from "vue";
import NavBar from '@/layouts/landing/NavBar.vue';
import { usePiniaStore } from '@/store';

const body = document.getElementsByTagName("body")[0];
const store = usePiniaStore();

onBeforeMount(() => {
  store.setHideConfigButton(true);
  store.setShowNavbar(false);
  store.setShowSidenav(false);
  store.setShowFooter(false);
  body.classList.remove("bg-gray-100");
});
onBeforeUnmount(() => {
  store.setHideConfigButton(false);
  store.setShowNavbar(true);
  store.setShowSidenav(true);
  store.setShowFooter(true);
  body.classList.add("bg-gray-100");
});
</script>

<template id="LandingHome">
  <div class="container top-0 position-sticky z-index-sticky">
    <div class="row">
      <div class="col-12">
        <NavBar isBtn="bg-gradient-light" />
      </div>
    </div>
  </div>
  <main class="mt-0 main-content">
    <section class="grid grid-cols-none lg:grid-cols-2 pb-16 pt-8">
      <div class="container">
        <div class="row">
          <div class="col-12 col-sm-6">
            <h1>Welcome to KM-LMS</h1>
            <p class="mt-4 text-left">
              A Saas Based one top soluntion for Enterprise LMS Needs to Manager your Employees and Business& Individual
              Customers
            </p>
          </div>
          <div class="col-12 col-sm-6">
            <img class="z-10 w-100"
              src="https://fahimanzamdip.github.io/vue-landing-page/images/illustration-hero.svg" />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>