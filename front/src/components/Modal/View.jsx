import { Box, Divider, Typography } from '@mui/material';
import axios from 'axios';
import React, { useContext, useEffect, useRef, useState } from 'react';
import config from '../../utils/config';
import { Context } from '../../utils/contextProvider';

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
        {/* <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
        tag
        </Typography> */}
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
        <Divider sx={{ borderStyle: 'dashed' }} />      
    </>
  );
};

// dangerouslySetInnerHTML

export default View