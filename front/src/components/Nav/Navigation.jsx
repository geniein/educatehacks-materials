import React, { useContext, useEffect, useState } from 'react'
import navConfig from './navConfig';
import account from '../../mock/account'
import { useLocation, useNavigate } from 'react-router-dom';
import { Avatar, Box, Button, Drawer, Link, Stack, Typography, alpha, styled } from '@mui/material';
import NavSection from './NavSection';
import Scrollbar from './Scrollbar';
import useResponsive from '../../hooks/useResponsive';
import { Context } from '../../utils/contextProvider';
import Gravatar from 'react-gravatar';

const NAV_WIDTH = 280;

const StyledAccount = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2, 2.5),
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  backgroundColor: alpha(theme.palette.grey[500], 0.12),
}));

const Navigation = ({ openNav, onCloseNav }) => {
  //session  
    const [user, setUser] = useState("")
    const { loggedUser, loggedIn, setLoggedUser, setLoggedIn } = useContext(Context);  
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const isDesktop = useResponsive('up', 'lg');

    useEffect(() => {
        if (openNav) {
          onCloseNav();
        }             
      }, [pathname, loggedUser, loggedIn]);

  const render = (
    <>       
    <Box sx={{ px: 2.5, py: 3, display: 'inline-flex' }}>        
    </Box>
    <Box sx={{ mb: 5, mx: 2.5 }}>
        <Link underline="none">
          <StyledAccount>            
            {!loggedUser.name && <Avatar src={user.photoURL} alt="photoURL" />}
            {loggedUser.name &&<Gravatar email={loggedUser.name} size={32}/> }

            {loggedIn &&<Box sx={{ ml: 2 }}>
              <Typography variant="subtitle2" sx={{ color: 'text.primary' }}>
                {loggedUser.name}                
              </Typography>

              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {loggedUser.occupation}
              </Typography>
            </Box>
            }
            {!loggedIn && <Button sx={{ ml: 2 }}
                onClick={()=>navigate('/login')}>
              <Typography variant="subtitle2" noWrap>
                Need a login
              </Typography>    
            </Button>}
          </StyledAccount>
        </Link>
      </Box>
      {loggedIn&& <NavSection data={navConfig} /> }

      <Box sx={{ flexGrow: 1 }} />

      <Box sx={{ px: 2.5, pb: 3, mt: 10 }}>
        <Stack alignItems="center" spacing={3} sx={{ pt: 5, borderRadius: 2, position: 'relative' }}>          

          <Box sx={{ textAlign: 'center' }}>
            <Typography gutterBottom variant="h6">
              Hello
            </Typography>

            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Introduce
            </Typography>
          </Box>

          <Button target="_blank" variant="contained">
            World
          </Button>
        </Stack>
      </Box>   
    </>
  )

  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV_WIDTH },
      }}
    >
      {isDesktop ? (
        <Drawer
          open
          variant="permanent"
          PaperProps={{
            sx: {
              width: NAV_WIDTH,
              bgcolor: 'background.default',
              borderRightStyle: 'dashed',
            },
          }}
        >
          {render}
        </Drawer>
      ) : (
        <Drawer
          open={openNav}
          onClose={onCloseNav}
          ModalProps={{
            keepMounted: true,
          }}
          PaperProps={{
            sx: { width: NAV_WIDTH },
          }}
        >
          {render}
        </Drawer>
      )}
    </Box>
  );
}

export default Navigation