import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import BasicLayout from './layouts/basic';
import NotFound from './pages/NotFound';
import React from 'react';
const Router = ()=> {
  const routes = useRoutes([        
    {
      element: <BasicLayout />,
      children: [
        { element: <Navigate to="/404" />, index: true },
        { path: '404', element: <NotFound /> },                
        { path: '*', element: <Navigate to="/404" /> },
      ],
    }  
  ]);

  return routes;
}

export default Router;