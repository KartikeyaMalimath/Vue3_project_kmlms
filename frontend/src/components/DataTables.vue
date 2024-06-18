<!-- DataTableView.vue -->
<template>
    <div class="table-responsive w-100">
        <table ref="dataTableRef" class="table table-striped w-100 display"></table>
    </div>
</template>

<script setup>
import { ref, onMounted, nextTick, watch } from 'vue';
import DataTablesCore from 'datatables.net-bs5';
import 'datatables.net-bs5/css/dataTables.bootstrap5.min.css';

// Define props
const props = defineProps({
    jsonData: {
        type: Array,
        required: true,
    },
    columns: {
        type: Array,
        required: true,
    },
});

// Refs
const dataTableRef = ref(null);
let dataTableInstance = null;

// DataTable options
const options = {
    responsive: true,
    select: {
        style: 'single'
    },
    initComplete: function (settings, json) {
        console.log('DataTable initialized:', settings);
        console.log('Data loaded:', json);
    },
};

// Watch for jsonData changes and reinitialize DataTable
watch(
    () => props.jsonData,
    (newData) => {
        if (dataTableInstance) {
            dataTableInstance.clear();
            dataTableInstance.rows.add(newData);
            dataTableInstance.draw();
        }
    },
    { immediate: true }
);

// Ensure DataTable initialization after DOM is fully updated
onMounted(async () => {
    await nextTick(); // Wait for the DOM to be fully updated
    initializeDataTable();
});

const initializeDataTable = () => {
    if (dataTableRef.value) {
        dataTableInstance = new DataTablesCore(dataTableRef.value, {
            ...options,
            data: props.jsonData,
            columns: props.columns.map((column) => ({
                title: column.title,
                data: column.data,
                render: column.render ? column.render : null, // Adjusted for potential API change
                className: column.className ? column.className : '' // Changed from headerClass to className
            })),
            initComplete: options.initComplete
        });
    }
};
</script>


<style scoped>
@import 'datatables.net-bs5/css/dataTables.bootstrap5.min.css';
/* DataTables Bootstrap 5 CSS */
</style>