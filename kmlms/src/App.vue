<script setup>
</script>

<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<style scoped>
/* Use deep selector to target Vuetify button styles inside v-number-input */
:deep(.v-number-input .v-btn) {
  background-color: transparent !important;
  color: currentColor !important; /* Ensure the color is applied */
  border-radius: 0 !important; /* Ensure the button is a square */
}

:deep(.v-number-input .v-btn:hover) {
  background-color: rgba(0, 0, 0, 0.1) !important; /* Optional: slight background on hover */
}
</style>
