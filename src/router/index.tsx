import React, { lazy } from 'react';
import { RouteObject, useRoutes, Navigate } from 'react-router';
import Layouts from '@/pages/layout';

const Home = lazy(async () => await import('@/pages/home'));
const Task = lazy(async () => await import('@/pages/task'));

const routes: RouteObject[] = [
    {
        path: '/',
        element:  <Navigate to="/layout" />
    },
    {
        path: '/layout',
        element: <Layouts />,
        children: [
          {
            index: true,
            element: <Home />
          },
          {
            path: 'home',
            element: <Home />
          },
          {
            path: 'task',
            element: <Task />
          }
        ]
      }
];

const router = () => useRoutes(routes);

export default router;