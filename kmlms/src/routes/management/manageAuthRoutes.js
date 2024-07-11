const routes = [
    {   
        path: '/',
        name: 'ManageAuth',
        component: () => import('@/layouts/management/ManageAuthLayout.vue'),
        children: [
            {
              path: "",
              name: 'ManageLogin',
              component: () => import('@/pages/management/ManageLogin.vue'),
            },
        ]
    }
];

export default routes;
