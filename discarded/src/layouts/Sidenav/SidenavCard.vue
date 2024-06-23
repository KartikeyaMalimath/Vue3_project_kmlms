<script setup>
import { computed } from "vue";
import { usePiniaStore } from "@/store";
const store = usePiniaStore();

const layout = computed(() => store.Layout);
defineProps({
  card: {
    type: Object,
    required: true,
    title: String,
    description: String,
    links: {
      type: Array,
      label: String,
      route: String,
      color: String,
    },
  },
});
</script>
<template>
  <div
    v-show="layout !== 'landing'"
    class="card card-plain shadow-none"
    id="sidenavCard"
  >

    
  </div>
</template>
