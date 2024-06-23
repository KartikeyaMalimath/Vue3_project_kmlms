<script setup>
import { onBeforeMount } from "vue";
import { usePiniaStore } from "@/store"
import StickyCard from '@/components/stickyCards/StickyCard.vue';

const store = usePiniaStore();
onBeforeMount(() => {
    store.setSideNavType("SidenavManageList");
    store.setActiveSidebarLi("enterprises")
    store.setShowNavbar(true);
});

</script>

<template>
    <div>
        <div class="row mx-2 mt-5">
            <div class="col-12 col-sm-3">
                <StickyCard :items="navItems" />
            </div>
            <div class="col-12 col-sm-9">
                <div class="card" id="enterprise-details-card">
                    <div class="card-header">
                        <h6>Enterprise Name</h6>
                    </div>                
                    <hr class="dark horizontal my-2">
                    <div class="card-body">
                        <p>Enterprise Data</p>
                    </div>
                </div>  
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'ManageEnterpriseDetails',
  components: {
    StickyCard
  },
  data() {
    return {
      navItems: [
        { id: 1, icon: 'business', name: 'Enterprise Details', href: '#enterprise-details-card' },
        { id: 2, icon: 'people', name: 'Enterprise Users', href: '#people-card' },
        { id: 3, icon: 'shopping_cart', name: 'Subscriptions', href: '#subscription-card' },
        { id: 4, icon: 'storage', name: 'Storage', href: '#storage-card' },
        { id: 5, icon: 'delete_forever', name: 'Delete Account', href: '#delete-card' }
      ]
    };
  }
}
</script>
