const routes = [
    {   
        path: '/',
        name: 'ManageAuth',
        component: () => import('@/layouts/manage/ManageAuthLayout.vue'),
        children: [
            {
              path: "",
              component: () => import('@/pages/manage/ManageLogin.vue'),
            },
        ]
    }
];

export default routes;
