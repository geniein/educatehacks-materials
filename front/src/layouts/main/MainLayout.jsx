import { styled } from '@mui/material';
import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Nav from '../../components/Nav';
import useSWR from "swr"
import fetcher from '../../utils/fetcher';
import axios from 'axios';
import { Context } from '../../utils/contextProvider';

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
    const navigate = useNavigate();

    // const { data: userData, error, revalidate, mutate } = useSWR('http://localhost:8080/user/auth', fetcher, {
    //     dedupingInterval: 2000, // 2초
    // });
    const { loggedUser, loggedIn, setLoggedUser, setLoggedIn } = useContext(Context);  
    
    useEffect(()=>{        
        axios.get("http://localhost:8080/user/auth",{withCredentials:true})
        .then((res)=>{ 
            setLoggedUser(res.data);
            setLoggedIn(true);
        })
    },[]);
    
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