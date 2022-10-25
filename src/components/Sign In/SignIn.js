import React from 'react'
import {Grid,TextField ,Typography}  from '@mui/material'

import './signin.css'
import Input from '../Input/Input'

function SignIn() {
  return (
      <Grid container xs='12' justifyContent={'center'}  md='12'>
            <div style={{marginTop:'25px'}} className='signup-container' > 
            <Grid  xs='12' md='12' justifyContent={'center'} item >
            <h1>Sign In</h1>

            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error mollitia iure, odit a sit ab.</p>
            <Input label='Email or Phone'/>
            <Input label='Password'/>

            <p style={{color:'skyblue'}}>Forgot Password</p>
            
                {/* <TextField sx={{mb:'15px'}} fullWidth  variant='filled' size='small' label='name'></TextField> */}

            </Grid>
    </div>
        </Grid>
  )
}

export default SignIn