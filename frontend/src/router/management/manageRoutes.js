const routes = [
    {   
        path: '/dashboard',
        name: 'ManageLayout',
        component: () => import('@/layouts/management/ManageLayout.vue'),
        children: [
            {
              path: "",
              name: 'ManageDashboard',
              component: () => import('@/pages/management/ManageDashboard.vue'),
            },
        ]
    }
];

export default routes;
