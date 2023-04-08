import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import BasicLayout from './layouts/basic';
import MainLaoyout from './layouts/main';
import NotFound from './pages/NotFound';
import React from 'react';
import User from './pages/User';
import Login from './pages/Login';
import Main from './pages/Main';
import Inbox from './pages/Inbox';
const Router = ()=> {
  const routes = useRoutes([
    {
      path: 'login',
      element: <Login />,
    },
    {
      element: <MainLaoyout />,
      children: [
        { element: <Navigate to="/login" />, index: true },
        { path: '/user', element: <User /> },        
        { path: '/plan', element: <Main /> },
        { path: '/inbox', element: <Inbox /> },
        { path: '404', element: <NotFound /> },                
        { path: '*', element: <Navigate to="/inbox" /> },
      ],
    }  
  ]);

  return routes;
}

export default Router;