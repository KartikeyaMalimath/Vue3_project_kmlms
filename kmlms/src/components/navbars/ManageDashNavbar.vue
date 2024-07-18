<script setup>
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useSidebarStore } from '@/stores/SidebarStateStore'

// Define reactive state
const breadcrumbs = ref([])

const { toggleSidebar, $reset } = useSidebarStore()

const route = useRoute()
const router = useRouter()

// Watch the route for changes
watch(
  () => route.meta.breadcrumb,
  (newBreadcrumbs) => {
    breadcrumbs.value = newBreadcrumbs || []
  },
  { immediate: true }
)

// Define the logout method
const logout = async () => {
  $reset()
  await router.push({ name: 'ManageAuth' })
  router.go(0)
}
</script>

<template>
  <v-row class="pt-4">
    <v-col col="12" sm="6">
      <div class="d-flex flex-row align-center">
        <v-app-bar-nav-icon @click="toggleSidebar"></v-app-bar-nav-icon>
        <v-breadcrumbs :items="breadcrumbs">
          <template v-slot:prepend>
            <v-icon icon="mdi-jellyfish-outline" size="small"></v-icon>
          </template>
          <template v-slot:item="{ item }">
            <v-breadcrumbs-item :to="{ name: item.routeName }" class="crumb-item text-caption" :disabled="item.disabled"
              exact>
              {{ item.title }}
            </v-breadcrumbs-item>
          </template>
        </v-breadcrumbs>
      </div>
    </v-col>
    <v-col col="12" sm="6" class="pe-8">
      <div class="d-flex flex-row align-center justify-end">
        <v-text-field density="compact" label="Search" prepend-inner-icon="mdi-magnify" variant="solo-filled"
          max-width="200" size="small" flat hide-details single-line>
        </v-text-field>

        <div class="px-4">
          <v-icon class="cursor-pointer" size="small" icon="mdi-bell"></v-icon>
        </div>

        <div class="d-flex align-center">
          <v-btn color="primary" text block @click="logout" size="small" varient="tonal">
            <template v-slot:prepend>
              <v-icon icon="mdi-logout"></v-icon>
            </template>
            Logout
          </v-btn>
        </div>
        <v-menu rounded>
          <template v-slot:activator="{ props }">
            <v-btn icon v-bind="props" size="x-small" class="ml-3">
              <v-avatar color="brown" size="small">
                <span class="text-caption">KM</span>
              </v-avatar>
            </v-btn>
          </template>
          <v-card>
            <v-card-text>
              <div class="mx-auto text-center">
                <v-avatar color="brown">
                  <span class="text-caption">KM</span>
                </v-avatar>
                <h3>Kartikeya Malimath</h3>
                <p class="text-caption mt-1">
                  kartikeyapm@gmail.com
                </p>
                <v-divider class="my-3"></v-divider>
                <v-btn variant="text" rounded>
                  Edit Account
                </v-btn>
              </div>
            </v-card-text>
          </v-card>
        </v-menu>
      </div>
    </v-col>
  </v-row>
</template>
