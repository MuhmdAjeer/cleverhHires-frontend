import React, { useState } from 'react'
import { AppBar, Toolbar, Tabs, Tab } from '@mui/material'
import { Home, Work } from '@mui/icons-material'

import GroupsIcon from '@mui/icons-material/Groups';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Logo from '../logo/Logo'


const Navbar = () => {

  const [value, setValue] = useState()
  return (
    <React.Fragment>
      <AppBar sx={{ backgroundColor: 'white' , marginBottom : "15px" ,zIndex:999 }} position="sticky" elevation={0} >
        <Toolbar>
          <Logo />

        {/* <TextField size='small' sx={{marginLeft:"auto",backgroundColor:"#d9e9f1",borderRadius:"10px"}}  label='search' type='search' /> */}
          <Tabs  sx={{ marginLeft: "auto" }} indicatorColor="primary" onChange={(e, value) => setValue(value)} value={value} textColor='primary' >

            <Tab icon={<Home />} label="home" />
            <Tab icon={<Work />} label="network" />
            <Tab icon={<GroupsIcon fontSize='small' />} label="jobs" />
            <Tab icon={<NotificationsIcon fontSize='small' />} label="notifications" />

          </Tabs>
        </Toolbar>

      </AppBar>
    </React.Fragment>
  )
}

export default Navbar