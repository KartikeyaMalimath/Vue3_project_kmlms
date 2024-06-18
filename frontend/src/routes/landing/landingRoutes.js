const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/pages/landing/LandingHome.vue')
    }
];

export default routes;
