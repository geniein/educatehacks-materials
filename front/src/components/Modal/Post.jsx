import { Box, Button, Divider, FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField, Typography } from '@mui/material';
import React, { useContext, useEffect, useRef, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import config from '../../utils/config';
import axios from 'axios';
import { Context } from '../../utils/contextProvider';

const Post = () => {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [text, setText] = useState('');
    const [type, setType] = useState('NOTICE');

    //useContext
    const { inBoxListRender, setInBoxListRender } = useContext(Context);  

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
    const formats = [
        'font',
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image',
        'align', 'color', 'background',        
      ]
    const onClickSubmit = (e) =>{       
        e.preventDefault();        
        const server = config.server+'/inbox/post'
        const data = {
            title,
            content: content,
            text,
            type
        }

        axios.post(server,data,{withCredentials: true})
        .then((res)=>{
            if(res.data) setInBoxListRender(!inBoxListRender);
        })  
    }

  return (
    <>              
        <Box sx={{ my: 1.5, px: 2.5 }}>
            <Typography variant="h4" noWrap>
              <TextField fullWidth name="title" label="title" onChange={(e)=>setTitle(e.target.value)}/>
            </Typography>             
        </Box>
        <Box sx={{ my: 1.5, px: 2.5 }}>
            {/* <FormControl>
                <InputLabel id="type">Type</InputLabel>
                <Select
                labelId="type"
                id="type"
                value={type}
                label="type"
                onChange={(e)=>setType(e.target.value)}          
                >
                    <MenuItem value={"NOTICE"}>NOTICE</MenuItem>
                    <MenuItem value={"MESSAGE"}>MESSAGE</MenuItem>          
                </Select>
            </FormControl>  */}
            <FormControl>
            <FormLabel id="type">Type</FormLabel>
            <RadioGroup
                row
                aria-labelledby="type"
                defaultValue="NOTICE"
                name="type"
                onChange={(e)=>setType(e.target.value)}
            >
                <FormControlLabel value="NOTICE" control={<Radio />} label="NOICE" />
                <FormControlLabel value="MESSAGE" control={<Radio />} label="MESSAGE" />    
            </RadioGroup>
            </FormControl>
        </Box>
        <Divider/>
        <Box sx={{ my: 4, px: 4, display: 'flex', justifyContent: 'center'}}>            
            <ReactQuill
            modules={modules}
            formats={formats}
            style={{width:"100%", height:'60%'}}
            value={content}            
            onChange={(content, delta, source, editor) =>{
                setText(editor.getText())
                setContent(editor.getHTML())
            }}
            />                  
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button variant="contained" onClick={onClickSubmit}>
                Submit
            </Button>        
        </Box>
    </>
  );
};

export default Post