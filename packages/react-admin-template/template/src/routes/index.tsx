import { createHashRouter as Router } from 'react-router-dom';
import { lazy } from 'react';
import LoginPage from '../views/Login';
import NotFoundPage from '../views/NotFoundPage';
import AppLayout from '../Layout/';

const HomePage = lazy(
  () => import(/* webpackChunkName: "home" */ '@/views/Home'),
);

const router = Router([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: 'home',
        element: <HomePage />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
]);
export default router;
