import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link, Stack, IconButton, InputAdornment, TextField, Checkbox, Box, Button, Typography, Divider } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import axios from 'axios';
import config from '../../utils/config';
import { Context } from '../../utils/contextProvider';

const LoginForm = ({setForm}) => {

  const navigate = useNavigate();
  const { loggedUser, loggedIn, setLoggedUser, setLoggedIn } = useContext(Context);
  //form
  const [email, setEmail] = useState("");  
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const onClickLogin = (e) =>{
    e.preventDefault();
    const server = config.server+"/user/login"
    const data = {
      email,
      password
    }
    //login session
    axios
    .post(server,data,{ withCredentials : true })
    .then((result)=>{      
      if(result.status == 401) return;
      if(result.status == 200) {
        if(result.data.isVerified){
          setLoggedUser(result.data);
          setLoggedIn(true);
          navigate('/inbox', { replace: true });
        }else {
          alert("Not verified");
        }        
      }
    })
  }

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Sign in
      </Typography>

      <Typography variant="body2" sx={{ mb: 5 }}>
        Don’t have an account? {''}
        <Link variant="subtitle2" onClick={()=>setForm("signup")}>Get started</Link>
      </Typography>

      <Stack direction="row" spacing={2}>
        <Button size="large" color="inherit" variant="outlined">
          <GoogleIcon color="#DF3E30" width={22} height={22} />
        </Button>

        <Button size="large" color="inherit" variant="outlined">
          <FacebookIcon color="#DF3E30" width={22} height={22} />
        </Button>

        <Button size="large" color="inherit" variant="outlined">
          <TwitterIcon color="#DF3E30" width={22} height={22} />
        </Button>
      </Stack>

      <Divider sx={{ my: 3 }}>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          OR
        </Typography>
      </Divider>
      <Stack spacing={3}>
        <TextField name="email" label="Email address" onChange={(e)=>setEmail(e.target.value)}/>

        <TextField
          name="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <VisibilityIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
          onChange={(e)=>setPassword(e.target.value)}
        />
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
        <Checkbox name="remember" label="Remember me" />
        <Link variant="subtitle2" underline="hover">
          Forgot password?
        </Link>
      </Stack>

      <Button size="large" type="submit" variant="contained" onClick={onClickLogin}>
        Login
      </Button>
    </>
  );
}

export default LoginForm