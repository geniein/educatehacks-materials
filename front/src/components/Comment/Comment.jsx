import { Avatar, Box, Button, Container, Divider, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import config from "../../utils/config";


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
            <StyledComment>                
                <Avatar/>
                <Typography sx={{ ml: 2 }}>
                    {val.comment}
                </Typography>
            </StyledComment>            
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
            sx={{ mt:1.5, bgcolor: 'grey', marginRight:'auto'}}
            onClick={onClickConfirm}
            >
                confirm
            </Button>
        </Box>
    )
}

export default Comment;