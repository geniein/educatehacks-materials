import { Helmet } from 'react-helmet-async';
import { Grid, Button, Container, Stack, Typography } from '@mui/material';
import PlanCard from './PlanCard';
import POSTS from '../../mock/plan';
import React from 'react';

const Main = () => {
  return (
    <>
      <Helmet>
        <title> Plan List </title>
      </Helmet>

      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Plan
          </Typography>
          <Button variant="contained" startIcon={""}>
            New Post
          </Button>
        </Stack>

        <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between">          
        </Stack>

        <Grid container spacing={3}>
          {POSTS.map((post, index) => (
            <PlanCard key={post.id} post={post} index={index} />
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default Main 