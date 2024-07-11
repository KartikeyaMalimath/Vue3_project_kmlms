import manageAuthRoutes from './manageAuthRoutes.js';
import manageRoutes from './manageRoutes.js';

const prefixManageRoutes = (routes) => {
    return routes.map(route => ({
        ...route,
        path: `/su${route.path}`,
    }));
}

const prefixedManageAuthRoutes = prefixManageRoutes(manageAuthRoutes);
const prefixedManageRoutes = prefixManageRoutes(manageRoutes);

const routes = [
    ...prefixedManageAuthRoutes,
    ...prefixedManageRoutes
]

export default routes;