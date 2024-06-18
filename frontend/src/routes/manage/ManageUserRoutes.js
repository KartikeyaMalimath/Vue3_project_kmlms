const routes = [
    {
        path: '/dashboard',
        name: 'ManageDashboard',
        component: () => import('@/pages/manage/ManageDashboard.vue'),
        meta: {
            currentDirectory: "Management",
            currentPage: "Dashboard"
        }
    },
    {
        path: '/enterprises',
        name: 'ManageEnterprises',
        component: () => import('@/pages/manage/ManageEnterprises.vue'),
        meta: {
            currentDirectory: "Management",
            currentPage: "Enterprises"
        }
    },
    {
        path: '/enterprises/:eid',
        name: 'ManageEnterprisesDetails',
        component: () => import('@/pages/manage/ManageEnterpriseDetails.vue'),
        meta: {
            currentDirectory: "Management / Enterprises",
            currentPage: "View Enterprise"
        }
    }
];

export default routes;
