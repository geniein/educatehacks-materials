import { Avatar, Box, Button, Container, Divider, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import config from "../../utils/config";
import { dateFormat } from "../../utils/format";
import Gravatar from 'react-gravatar'


const mock =[{
    comment: "Science Project Due Next FridayScience Project Due Next FridayScience Project Due Next FridayScience Project Due Next Friday",
    author: "ingenie"
},{
    comment: "bbbbbb",
    author: "ingenie"
}]

const StyledComment = styled('div')(() => ({
    display: 'flex',
    alignItems: 'center',
    margin: '8px'    
  }));

const Comment = ({inboxId}) =>{

    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);

    const onClickConfirm = (e) =>{
        e.preventDefault();
        const server = config.server+'/comment/post';
        const data = {
            inboxId,
            comment,
            text: comment
        }
        axios.post(server,data,{withCredentials:true})
        .then((res)=>{
            if(res.data){
                setComment('');
                callCommentsList();
            }
        })
    }
    const callCommentsList = ()=>{
        if(inboxId){
            const server = config.server+`/comment/getlist/${inboxId}`;
            axios.get(server)
            .then((res)=>{
                if(res.data) setComments(res.data);
            })
        }
    }
    //hooks
    useEffect(()=>{        
        callCommentsList()        
    },[]);
    return(
        <Box>
            <Typography >
            Comments
            </Typography>
            <Container>
            {comments.map((val, idx)=>{                
            return (
            <div key={idx}>
            <Divider sx={{ borderStyle: 'solid', margin: '8px' }} /> 
            <Box sx={{display:'flex',justifyContent:'space-between', alignItems:'center'}}>
                <StyledComment>                
                    {!val.author && <Avatar/>}
                    {val.author && <Gravatar email={val.author} size={32}/>}
                    <Typography sx={{ ml: 2 }} noWrap>
                        {val.comment}
                    </Typography>
                </StyledComment>            
                <Typography sx={{ ml: 2 }}>
                    {dateFormat(val.createdAt)}
                </Typography>
            </Box>            
            </div>
            )})
            }
            </Container>
            <TextField label="Leave a comment" fullWidth
                        sx = {{ height: 'medium',
                                marginTop: '5px'}}
                        onChange={(e)=>setComment(e.target.value)}
                        />
            <Button 
            variant='contained' 
            color="primary" 
            sx={{ mt:1.5, marginRight:'auto'}}
            onClick={onClickConfirm}
            >
                confirm
            </Button>
        </Box>
    )
}

export default Comment;