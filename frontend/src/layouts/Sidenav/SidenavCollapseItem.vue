<script setup>
import { ref, watch, defineProps, useSlots } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const slots = useSlots();
const isExpanded = ref(false);

const props = defineProps({
  navText: {
    type: String,
    required: true,
  },
  activeClass: {
    type: String,
    default: 'active'
  }
});

const checkActiveItem = () => {
  const defaultSlot = slots.default ? slots.default() : [];
  isExpanded.value = defaultSlot.some(vnode => vnode.props && vnode.props.to === route.path);
};

// Watch for route changes to update the expanded state
watch(() => route.path, checkActiveItem);

// Initial check when component is mounted
checkActiveItem();
</script>

<template>
  <div class=".navbar-nav">
    <a
      href="#"
      class="nav-link"
      :class="{ active: isExpanded }"
      aria-expanded="false"
      data-bs-toggle="collapse"
      @click="isExpanded = !isExpanded"
    >
      <div class="icon icon-shape icon-sm text-center d-flex align-items-center justify-content-center">
        <slot name="icon"></slot>
      </div>
      <span class="nav-link-text ms-2">{{ props.navText }}</span>
      <i class="ms-auto material-icons">
        {{ isExpanded ? 'expand_less' : 'expand_more' }}
      </i>
    </a>
    <ul class="collapse list-unstyled ps-3" :class="{ 'show': isExpanded }">
      <slot></slot>
    </ul>
  </div>
</template>

