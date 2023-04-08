import { Box, Button, Divider, TextField, Typography } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Post = () => {


    const modules = {
        toolbar: {
            container: [
              [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
              [{ 'font': [] }],
              [{ 'align': [] }],
              ['bold', 'italic', 'underline', 'strike', 'blockquote'],
              [{ 'list': 'ordered' }, { 'list': 'bullet' }, 'link'],
              [{ 'color': ['#000000', '#e60000', '#ff9900', '#ffff00', '#008a00', '#0066cc', '#9933ff', '#ffffff', '#facccc', '#ffebcc', '#ffffcc', '#cce8cc', '#cce0f5', '#ebd6ff', '#bbbbbb', '#f06666', '#ffc266', '#ffff66', '#66b966', '#66a3e0', '#c285ff', '#888888', '#a10000', '#b26b00', '#b2b200', '#006100', '#0047b2', '#6b24b2', '#444444', '#5c0000', '#663d00', '#666600', '#003700', '#002966', '#3d1466', 'custom-color'] }, { 'background': [] }],
              ['image', 'video'],
              ['clean']  
            ],
        }
    }

  return (
    <>              
        <Box sx={{ my: 1.5, px: 2.5 }}>
        <Typography variant="h4" noWrap>
        <TextField name="title" label="title"/>
        </Typography>
        {/* <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
        tag
        </Typography>         */}
        </Box>
        <Divider/>
        <Box sx={{ my: 4, px: 4, display: 'flex', justifyContent: 'center'}}>            
            <ReactQuill
            modules={modules}
            style={{width:"100%", height:'60%'}}
            />                  
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button variant="contained">
                Submit
            </Button>        
        </Box>
    </>
  );
};

export default Post