import { createRouter, createWebHistory } from 'vue-router';
import managementRoutes from '@/router/management';

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

export default router;
