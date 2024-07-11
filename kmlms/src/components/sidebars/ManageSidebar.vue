<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import { useSidebarStore } from '@/stores/SidebarStateStore'

const sidebarStore = useSidebarStore();
const { closeSidebar, openSidebar } = useSidebarStore();
const router = useRouter();
const selectedItem = ref(0);
const userItems = [
    { title: 'Dashboard', icon: 'mdi-view-dashboard', route: 'ManageDashboard' },
    { title: 'Enterprises', icon: 'mdi-domain', route: 'ManageEnterprises' },
    { title: 'My Profile', icon: 'mdi-account', route: 'ManageMyProfile' },
];
const adminItems = [
    { title: 'Users', icon: 'mdi-account-group', route: 'ManageUsers' },
    { title: 'Settings', icon: 'mdi-cog', route: 'ManageSettings' },
];

const navigateTo = (routeName, index) => {
    router.push({ name: routeName });
    selectedItem.value = index;
}

const WindowToggleSidebar = () => {
    if (window.innerWidth <= 1270 && sidebarStore.sidebarOpen) {
        closeSidebar();
    } else if (window.innerWidth > 1270 && !sidebarStore.sidebarOpen) {
        openSidebar();
    }
}

// Watch window resize on component mount
onMounted(() => {
    WindowToggleSidebar()
    window.addEventListener('resize', WindowToggleSidebar);
});

// Clean up on component unmount
onUnmounted(() => {
    window.removeEventListener('resize', WindowToggleSidebar);
});

</script>

<template>
    <v-navigation-drawer app v-model="sidebarStore.sidebarOpen" class="blue darken-3">
        <v-list dense>
            <v-list-item class="py-4"
                prepend-avatar="https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?w=740&t=st=1719113715~exp=1719114315~hmac=c951ce47b0e18aa958bebab693af270be7d953d316155cd2b9fe8bbaed38288d"
                subtitle="username@gmailcom" title="User Name">
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item-group class="py-4" v-model="selectedItem" active-class="primary--text">

                <v-list-item v-for="(item, index) in userItems" :key="item.title" :prepend-icon="item.icon" :title="item.title"
                    @click="navigateTo(item.route, index)" exact link
                    :active="index === selectedItem" 
                    :class="{'text-primary': index === selectedItem}"
                </v-list-item>
            </v-list-item-group>

            <v-divider></v-divider>

            <v-list-item class="text-primary" title="Admin"></v-list-item>
            <v-list-item-group class="py-4" v-model="selectedItem" active-class="primary--text">

                <v-list-item v-for="item in adminItems" :key="item.title" :prepend-icon="item.icon" :title="item.title"
                    @click="navigateTo(item.route)" exact link>
                </v-list-item>
            </v-list-item-group>

            <v-divider></v-divider>

        </v-list>
    </v-navigation-drawer>
</template>

<style scoped>
.v-navigation-drawer__content {
    background-color: #1E1E1E !important;
}

.v-navigation-drawer__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
}
</style>
