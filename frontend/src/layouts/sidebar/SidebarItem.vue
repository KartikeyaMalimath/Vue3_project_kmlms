<script setup>
import { computed } from "vue";
import { usePiniaStore } from "@/store";

const store = usePiniaStore();
const sidebarMinimize = () => store.minimizeSidebar();
const setActiveSidebarLi = computed(() => store.ActiveSidebarLi);

console.log(setActiveSidebarLi.value)

const minimizeSidebar = () => {
    if (window.innerWidth < 1200) {
        sidebarMinimize();
    }
};

defineProps({
    to: {
        type: String,
        required: true,
    },
    navText: {
        type: String,
        required: true,
    },
    navActiveKey: {
        type: String,
        required: true,
    }
});
</script>

<template>
    <router-link :to="to" class="text-xs uppercase py-2 font-bold block hover:text-blueGray-500"
        :class="setActiveSidebarLi === navActiveKey ? 'text-emerald-600' : 'text-blueGray-700'"
        @click="minimizeSidebar">
        <div class="flex flex-row items-center">
        <div class="mr-3 text-sm ">
            <slot name="icon"></slot>
        </div>
        <span class="nav-link-text">{{ navText }}</span>
    </div>
    </router-link>
</template>
