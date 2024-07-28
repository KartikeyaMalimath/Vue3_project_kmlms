const routes = [
  {
    path: '/user',
    name: 'ManageLayout',
    component: () => import('@/layouts/management/ManageLayout.vue'),
    children: [
      {
        path: 'dashboard',
        name: 'ManageDashboard',
        component: () => import('@/pages/management/ManageDashboard.vue'),
        meta: {
          breadcrumb: [{ title: 'Dashboard', disabled: false, routeName: 'ManageDashboard' }]
        }
      },
      {
        path: 'enterprises',
        name: 'ManageEnterprises',
        component: () => import('@/pages/management/ManageEnterprises.vue'),
        meta: {
          breadcrumb: [{ title: 'Enterprises', disabled: false, routeName: 'ManageEnterprises' }]
        }
      },
      {
        path: 'enterprises/:eid?',
        name: 'ManageEnterpriseDetails',
        component: () => import('@/pages/management/ManageEnterpriseDetails.vue'),
        meta: {
          breadcrumb: [
            { title: 'Enterprises', disabled: false, routeName: 'ManageEnterprises' },
            { title: 'Enterprise Details', disabled: true, routeName: 'ManageEnterpriseDetails' }
          ]
        }
      },
      {
        path: 'store',
        name: 'ManageStore',
        component: () => import('@/pages/management/ManageStore.vue'),
        meta: {
          breadcrumb: [{ title: 'Store', disabled: false, routeName: 'ManageStore' }]
        }
      },
      {
        path: 'assets',
        name: 'ManageAssets',
        component: () => import('@/pages/management/ManageAssets.vue'),
        meta: {
          breadcrumb: [{ title: 'Assets', disabled: false, routeName: 'ManageAssets' }]
        }
      },
      {
        path: 'new_asset',
        name: 'ManageNewAsset',
        component: () => import('@/pages/management/ManageNewAsset.vue'),
        meta: {
          breadcrumb: [
            { title: 'Assets', disabled: false, routeName: 'ManageAssets' },
            { title: 'New Asset', disabled: true, routeName: 'ManageNewAsset' }
          ]
        }
      }
    ]
  }
]

export default routes
