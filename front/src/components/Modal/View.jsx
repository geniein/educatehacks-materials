import { Box, Divider, Typography } from '@mui/material';
import axios from 'axios';
import React, { useContext, useEffect, useRef, useState } from 'react';
import config from '../../utils/config';
import { Context } from '../../utils/contextProvider';
import { Box, Button, Divider, TextField, Typography } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';

const View = ({viewId}) => {
    const [viewValue, setViewValue] = useState({});
    //useContext
    const { inBoxListRender, setInBoxListRender } = useContext(Context);  

    useEffect(()=>{        
        const server = config.server+`/inbox/`
        axios.get(server+`${viewId}`)
        .then((res)=>{            
            if(res.data){
                setViewValue(res.data);
                //update state
                if(res.data.type=="MESSAGE"){
                    axios.post(server+`state/${viewId}`,{state:"CHECKED"},{withCredentials:true})
                    .then((res)=>{
                    console.log(res);
                    if(res.data) setInBoxListRender(!inBoxListRender);
                })                
                }                
            }
        })

    },[]);
  return (
    <>              
        <Box sx={{ my: 1.5, px: 2.5 }}>
        <Typography variant="h4" noWrap>
        {viewValue?.title}
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
        <Typography variant="subtile2" sx={{ color: 'text.secondary' }} noWrap>
        {viewValue?.createdAt}
        </Typography>
        </Box>
        <Divider/>
        <Box sx={{ my: 4, px: 4 }}>
        <Typography variant='container'>
            <div dangerouslySetInnerHTML ={{__html: viewValue.content}}>

            </div>
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

// dangerouslySetInnerHTML

export default View