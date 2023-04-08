import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link, Stack, IconButton, InputAdornment, TextField, Checkbox, Box, Button, Typography, InputLabel, Select, MenuItem, FormControl } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import axios from 'axios';
import config from '../../utils/config';

const SignupForm = ({setForm}) => {
  const navigate = useNavigate();

  const passwordRef = useRef()
  //form
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [occupation, setOccupation] = useState("PARENT");

  const [showMessage, setShowMessage] = useState("");
  
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
  
  const handleClick = () => {
    navigate('/login', { replace: true });
  };

  
  const onClickSignup = (e) =>{
    e.preventDefault();
    if(password !== passwordConfirm){
      console.log('passwordRef.current.focus(); ')
      passwordRef.current.focus(); 
      setShowMessage("It's different between password and password confirm")
      return;
    }
    
    const server = config.server+"/user/signup";    
    const data = {
      email,
      name,
      password,
      occupation
    }
    axios
    .post(server,data)
    .then((result)=>{
      console.log(result);
      if(result){
        setShowMessage(`New account '${email}' is created`)
      }else{
        setShowMessage(`Fail to create '${email}'`)
      }
      
    })
  };

  const onClickMain = (e) =>{
    e.preventDefault();
    setEmail("");
    setName("");
    setPassword("");
    setPasswordConfirm("");
    setShowMessage("");
    setForm("login");
  }

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Sign up
      </Typography>
      <Stack spacing={3}>
        <TextField name="email" label="Email address" onChange={(e)=>setEmail(e.target.value)}/>

        <TextField name="name" label="Name" onChange={(e)=>setName(e.target.value)}/>

        <TextField
          name="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <VisibilityIcon/>
                </IconButton>
              </InputAdornment>
            ),
          }}
          onChange={(e)=>setPassword(e.target.value)}
        />
        <TextField
          name="passwordConfirm"
          label="Password confirm"
          type={showPasswordConfirm ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPasswordConfirm(!showPasswordConfirm)} edge="end">
                    <VisibilityIcon/>
                </IconButton>
              </InputAdornment>
            ),
          }}
          onChange={(e)=>setPasswordConfirm(e.target.value)}
          ref={passwordRef}
        />
        <FormControl fullWidth>
        <InputLabel id="occupation">Occupation</InputLabel>
        <Select
          labelId="occupation"
          id="occupation"
          value={occupation}
          label="occupation"
          onChange={(e)=>setOccupation(e.target.value)}          
        >
          <MenuItem value={"TEACHER"}>Teacher</MenuItem>
          <MenuItem value={"PARENT"}>Parent</MenuItem>          
        </Select>
      </FormControl>
      </Stack>      

      <Button size="large" type="submit" variant="contained" onClick={onClickSignup} sx={{mt:3}}>
        Sign Up
      </Button>
      <Button size="large" type="submit" variant="contained" onClick={onClickMain} sx={{mt:3}} color='secondary'>
        Move to Main
      </Button>
      { showMessage &&  <Button size="large" variant="contained"
          sx={{       
            backgroundColor: 'primary.dark',
            '&:hover': {
              backgroundColor: 'primary.main',
              opacity: [0.9, 0.8, 0.7],
            },
            mt: 3
          }}
          >
            <Typography>{showMessage}</Typography>
      </Button>
    }
    </>
  );
}

export default SignupForm 