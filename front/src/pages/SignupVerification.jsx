import { Helmet } from 'react-helmet-async';
import { Link as RouterLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Button, Typography, Container, Box } from '@mui/material';
import React from 'react';

const StyledContent = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '10vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}));

const SignupVerification = () =>{
  return (
    <>
      <Helmet>
        <title> Verification </title>
      </Helmet>

      <Container>
        <StyledContent sx={{ textAlign: 'center', alignItems: 'center' }}>
          <Box
            component="img"
            src="/assets/verify.png"
            sx={{ height: 400, mx: 'auto', my: { xs: 5, sm: 10 } }}
          />
          <Typography variant="h4" paragraph>
            Verification Requested to the teacher!
          </Typography>

          <Typography sx={{ color: 'text.secondary' }}>
            Teacher will review your verification request and activate your account
          </Typography>

          <Button to="/" sx={{marginTop:"20px"}}size="large" variant="contained" component={RouterLink}>
            Go to log in
          </Button>
        </StyledContent>
      </Container>
    </>
  );
}

export default SignupVerification