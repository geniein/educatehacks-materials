import { Helmet } from 'react-helmet-async';
import { styled } from '@mui/material/styles';
import { Link, Container, Typography, Divider, Stack, Button } from '@mui/material';
import useResponsive from '../../hooks/useResponsive';
import GoogleIcon from '@mui/icons-material/Google';
import LoginForm  from './LoginForm';
import React from 'react';

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

// ----------------------------------------------------------------------

const Login = () =>{
  const mdUp = useResponsive('up', 'md');

  return (
    <>
      <Helmet>
        <title> Login </title>
      </Helmet>

      <StyledRoot>        
        <Container maxWidth="sm">
          <StyledContent>
            <Typography variant="h4" gutterBottom>
              Sign in
            </Typography>

            <Typography variant="body2" sx={{ mb: 5 }}>
              Don’t have an account? {''}
              <Link variant="subtitle2">Get started</Link>
            </Typography>

            <Stack direction="row" spacing={2}>
              <Button size="large" color="inherit" variant="outlined">
                <GoogleIcon color="#DF3E30" width={22} height={22} />
              </Button>

              <Button size="large" color="inherit" variant="outlined">
              </Button>

              <Button size="large" color="inherit" variant="outlined">
              </Button>
            </Stack>

            <Divider sx={{ my: 3 }}>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                OR
              </Typography>
            </Divider>

            <LoginForm />
            {/* <SignupForm /> */}
          </StyledContent>
        </Container>
      </StyledRoot>
    </>
  );
}

export default Login 