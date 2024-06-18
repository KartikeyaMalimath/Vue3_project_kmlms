<script setup>
import { onBeforeMount } from "vue";
import { usePiniaStore } from "@/store";
import DataTables from "@/components/datatables/DataTables.vue";



const store = usePiniaStore();
onBeforeMount(() => {
    store.setSideNavType("SidenavManageList");
    store.setActiveSidebarLi("enterprises")
    store.setShowNavbar(true);
});

</script>

<template>
    <div class="py-4 container-fluid">
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title">All Enterprises</h4>
                    </div>
                    <div class="card-body">
                        <DataTables :json-data="jsonData" :columns="columns" class="display"/>
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
    data() {
        return {
            // Sample JSON data
            jsonData: [
                {
                    'id': '1',
                    'name': 'Chatterbug',
                    'status': 'Active',
                    'users': '10/12',
                    'action': 'view',
                    'year': '2013'
                },
                {
                    'id': '1',
                    'name': 'Halton',
                    'status': 'Inactive',
                    'users': '0/40',
                    'action': 'view',
                    'year': '2013'
                }
            ],
            // DataTable columns configuration
            columns: [
                {
                    title: 'EID',
                    headerClass: 'text-start',
                    data: 'id',
                    render: (data) => {
                        return `<div class="text-start ps-3">
                            <strong>${data}</strong>
                            </div>`;
                    }
                },
                {
                    title: 'Enterprise Name',
                    headerClass: 'text-start',
                    data: 'name',
                    render: (data, type, row) => {
                        return `<div class="d-flex flex-column ps-3">
                        <h6 class="mb-0">${data}</h5>
                        <p class="text-sm mb-0">${row.year}</p>
                        </div>`;
                    }
                },
                {
                    title: 'Status',
                    headerClass: 'text-center',
                    data: 'status',
                    render: (data) => {
                        return `<div class="align-middle">
                            <div class="my-auto">
                                <span class="badge badge-${data === 'Active'?'success' : 'danger'}">
                                    ${data}
                                </span>
                            </div>
                        </div>`;
                    }
                },
                {
                    title: 'Users',
                    headerClass: 'text-center',
                    data: 'users',
                    render: (data) => {
                        return `<div class="align-middle">
                            <div class="my-auto">
                                    ${data}
                            </div>
                        </div>`;
                    }
                },
                {
                    title: 'Action',
                    headerClass: 'text-center',
                    data: null,
                    render: (data, type, row) => {
                        return `<div class="d-flex justify-content-center align-items-center">
                            <a href="/enterprises/${row.id}" class="icon text-success mb-0">
                                <i class="material-icons">visibility</i>
                            </a>
                        </div>`;
                    }
                },
            ],
        };
    },
};
</script>