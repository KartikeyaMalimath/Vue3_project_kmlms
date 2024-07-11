<template>
    <v-container fluid class="fill-height">
        <v-row>
            <v-col class="12" sm="3">
                <v-card class="position-sticky top-0">

                    <!-- Content when data is loaded -->
                    <v-card-title class="cursor-pointer py-6" @click="navigateRouter('ManageEnterprises')" exact link>
                        <v-icon icon="mdi-arrow-left-circle-outline" />
                        <span class="text-subtitle-1 ps-3">Back to All Enterprises</span>
                    </v-card-title>
                    <v-card class="ps-4">
                        <v-card-text>
                            <v-list class="cursor-pointer">
                                <v-icon class="me-2" icon="mdi-card-bulleted-settings-outline" />
                                Enterprise Details
                            </v-list>
                        </v-card-text>
                    </v-card>
                </v-card>
            </v-col>
            <v-col col="12" sm="9">
                <v-skeleton-loader :loading="isEntDetailsLoading"
                    type="table-heading, list-item-two-line, list-item-two-line, list-item-two-line">
                    <v-card width="100%">
                        <v-card-title>
                            <div class="d-flex justify-between">
                                {{ enterpriseData.details.name }}
                                <v-spacer></v-spacer>
                                <span class="d-flex align-center text-caption">
                                    <v-tooltip v-if="!isEditing" text="Edit details">
                                        <template v-slot:activator="{ props }">
                                            <v-icon v-bind="props" class="cursor-pointer text-warning" icon="mdi-pencil"
                                                @click="editEnterpriseDetails" />
                                        </template>
                                    </v-tooltip>
                                </span>
                            </div>
                        </v-card-title>
                        <v-divider></v-divider>
                        <v-card-text>
                            <v-table>
                                <tbody>
                                    <tr>
                                        <td width="20%">Enterprise Name:&nbsp;</td>
                                        <td colspan="3">
                                            <template v-if="isEditing">
                                                <v-text-field v-model="enterpriseData.details.name" hide-details="auto"
                                                    variant="underlined" dense class="no-padding small-text-field" />
                                            </template>
                                            <template v-else>
                                                <span>{{ enterpriseData.details.name }}</span>
                                            </template>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width="20%">Address Line 1:&nbsp;</td>
                                        <td width="30%">
                                            <template v-if="isEditing">
                                                <v-text-field v-model="enterpriseData.details.addressLine1"
                                                    hide-details="auto" variant="underlined" dense
                                                    class="no-padding small-text-field" />
                                            </template>
                                            <template v-else>
                                                <span>{{ enterpriseData.details.addressLine1 }}</span>
                                            </template>
                                        </td>
                                        <td width="20%">Primary Contact:&nbsp;</td>
                                        <td width="30%">
                                            <template v-if="isEditing">
                                                <v-text-field v-model="enterpriseData.details.primaryContact"
                                                    hide-details="auto" variant="underlined" dense
                                                    class="no-padding small-text-field" />
                                            </template>
                                            <template v-else>
                                                <span>{{ enterpriseData.details.primaryContact }}</span>
                                            </template>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Address Line 2:&nbsp;</td>
                                        <td>
                                            <template v-if="isEditing">
                                                <v-text-field v-model="enterpriseData.details.addressLine2"
                                                    hide-details="auto" variant="underlined" dense
                                                    class="no-padding small-text-field" />
                                            </template>
                                            <template v-else>
                                                <span>{{ enterpriseData.details.addressLine2 }}</span>
                                            </template>
                                        </td>
                                        <td>Secondary Contact:&nbsp;</td>
                                        <td>
                                            <template v-if="isEditing">
                                                <v-text-field v-model="enterpriseData.details.secondaryContact"
                                                    hide-details="auto" variant="underlined" dense
                                                    class="no-padding small-text-field" />
                                            </template>
                                            <template v-else>
                                                <span>{{ enterpriseData.details.secondaryContact }}</span>
                                            </template>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>City:&nbsp;</td>
                                        <td>
                                            <template v-if="isEditing">
                                                <v-text-field v-model="enterpriseData.details.city" hide-details="auto"
                                                    variant="underlined" dense class="no-padding small-text-field" />
                                            </template>
                                            <template v-else>
                                                <span>{{ enterpriseData.details.city }}</span>
                                            </template>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Country:&nbsp;</td>
                                        <td>
                                            <template v-if="isEditing">
                                                <v-autocomplete v-model="enterpriseData.details.country"
                                                    variant="underlined"
                                                    :items="['India', 'United Kingdom']"></v-autocomplete>
                                            </template>
                                            <template v-else>
                                                <span>{{ enterpriseData.details.country }}</span>
                                            </template>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Postcode:&nbsp;</td>
                                        <td>
                                            <template v-if="isEditing">
                                                <v-text-field v-model="enterpriseData.details.postcode"
                                                    hide-details="auto" variant="underlined" dense
                                                    class="no-padding small-text-field" />
                                            </template>
                                            <template v-else>
                                                <span>{{ enterpriseData.details.postcode }}</span>
                                            </template>
                                        </td>
                                    </tr>
                                </tbody>
                            </v-table>
                            <v-scroll-y-transition>
                                <div class="">
                                    <v-divider class="my-4"></v-divider>
                                    <div class="d-flex justify-end">
                                        <v-btn class="mx-2" v-if="isEditing" @click="cancelEditing"
                                            density="comfortable" color="warning">Cancel</v-btn>
                                        <v-btn class="mx-2" v-if="isEditing" @click="saveChanges" density="comfortable"
                                            color="success">Save</v-btn>
                                    </div>
                                </div>
                            </v-scroll-y-transition>
                        </v-card-text>
                    </v-card>
                </v-skeleton-loader>
                <v-divider size="0" class="my-4"></v-divider>

                <v-card>
                    <v-card-title>
                        <span>
                            Enterprise Users
                        </span>
                    </v-card-title>
                    <v-divider></v-divider>
                    <v-card-text>
                        <v-data-table :loading="entpUserLoading" loading-text="Loading... Please wait"
                            :headers="userHeaders" :items="enterpriseUsers">
                            <template v-slot:item.role="{ value }">
                                <v-chip class="cursor-pointer" color="primary">
                                    <span>{{ value }}</span>
                                </v-chip>
                            </template>
                            <template v-slot:item.status="{ value }">
                                <v-chip class="cursor-pointer" v-bind:color="getStatusColor(value)">
                                    <span>{{ value }}</span>
                                </v-chip>
                            </template>
                            <template v-slot:item.action="{ item }">
                                <v-tooltip text="View/Edit User">
                                    <template v-slot:activator="{ props }">
                                        <v-btn v-bind="props" color="warning" variant="tonal" size="small"
                                            icon="mdi-account-edit"></v-btn>
                                    </template>
                                </v-tooltip>
                            </template>
                        </v-data-table>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const navigateRouter = (routeName) => {
    router.push({ name: routeName });
};

