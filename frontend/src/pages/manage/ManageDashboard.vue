<script setup>

import { onBeforeMount } from "vue";
import { usePiniaStore } from "@/store";

import MiniStatisticsCard from "@/layouts/manage/cards/MiniStatisticsCard.vue";

const store = usePiniaStore();

onBeforeMount(() => {
    store.setSideNavType("SidenavManageList");
    store.setActiveSidebarLi("dashboard")
    store.setShowNavbar(true);
});

</script>

<template>
    <div class="py-4 container-fluid">
        <div class="row">
            <div class="col-lg-3 col-md-6 col-12">
                <mini-statistics-card title="Total Enterprises" value="0" description="<span
                class='text-sm font-weight-bolder text-success'
                >+0%</span> since yesterday" :icon="{
                    component: 'ni ni-building',
                    background: 'bg-gradient-primary',
                    shape: 'rounded-circle',
                }" />
            </div>
            <div class="col-lg-3 col-md-6 col-12">
                <mini-statistics-card title="Total Users" value="1" description="<span
                class='text-sm font-weight-bolder text-success'
                >+0%</span> since last week" :icon="{
                    component: 'ni ni-circle-08',
                    background: 'bg-gradient-danger',
                    shape: 'rounded-circle',
                }" />
            </div>
            <div class="col-lg-3 col-md-6 col-12">
                <mini-statistics-card title="New Clients" value="+3,462" description="<span
                class='text-sm font-weight-bolder text-danger'
                >-2%</span> since last quarter" :icon="{
                    component: 'ni ni-paper-diploma',
                    background: 'bg-gradient-success',
                    shape: 'rounded-circle',
                }" />
            </div>
            <div class="col-lg-3 col-md-6 col-12">
                <mini-statistics-card title="Sales" value="$103,430" description="<span
                class='text-sm font-weight-bolder text-success'
                >+5%</span> than last month" :icon="{
                    component: 'ni ni-cart',
                    background: 'bg-gradient-warning',
                    shape: 'rounded-circle',
                }" />
            </div>
        </div>
    </div>
</template>