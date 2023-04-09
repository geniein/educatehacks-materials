import AllInboxIcon from '@mui/icons-material/AllInbox';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LoginIcon from '@mui/icons-material/Login';
import Note from '@mui/icons-material/Note';
import React from 'react';
const navConfig = [
  {
    title: 'inbox',
    path: '/inbox',
    icon: <AllInboxIcon/>,
  },
  {
    title: 'parent',
    path: '/user',
    icon: <AccountBoxIcon/>,
  },
  {
    title: 'plan',
    path: '/plan',
    icon: <Note/>,
  },  
  // {
  //   title: 'login',
  //   path: '/login',
  //   icon: <LoginIcon/>,
  // },
  // {
  //   title: 'verify',
  //   path: '/verify',
  // },
  // {
  //   title: 'Not found',
  //   path: '/404',
  // },
];

export default navConfig;
