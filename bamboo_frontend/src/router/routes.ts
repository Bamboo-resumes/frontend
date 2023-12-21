import { lazy } from 'react';

const Home = lazy(() => import('../components/Home'));
const coreRoutes = [
  {
    path: '/',
    title: 'Home',
    component: Home,
  },

];

const routes = [...coreRoutes];
export default routes;
