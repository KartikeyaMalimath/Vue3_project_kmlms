<script setup>
import { onBeforeMount, computed } from "vue";
import { usePiniaStore } from "@/store";
import { useRoute } from "vue-router";
import DataTables from "@/components/datatables/DataTables.vue";


const store = usePiniaStore();
onBeforeMount(() => {
    store.setSideNavType("SidenavManageList");
    store.setActiveSidebarLi("users")
    store.setShowNavbar(true);
});


const route = useRoute()
const activeComputed = computed(() => route.meta.active || null);

</script>

<template>
    <div class="py-4 container-fluid">
        <div class="row">
            <div class="col-4">
                <div class="card">
                    <div class="card-header pb-0">
                        <h4 class="card-title">Total Users</h4>
                    </div>
                    <hr class="dark horizontal my-2">
                    <div class="card-body">
                        Total Users
                    </div>
                </div>
            </div>
            <div class="col-4">
                <div class="card">
                    <div class="card-header pb-0">
                        <h4 class="card-title">Total Users</h4>
                    </div>
                    <hr class="dark horizontal my-2">
                    <div class="card-body">
                        Total Users
                    </div>
                </div>
            </div>
            <div class="col-4">
                <div class="card">
                    <div class="card-header pb-0">
                        <h4 class="card-title">Total Users</h4>
                    </div>
                    <hr class="dark horizontal my-2">
                    <div class="card-body">
                        Total Users
                    </div>
                </div>
            </div>
            <hr class="dark horizontal my-3">
            <div class="col-12">
                <div class="card">
                    <div class="card-header pb-0">
                        <h4 class="card-title">{{ activeComputed == 1 ? `'Active'` : `'Deactivated'` }} Users</h4>
                    </div>
                    <hr class="dark horizontal my-2">
                    <div class="card-body">
                        <DataTables :json-data="jsonData" :columns="columns" class="display" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {
        DataTables
    },
    setup() {
        const store = usePiniaStore();
        onBeforeMount(() => {
            store.setSideNavType("SidenavManageList");
            store.setActiveSidebarLi("users");
            store.setShowNavbar(true);
        });

        const route = useRoute();
        const activeComputed = computed(() => route.meta.active || null);
        return{
        jsonData : [
            {
                'uuid': '8555de5b-5ff2-480f-b264-df0f5ca8a1c9',
                'id': '1',
                'name': 'Kartikeya Malimath',
                'email': 'kartikeya@gmail.com',
                'role': 'Owner',
                'designation': 'Software Development Engineer',
                'team': 'R&D'
            },
        ],

        columns: [
            {
                title: 'ID',
                data: 'id'
            },
            {
                title: 'Name',
                data: 'name',
                render: (data, type, row) => {
                    return `<div class="d-flex flex-column">
                        <h6 class="mb-0">${data}</h6>
                        <p class="text-muted text-xs mb-0">${row.email}</p>
                    </div>`;
                }
            },
            {
                title: 'Role',
                headerClass: 'text-center',
                data: 'role',
                render: (data) => {
                    return `<div class="align-middle">
                        <div class="my-auto">
                            <span class="badge badge-primary">
                                ${data}
                            </span>
                        </div>
                    </div>`;
                }
            },
            {
                title: 'Designation',
                data: 'designation',
                render: (data, type, row) => {
                    return `<div class="d-flex flex-column ps-3">
                                <p class="text-md mb-0">${data}</p>
                                <p class="text-xs mb-0">${row.team}</p>
                            </div>`;
                }
            },
            {
                title: 'Action',
                headerClass: 'text-center',
                data: null,
                render: (data, type, row) => {
                    return `<div class="d-flex justify-content-center align-items-center">
                        <a href="/users/${activeComputed.value}/${row.uuid}" class="icon text-success mb-0">
                            <i class="material-icons">visibility</i>
                        </a>
                    </div>`;
                }
            }
        ]

        

        }
    },
};
</script>