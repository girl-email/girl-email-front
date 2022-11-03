import React, { lazy } from 'react';
import { RouteObject, useRoutes } from 'react-router';

const Home = lazy(async () => await import('@/pages/home'));

const routes: RouteObject[] = [
    {
        path: '/',
        element: <Home />
    }
];

const router = () => useRoutes(routes);

export default router;