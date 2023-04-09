import React, { useContext, useEffect, useState } from 'react';
import { alpha } from '@mui/material/styles';
import { Box, Divider, Typography, Stack, MenuItem, Avatar, IconButton, Popover, Button } from '@mui/material'; 
import axios from 'axios';
import config from '../../utils/config';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../utils/contextProvider';
import Gravatar from 'react-gravatar'

const MENU_OPTIONS = [
  {
    label: 'Home',
    icon: 'eva:home-fill',
  },
  {
    label: 'Profile',
    icon: 'eva:person-fill',
  },
  {
    label: 'Settings',
    icon: 'eva:settings-2-fill',
  },
];

const Profile = () => {
  //hooks
  const [user, setUser] = useState("");
  const navigate = useNavigate();
  const { loggedUser, loggedIn, setLoggedUser, setLoggedIn, inBoxListRender, setInBoxListRender } = useContext(Context);  
  useEffect(()=>{
  },[loggedUser, loggedIn])

  //session
  const [open, setOpen] = useState(null);

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };
  const onClickLogout = (e) =>{
    e.preventDefault();
    const server = config.server+'/user/logout'
    axios.post(server,{},{ withCredentials : true })
    .then((res)=>{
      setLoggedUser({});
      setLoggedIn(false);
      setInBoxListRender(!inBoxListRender);
      navigate("/inbox")
    })
  }

  return (
    <>
      <IconButton
        onClick={handleOpen}
        sx={{
          p: 0,
          ...(open && {
            '&:before': {
              zIndex: 1,
              content: "''",
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              position: 'absolute',
              bgcolor: (theme) => alpha(theme.palette.grey[900], 0.8),
            },
          }),
        }}
      >
        {/* <Avatar src={user.photoURL} alt="photoURL" /> */}
        {!loggedUser.name && <Avatar src={user.photoURL} alt="photoURL" />}
        {loggedUser.name &&<Gravatar email={loggedUser.name} size={32}/> }
      </IconButton>

      <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            p: 0,
            mt: 1.5,
            ml: 0.75,
            width: 180,
            '& .MuiMenuItem-root': {
              typography: 'body2',
              borderRadius: 0.75,
            },
          },
        }}
      >
        {loggedIn && <>
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant="subtitle2" noWrap>
            {loggedUser.name}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
            {loggedUser.email}
          </Typography>
        </Box>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <Stack sx={{ p: 1 }}>
          {MENU_OPTIONS.map((option) => (
            <MenuItem key={option.label} onClick={handleClose}>
              {option.label}
            </MenuItem>
          ))}
        </Stack>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <MenuItem onClick={onClickLogout} sx={{ m: 1 }}>
          Logout
        </MenuItem>
        </>
      }
      {!loggedIn && <Button sx={{ my: 1.5, px: 2.5 }}
      onClick={()=>navigate('/login')}>
          <Typography variant="subtitle2" noWrap>
            Need a login
          </Typography>         
        </Button>
        }
      </Popover>
    </>
  );
}
export default Profile 