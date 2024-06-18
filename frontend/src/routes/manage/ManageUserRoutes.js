const routes = [
    {
        path: '/dashboard',
        name: 'ManageDashboard',
        component: () => import('@/pages/manage/ManageDashboard.vue'),
        meta: {
            currentDirectory: "LMS Management",
            currentPage: "Dashboard"
        }
    },
    {
        path: '/enterprises',
        name: 'ManageEnterprises',
        component: () => import('@/pages/manage/ManageEnterprises.vue'),
        meta: {
            currentDirectory: "LMS Management",
            currentPage: "Enterprises"
        }
    }
];

export default routes;
