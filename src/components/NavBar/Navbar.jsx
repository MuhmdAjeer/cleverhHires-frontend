// import React, { useState } from 'react'
// import { AppBar, Toolbar, Tabs, Tab } from '@mui/material'
// import { Home, Work } from '@mui/icons-material'
// import { useNavigate } from 'react-router-dom';

// import GroupsIcon from '@mui/icons-material/Groups';
// import NotificationsIcon from '@mui/icons-material/Notifications';
// import Logo from '../logo/Logo'
// import Jobs from '../../Pages/user/jobs/Jobs';


// const Navbar = () => {

//   const [value, setValue] = useState(0)
//   const navigate = useNavigate()

//   return (
//     <React.Fragment>
//       <AppBar sx={{ backgroundColor: 'white' , marginBottom : "15px" ,zIndex:999 }} position="sticky" elevation={0} >
//         <Toolbar>
//           <Logo />

//         {/* <TextField size='small' sx={{marginLeft:"auto",backgroundColor:"#d9e9f1",borderRadius:"10px"}}  label='search' type='search' /> */}
//           <Tabs  sx={{ marginLeft: "auto" }} indicatorColor="primary" onChange={(e, value) => setValue(value)} value={value} textColor='primary' >
        
//             <Tab onClick={()=>navigate('/')} icon={<Home />} label="home" />
//             <Tab onClick={()=>navigate('/connections')} icon={<Work />} label="network" />
//             <Tab onClick={()=>navigate('/jobs')} icon={<GroupsIcon fontSize='small' />} label="jobs" />
//             {/* <Tab icon={<NotificationsIcon fontSize='small' />} label="notifications" /> */}

//           </Tabs>
//         </Toolbar>

//       </AppBar>
//     </React.Fragment>
//   )
// }

// export default Navbar

import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import Logo from '../logo/Logo';
import { Home, People, Work } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import * as API from '../../api/index'

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: 'primary',
  '&:hover': {
    backgroundColor: 'primary',
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function Navbar() {
  const [hirer,setHirer] = React.useState(false)
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const navigate = useNavigate()
  
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const { user } = JSON.parse(localStorage.getItem('user'))

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleLogout = () =>{
    localStorage.clear('user')
    navigate('/signin')
  }

  const viewProfile = ()=>{
    const {user} = JSON.parse(localStorage.getItem('user'))
    navigate(`/profile/${user.username}`)
  }

  useEffect(() => {
    API.getProfile(user?.username).then(({ data }) => {
      if (data.hirer) setHirer(true)
      else setHirer(false)
    })
  }, [])

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={viewProfile}>Profile</MenuItem>
      <MenuItem onClick={handleLogout}>Logout</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <Link to='/chats' >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge  color="error">
            <Work />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      </Link>

      <Link to='/jobs' >
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
          >
          <Badge  color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Jobs</p>
      </MenuItem>
          </Link>
      <Link to={`/profile/${user.username}`} >
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
          >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
          </Link>

          <Link to={'/'} >
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
          >
          <Home />
        </IconButton>
        <p>Home</p>
      </MenuItem>
          </Link>

          <Link to={'/connections'} >
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
          >
          <People />
        </IconButton>
        <p>Connections</p>
      </MenuItem>
          </Link>

          {hirer ? 
          <>
                      <Link to={'/post-job'} >
                      <MenuItem onClick={handleProfileMenuOpen}>
                        <IconButton
                          size="large"
                          aria-label="account of current user"
                          aria-controls="primary-search-account-menu"
                          aria-haspopup="true"
                          color="inherit"
                          >
                          {/* <Home /> */}
                        </IconButton>
                        <p>Post Job</p>
                      </MenuItem>
                          </Link>

                          <Link to={'/posted-jobs'} >
                      <MenuItem onClick={handleProfileMenuOpen}>
                        <IconButton
                          size="large"
                          aria-label="account of current user"
                          aria-controls="primary-search-account-menu"
                          aria-haspopup="true"
                          color="inherit"
                          >
                          {/* <Home /> */}
                        </IconButton>
                        <p>Posted Jobs</p>
                      </MenuItem>
                          </Link>
                          
                            </>

                          :

                          <Link to={'/become-hirer'} >
                          <MenuItem onClick={handleProfileMenuOpen}>
                            <IconButton
                              size="large"
                              aria-label="account of current user"
                              aria-controls="primary-search-account-menu"
                              aria-haspopup="true"
                              color="inherit"
                              >
                              {/* <Home /> */}
                            </IconButton>
                            <p>Become Hirer</p>
                          </MenuItem>
                              </Link>

        }
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: 'white' , marginBottom : "15px" ,zIndex:999 }} elevation={0}  >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="primary"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Logo/>
          {/* <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            MUI
          </Typography> */}
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" aria-label="show 4 new mails" color="primary">
              <Badge badgeContent={0} color="error">
                <Link  to='/' >
                <Home/>
                </Link>
              </Badge>
            </IconButton>
            <IconButton size="large" aria-label="show 4 new mails" color="primary">
              <Badge badgeContent={0} color="error">
                <Link to='/connections' >
                <People/>
                </Link>
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={0} color="error">
                <Link to='/jobs' >
                <Work  color='primary' />
                </Link>
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="primary"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="primary"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}

