import { Box, Button, Divider, TextField, Typography } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';

const View = () => {

  return (
    <>              
        <Box sx={{ position:"center"}}>
            <Typography variant="h4" noWrap>
                Title
            </Typography>

            <Typography variant="subtile2" sx={{ 
                color: 'text.secondary', 
                backgroundColor: '#FCD12A',
                borderRadius: 1,
                alignItems: 'center',
                paddingRight: '5px',
                paddingLeft: '5px',
                marginRight: '7px'
                 }} noWrap>
                tag
            </Typography>

            <Typography variant="subtile2" sx={{ 
                color: 'text.secondary', 
                backgroundColor: '#FCD12A',
                borderRadius: 1,
                alignItems: 'center',
                paddingRight: '5px',
                paddingLeft: '5px',
                marginRight: '7px',
                 }} noWrap>
                deadline
            </Typography>
            {"\n"}
            <Typography variant="subtile2" sx={{ color: 'text.secondary' }} noWrap>
                date
            </Typography>
        </Box>
        <Divider sx={{paddingBottom: '16px'}}/>

        <Box sx={{ my: 4, px: 0 }}>
            <Typography variant='container'>
                
            </Typography>
        </Box>

        <Divider sx={{ borderStyle: 'solid', marginBottom: '35px' }} /> 

        <Box>
            <Typography >
            Comments
            </Typography>
            <TextField label="Leave a comment" fullWidth
                        sx = {{ height: 'medium',
                                marginTop: '5px'}}
                         />
            <Button variant='contained' color="primary" sx={{ mt:1.5, bgcolor: 'grey', marginRight:'auto'}}>
                confirm
            </Button>
        </Box>   
    </>
  );
};

export default View