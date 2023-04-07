import { styled } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';
import Nav from '../../components/Nav';
import useSWR from 'swr';
import fetcher from '../../utils/fetcher';

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

const Layout = styled('div')({
    display: 'flex',
    minHeight: '100%',
    overflow: 'hidden'
});

const Main = styled('div')(({theme})=>({
    flexGrow: 1,
    overflow: 'auto',
    minHeight: '100%',
    paddingTop: APP_BAR_MOBILE + 24,
    paddingBottom: theme.spacing(10),
    [theme.breakpoints.up('lg')]: {
      paddingTop: APP_BAR_DESKTOP + 24,
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
}))

const MainLayout = () =>{
    const [open, setOpen] = useState(false);
    const { data: userData, error, revalidate, mutate } = useSWR('http://localhost:8080/user/user', fetcher);
    console.log(userData);
    return(
        <Layout>
            <Header onOpenNav={() => setOpen(true)} />
            <Nav openNav={open} onCloseNav={() => setOpen(false)} />
            <Main>
                <Outlet/>
            </Main>
        </Layout>
    )
}

export default MainLayout