const isEntDetailsLoading = ref(true);
const enterpriseData = ref({});
const entpUserLoading = ref(true);
const enterpriseUsers = ref([]);
const userHeaders = ref([
    { title: 'ID', key: 'id' },
    { title: 'Name', key: 'name' },
    { title: 'Role', key: 'role' },
    { title: 'Status', key: 'status' },
    { title: 'Actions', key: 'action' },
]);

onMounted(async () => {
    try {
        setTimeout(() => {
            enterpriseUsers.value = [
                {
                    id: '1234',
                    name: 'Kartikeya Malimath',
                    role: 'Owner',
                    status: 'Active',
                    action: 'view',
                },
                {
                    id: '1234',
                    name: 'Shreyas Bhalerao',
                    role: 'Admin',
                    status: 'Inactive',
                    action: 'view',
                },
            ];
            entpUserLoading.value = false;
        }, 1000);

        setTimeout(() => {
            enterpriseData.value = {
                details: {
                    name: 'Chatterbug Ltd.',
                    primaryContact: '0 113 201 5487',
                    addressLine1: '123 Main Street',
                    secondaryContact: '0 113 154 5487',
                    addressLine2: 'Killingbeck',
                    city: 'Leeds',
                    country: 'United Kingdom',
                    postcode: 'LS14 7SD',
                },
            };
            isEntDetailsLoading.value = false;
        }, 1000);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});

const getStatusColor = (status) => {
    return status === 'Active' ? 'green' : 'red';
};

const editEnterpriseDetails = () => {
    // Ensure data is fetched before accessing it
    if (enterpriseData.value && enterpriseData.value.details) {
        // Enter edit mode and copy current data to tempData
        isEditing.value = true;
        tempData.value = { ...enterpriseData.value.details };
    }
};

const saveChanges = () => {
    // Save changes from tempData back to enterpriseData
    // Example: enterpriseData.value.details = { ...tempData.value };
    isEditing.value = false;
};

const cancelEditing = () => {
    // Exit edit mode without saving changes
    isEditing.value = false;
    enterpriseData.value.details = { ...tempData.value };
};

// Reactive variables for edit mode
const isEditing = ref(false);
const tempData = ref({});
</script>