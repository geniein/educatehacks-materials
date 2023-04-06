import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import BasicLayout from './layouts/basic';
import MainLaoyout from './layouts/main';
import NotFound from './pages/NotFound';
import React from 'react';
import User from './pages/User';
import LoginPage from './pages/Login';
const Router = ()=> {
  const routes = useRoutes([        
    {
      element: <MainLaoyout />,
      children: [
        { element: <Navigate to="/404" />, index: true },
        { path: '/user', element: <User /> },
        { path: '/login', element: <LoginPage /> },
        { path: '404', element: <NotFound /> },                
        { path: '*', element: <Navigate to="/404" /> },
      ],
    }  
  ]);

  return routes;
}

export default Router;