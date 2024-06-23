<template>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg top-0 z-index-3 position-absolute mt-4"
        :class="isBlur ? isBlur : 'shadow-none my-2 w-100'">
        <div class="container ps-2 pe-0">
            <router-link class="navbar-brand font-weight-bolder ms-lg-0 ms-3"
                :class="darkMode ? 'text-black' : 'text-black'" to="/">KM-LMS Test</router-link>
            <button class="shadow-none navbar-toggler ms-2" type="button" data-bs-toggle="collapse"
                data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="mt-2 navbar-toggler-icon">
                    <span class="navbar-toggler-bar bar1"></span>
                    <span class="navbar-toggler-bar bar2"></span>
                    <span class="navbar-toggler-bar bar3"></span>
                </span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navigation">
                <ul class="navbar-nav mx-auto">
                    <li class="nav-item">
                        <router-link class="nav-link d-flex align-items-center me-2 active" aria-current="page"
                            to="#">
                            <i class="fa fa-chart-pie opacity-6 me-1" aria-hidden="true"
                                :class="isBlur ? 'text-dark' : 'text-dark'"></i>
                            About Us
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link me-2" to="#">
                            <i class="fa fa-user opacity-6 me-1" aria-hidden="true"
                                :class="isBlur ? 'text-dark' : 'text-dark'"></i>
                            Contact
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link me-2" to="#">
                            <i class="fas fa-user-circle opacity-6 me-1" aria-hidden="true"
                                :class="isBlur ? 'text-dark' : 'text-dark'"></i>
                            Get Started
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link me-2" to="#">
                            <i class="fas fa-key opacity-6 me-1" aria-hidden="true"
                                :class="isBlur ? 'text-dark' : 'text-dark'"></i>
                            Sign In
                        </router-link>
                    </li>
                </ul>

            </div>
        </div>
    </nav>
    <!-- End Navbar -->
</template>

<script setup>
defineProps({
    btnBackground: {
        type: String,
        default: "",
    },
    isBlur: {
        type: String,
        default: "",
    },
    darkMode: {
        type: Boolean,
        default: false,
    },
    isBtn: { type: String, default: "bg-gradient-light" },
});
</script>

<style>

</style>
