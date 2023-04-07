import { Helmet } from 'react-helmet-async';
import { styled } from '@mui/material/styles';
import { Link, Container, Typography, Divider, Stack, Button } from '@mui/material';
import useResponsive from '../../hooks/useResponsive';
import LoginForm  from './LoginForm';
import React, { useState } from 'react';
import SignupForm from './SignupForm';

const StyledRoot = styled('div')(({ theme }) => ({
    display: 'flex'
//   [theme.breakpoints.up('md')]: {
//     display: 'flex',
//   },
}));

const StyledSection = styled('div')(({ theme }) => ({
  width: '100%',
  maxWidth: 480,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
//   boxShadow: theme.customShadows.card,
//   backgroundColor: theme.palette.background.default,
}));

const StyledContent = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
//   padding: theme.spacing(12, 0),
}));

const Login = () =>{
  const mdUp = useResponsive('up', 'md');
  const [form, setForm] = useState("login");

  return (
    <>
      <Helmet>
        <title> Login </title>
      </Helmet>

      <StyledRoot>        
        <Container maxWidth="sm">
          <StyledContent>                        
            {form === "login" ? <LoginForm setForm={setForm}/>: <SignupForm setForm={setForm}/>}                  
          </StyledContent>
        </Container>
      </StyledRoot>
    </>
  );
}

export default Login