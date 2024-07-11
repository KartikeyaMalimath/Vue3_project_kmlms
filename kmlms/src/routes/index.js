import { createRouter, createWebHistory } from 'vue-router';
import managementRoutes from '@/routes/management';

const routes = [
    ...managementRoutes,
    {
        path: '/',
        name: 'Landing',
        component: () => import('@/layouts/landing/LandingLayout.vue'), // Lazy load LandingLayout
        children: [
            {
                path: '',
                name: 'LandingHome',
                component: () => import('@/pages/landing/LandingHome.vue') // Lazy load LandingHome
            }
        ]
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    const currentDomain = window.location.hostname;
    const subdomain = currentDomain.split('.')[0];
  
    // Handle routes under the manage subdomain
    if (subdomain === 'manage') {
      // Check if the requested route is under the manage subdomain
      if (to.path.startsWith('/su')) {
        next();
      } else {
        // Redirect to the manage subdomain version of the route
        next({ path: `/su${to.fullPath}` });
      }
    } 
    // Handle routes for other subdomains or localhost
    else if (subdomain === '' || currentDomain === 'localhost') {
      if (to.name !== 'LandingHome') {
        next({ name: 'LandingHome' });
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
