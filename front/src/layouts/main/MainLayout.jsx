import { styled } from '@mui/material';
import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Nav from '../../components/Nav';
import axios from 'axios';
import { Context } from '../../utils/contextProvider';
import Modal from '../../components/Modal/index';

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

    const { setLoggedUser, setLoggedIn, showModal, setShowModal, modalFlag, setModalFlag } = useContext(Context);  
    
    useEffect(()=>{        
        axios.get("http://localhost:8080/user/auth",{withCredentials:true})
        .then((res)=>{ 
            setLoggedUser(res.data);
            setLoggedIn(true);
        })
    },[]);

    // useEffect(()=>{
    //     console.log(loggedIn)
    //     if(!loggedIn){
    //         navigate("/404");
    //     }
    // },[loggedIn])
    
    return(        
        <Layout>
            <Header onOpenNav={() => setOpen(true)} />
            <Nav openNav={open} onCloseNav={() => setOpen(false)} />            
            <Modal openModal={showModal} onCloseModal={setShowModal} modalFlag={modalFlag} setModalFlag={setModalFlag}/>
            <Main>
                <Outlet/>
            </Main>
        </Layout>
    )
}

export default MainLayout