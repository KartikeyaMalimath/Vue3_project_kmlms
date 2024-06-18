<template>
    <main class="mt-0 main-content">
        <section>
            <div class="page-header min-vh-100">
                <div class="container">
                    <div class="row">
                        <div class="mx-auto col-xl-4 col-lg-5 col-md-7 d-flex flex-column mx-lg-0">
                            <div class="card">
                                <div class="pb-0 card-header text-start">
                                    <h4 class="font-weight-bolder">Sign In</h4>
                                    <p class="mb-0">Enter your email and password to sign in</p>
                                </div>
                                <div class="card-body">
                                    <form role="form">
                                        <div class="mb-3">
                                            <argon-input id="email" type="email" placeholder="Email" name="email"
                                                size="lg" />
                                        </div>
                                        <div class="mb-3">
                                            <argon-input id="password" type="password" placeholder="Password"
                                                name="password" size="lg" />
                                        </div>
                                        <argon-switch id="rememberMe" name="remember-me">Remember me</argon-switch>

                                        <div class="text-center">
                                            <argon-button class="mt-4" variant="gradient" color="success" fullWidth
                                                size="lg" @click="navigateToDashboard">
                                                Sign in
                                            </argon-button>
                                        </div>
                                    </form>
                                    <router-link class="mt-4" variant="gradient" color="success" fullWidth size="lg"
                                        to="/dashboard" @click="navigateToDashboard">
                                        Quick Sign in
                                    </router-link>
                                </div>
                            </div>
                        </div>
                        <div
                            class="top-0 my-auto text-center col-6 d-lg-flex d-none h-100 pe-0 position-absolute end-0 justify-content-center flex-column">
                            <div class="position-relative bg-gradient-primary h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center overflow-hidden"
                                style="
                  background-image: url(&quot;https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/signin-ill.jpg&quot;);
                  background-size: cover;
                ">
                                <span class="mask bg-gradient-success opacity-6"></span>
                                <h4 class="mt-5 text-white font-weight-bolder position-relative">
                                    "Welcome To KM-LMS Super Admin Login"
                                </h4>
                                <p class="text-white position-relative">
                                    Here you can manage all Enterprises that are created in the KM-LMS system.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup>
import { onBeforeUnmount, onBeforeMount } from "vue";
import { usePiniaStore } from '@/store';
import ArgonInput from "@/components/ArgonInput";
import ArgonSwitch from "@/components/ArgonSwitch.vue";
import ArgonButton from "@/components/ArgonButton.vue";
import { useRouter } from 'vue-router';

// Get the Pinia store instance based on the current subdomain
const store = usePiniaStore();

onBeforeMount(() => {
    store.setHideConfigButton(true);
    store.setShowNavbar(false);
    store.setShowSidenav(false);
    store.setShowFooter(false);

});

onBeforeUnmount(() => {
    store.setHideConfigButton(false);
    store.setShowNavbar(true);
    store.setShowSidenav(true);
    store.setShowFooter(true);

});

const router = useRouter();

const navigateToDashboard = () => {
    store.setSideNavType("SidenavManageList");
    router.push('/dashboard')
};
</script>