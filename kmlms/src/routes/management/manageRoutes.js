const routes = [
  {
    path: '/user',
    name: 'ManageLayout',
    component: () => import('@/layouts/management/ManageLayout.vue'),
    children: [
      {
        path: "dashboard",
        name: 'ManageDashboard',
        component: () => import('@/pages/management/ManageDashboard.vue'),
        meta: {
          breadcrumb: [{ title: 'Dashboard', disabled: false, routeName: 'ManageDashboard' }]
        }
      },
      {
        path: "enterprises",
        name: 'ManageEnterprises',
        component: () => import('@/pages/management/ManageEnterprises.vue'),
        meta: {
          breadcrumb: [{ title: 'Enterprises', disabled: false, routeName: 'ManageEnterprises' }]
        }
      },
      {
        path: "enterprise/:eid?",
        name: 'ManageEnterpriseDetails',
        component: () => import('@/pages/management/ManageEnterpriseDetails.vue'),
        meta: {
          breadcrumb: [
            { title: 'Enterprises', disabled: false, href: 'ManageEnterprises' },
            { title: 'Enterprise Details', disabled: true, routeName: 'ManageEnterpriseDetails' }
          ]
        }
      },
    ]
  }
];

export default routes;
