import { createRouter, createWebHistory } from 'vue-router';
import PageNotFound from '@/layouts/PageNotFound.vue';
import landingRoutes from './landing/landingRoutes.js';
import manageAuthRoutes from './manage/ManageAuthRoutes.js';
import manageUserRoutes from './manage/ManageUserRoutes.js';

// Function to prefix routes from manageRoutes with '/manage'
function prefixManageRoutes(routes) {
  return routes.map(route => ({
    ...route,
    path: `/manage${route.path}`, // Prefix with '/manage'
  }));
}

// Process manageRoutes with prefix
const prefixedManageAuthRoutes = prefixManageRoutes(manageAuthRoutes);
const prefixedManageUserRoutes = prefixManageRoutes(manageUserRoutes);

const routes = [
  ...landingRoutes,
  ...prefixedManageAuthRoutes,
  ...prefixedManageUserRoutes,
  {
    path: '/:catchAll(.*)',
    name: 'PageNotFound',
    component: PageNotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Global navigation guard
router.beforeEach((to, from, next) => {
  const currentDomain = window.location.hostname;
  const subdomain = currentDomain.split('.')[0];

  // Handle routes under the manage subdomain
  if (subdomain === 'manage') {
    // Check if the requested route is under the manage subdomain
    if (to.path.startsWith('/manage')) {
      next();
    } else {
      // Redirect to the manage subdomain version of the route
      next({ path: `/manage${to.fullPath}` });
    }
  } 
  // Handle routes for other subdomains or localhost
  else if (subdomain === '' || currentDomain === 'localhost') {
    if (to.name !== 'Home') {
      next({ name: 'Home' });
    } else {
      next();
    }
  } 
  // Redirect to PageNotFound for unknown subdomains
  else {
    next({ name: 'PageNotFound' });
  }
});

export default router;
