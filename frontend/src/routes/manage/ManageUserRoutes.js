const routes = [
  {
    path: '/dashboard',
    name: 'ManageLayout',
    component: () => import('@/layouts/manage/ManageDashboardLayout.vue'),
    children: [
      {
        path: "",
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
      },
      {
        path: '/users/:activeboolean',
        name: 'ManageUsers',
        component: () => import('@/pages/manage/ManageUsers.vue'),
        meta: {
          currentDirectory: "Management / Users",
          currentPage: "Active Users",
          active: null
        },
        beforeEnter: (to, from, next) => {
          const activeBoolean = parseInt(to.params.activeboolean, 10);
          if (activeBoolean === 0 || activeBoolean === 1) {
            to.meta.active = activeBoolean;
            if (activeBoolean === 1) {
              to.meta.currentPage = "Active Users";
            }
            if (activeBoolean === 0) {
              to.meta.currentPage = "Inactive Users";
            }
            next();
          } else {
            next({ name: 'PageNotFound' });
          }
        }
      }
    ],
  }
];

export default routes;
