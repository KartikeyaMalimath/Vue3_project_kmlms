<script setup>
import { computed } from "vue";
import { usePiniaStore } from "@/store";
import { useRoute } from "vue-router";

const store = usePiniaStore();
const isNavFixed = computed(() => store.IsNavFixed);

const route = useRoute();

const currentPage = computed(() => route.meta.currentPage || "");
const currentDirectory = computed(() => route.meta.currentDirectory || "");

</script>

<template>
  <nav aria-label="breadcrumb">
    <ol
      class="px-0 pt-1 pb-0 mb-0 bg-transparent breadcrumb me-sm-6"
      :class="`${
        isNavFixed ? 'text-dark' : 'text-white'
      }`"
    >
      <li class="text-sm breadcrumb-item">
        <a
          :class="isNavFixed ? 'text-dark' : 'text-white'"
          class="opacity-8"
          href="#"
          >LMS</a
        >
      </li>
      <li
        class="text-sm breadcrumb-item active"
        :class="isNavFixed ? 'text-dark' : 'text-white'"
        aria-current="page"
      >
        {{ currentDirectory }}
        
      </li>
    </ol>
    <h6
      class="mb-0 font-weight-bolder"
      :class="isNavFixed ? 'text-dark' : 'text-white'"
    >
        {{ currentPage }}
    </h6>
  </nav>
</template>
