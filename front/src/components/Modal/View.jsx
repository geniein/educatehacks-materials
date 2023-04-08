import { Box, Divider, Typography } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';

const View = () => {

  return (
    <>              
        <Box sx={{ my: 1.5, px: 2.5 }}>
        <Typography variant="h4" noWrap>
        title
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
        tag
        </Typography>
        <Typography variant="subtile2" sx={{ color: 'text.secondary' }} noWrap>
        date
        </Typography>
        </Box>
        <Divider/>
        <Box sx={{ my: 4, px: 4 }}>
        <Typography variant='container'>

        </Typography>
        </Box>
        <Divider sx={{ borderStyle: 'dashed' }} />      
    </>
  );
};

export default View