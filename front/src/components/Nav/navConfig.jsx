import AllInboxIcon from '@mui/icons-material/AllInbox';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LoginIcon from '@mui/icons-material/Login';
import Note from '@mui/icons-material/Note';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import React from 'react';

const navConfig = [
  {
    title: 'main',
    path: '/main',
    icon: <AllInboxIcon/>,
  },
  {
    title: 'user',
    path: '/user',
    icon: <AccountBoxIcon/>,
  },
  {
    title: 'plan',
    path: '/plan',
    icon: <Note/>,
  },
  {
    title:'Calendar',
    path: '/calendar',
    icon: <CalendarMonthIcon />
  },
  {
    title: 'login',
    path: '/login',
    icon: <LoginIcon/>,
  },
  {
    title: 'Not found',
    path: '/404',
  },
];

export default navConfig;
