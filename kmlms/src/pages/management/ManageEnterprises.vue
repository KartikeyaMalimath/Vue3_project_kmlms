<template>
    <v-container fluid class="fill-height">
        <v-card class="w-100" flat>
            <v-card-title class="d-flex align-center pe-2 pt-4">
                All Enterprises
                <v-spacer></v-spacer>
                <v-text-field v-model="search" density="compact" label="Search" prepend-inner-icon="mdi-magnify"
                    variant="solo-filled" flat hide-details single-line></v-text-field>
            </v-card-title>

            <v-data-table :loading="enterpriseLoading" loading-text="Loading... Please wait" :headers="headers"
                :items="enterprises" :search="search">
                <template v-slot:item="{ item }">
                    <tr>
                        <td class="border-s-xl"
                            :class="{ 'border-success': item.status == 'Active', 'border-error': item.status == 'In-active' }">
                            <div class="text-subtitle-2">{{ item.id }}</div>
                        </td>
                        <td>
                            <div class="text-subtitle-1">{{ item.enterprise }}</div>
                            <div class="text-caption">{{ item.postcode }}</div>
                        </td>
                        <td>
                            <div class="text-subtitle-1">{{ item.users }}</div>
                        </td>
                        <td>
                            <v-chip class="cursor-pointer" v-bind:color="getStatusColor(item.status)">
                                <span>{{ item.status }}</span>
                            </v-chip>
                        </td>
                        <td>
                            <v-tooltip text="Open Enterprise">
                                <template v-slot:activator="{ props }">
                                    <v-btn v-bind="props" color="success" variant="tonal" size="small"
                                        icon="mdi-open-in-new" @click="openEnterprise(item.id)"></v-btn>
                                </template>
                            </v-tooltip>
                        </td>
                    </tr>
                </template>
            </v-data-table>
        </v-card>
    </v-container>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { ref, onMounted } from 'vue'

const router = useRouter()

const search = ref('')
const enterpriseLoading = ref(true) // Use ref for loading state
const enterprises = ref([])
const headers = ref([
    { title: 'ID', key: 'id' },
    { title: 'Enterprise Name', key: 'enterprise' },
    { title: 'Users', key: 'users' },
    { title: 'Status', key: 'status' },
    { title: 'Actions', key: 'action' }
])

const getStatusColor = (status) => {
    return status === 'Active' ? 'green' : 'red'
}

const openEnterprise = (eid) => {
    // This is assuming you have defined router elsewhere in your setup
    router.push({ name: 'ManageEnterpriseDetails', params: { eid } })
}

onMounted(async () => {
    try {
        // Simulate data fetching with setTimeout
        setTimeout(() => {
            enterprises.value = [
                {
                    id: '1234',
                    enterprise: 'Chatterbug Ltd.',
                    postcode: 'LS14 1FD',
                    users: 50,
                    status: 'Active',
                    action: 'view'
                },
                {
                    id: '4587',
                    enterprise: 'Brightspeech Ltd.',
                    postcode: 'LS14 1FD',
                    users: 14,
                    status: 'In-active',
                    action: 'view'
                }
            ]
            enterpriseLoading.value = false // Set loading to false after data is fetched
        }, 1000) // Simulating a 2-second delay
    } catch (error) {
        console.error('Error fetching enterprises:', error)
    }
})
</script>

<!-- Optional script section if using Options API -->

<script>
export default {
    data() {
        return {
            search: ''
        }
    },
    methods: {
        getStatusColor(status) {
            return status === 'Active' ? 'green' : 'red'
        },
        openEnterprise(eid) {
            this.$router.push({ name: 'ManageEnterpriseDetails', params: { eid } })
        }
    }
}
</script>
