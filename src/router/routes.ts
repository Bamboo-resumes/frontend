import { lazy } from 'react';

const Home = lazy(() => import('../components/Home'));
const About = lazy(() => import('../components/About'));
const Contact = lazy(() => import('../components/Contact'));
const Work = lazy(() => import('../components/Work'));
const coreRoutes = [
  {
    path: '/',
    title: 'Home',
    component: Home,
  },
  {
    path: '/about',
    title: 'About',
    component: About,
  },
  {
    path: '/contact',
    title: 'Contact',
    component: Contact,
  },
  {
    path: '/work',
    title: 'Work',
    component: Work,
  }

];

const routes = [...coreRoutes];
export default routes;
