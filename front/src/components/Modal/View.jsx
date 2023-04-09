import axios from 'axios';
import React, { useContext, useEffect, useRef, useState } from 'react';
import config from '../../utils/config';
import { Context } from '../../utils/contextProvider';
import { Box, Button, Divider, TextField, Typography } from '@mui/material';
import Comment from '../Comment/Comment';
import { dateFormat } from '../../utils/format';

const View = ({viewId}) => {
    const [viewValue, setViewValue] = useState({});
    const [translateState, setTranslateState] = useState(false);
    const [translateText, setTranslateText] = useState("");
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

    const onClickTranslate = (e)=>{
        e.preventDefault();        
        const server = config.server+'/google/translate';
        const data = {
            text: viewValue.content,
            target: "ko"
        }
        axios.post(server,data,{withCredentials:true})
        .then((res)=>{            
            if(res.data) setTranslateText(res.data);
            setTranslateState(!translateState)
        })        
    };

    const tagsList = (values) =>{        
        if(values === "" || values === undefined) return [];
        const removeSpaces = values.replace(/\s/g,'');
        const list = removeSpaces.split('#');
        if(list[0]=="") list.splice(0,1);
        return list;
    }

  return (
    <div style={{ "maxHeight": "calc(100vh - 200px)", "overflowY": "auto"}}>              
        <Box sx={{ my: 1.5, px: 2.5 }}>
        <Typography variant="h4" noWrap>
        {viewValue?.title}
        </Typography>
        
        {tagsList(viewValue.tags).map((val,idx)=>{
            return(                
                <Typography key={idx} variant="subtile2" sx={{ 
                    color: 'text.secondary', 
                    backgroundColor: '#FCD12A',
                    borderRadius: 1,
                    alignItems: 'center',
                    paddingRight: '5px',
                    paddingLeft: '5px',
                    marginRight: '7px'
                     }} noWrap>
                    {val}
                </Typography>
            )
        })}      
       
        <Typography variant="subtile1" sx={{ color: 'text.secondary' }} noWrap>
        {dateFormat(viewValue?.createdAt)}
        </Typography>
        </Box>
        <Divider/>
        <Box sx={{ my: 4, px: 4 }}>
        <Typography variant='container'>
            <div dangerouslySetInnerHTML ={{__html: viewValue.content}}>

            </div>
        </Typography>        
        </Box>
        {/* <Divider sx={{paddingBottom: '16px'}}/> */}

        <Box sx={{ my: 4, px: 0 }}>
            <Typography variant='container'>
                
            </Typography>
        </Box>

        <Divider sx={{ borderStyle: 'solid' }} /> 
        {!translateState &&<Button variant='contained'
            color="primary"
            sx={{ mt:1.5, bgcolor: 'grey', marginRight:'auto' , marginBottom: '16px'}}
            onClick={onClickTranslate}
            >
                translate
            </Button>
        }
        {translateState &&<Box sx={{ my: 4, px: 0 }}>
            <Typography variant='container'>
                <div dangerouslySetInnerHTML ={{__html: translateText}}>

                </div>
            </Typography>
            <Divider sx={{ borderStyle: 'solid', marginBottom: '16px' }} /> 
        </Box>
        }
        <Comment inboxId={viewId}/>   
    </div>
  );
};

// dangerouslySetInnerHTML

export default View