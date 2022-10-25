import React from 'react'
import { Grid, Button } from '@mui/material'

import './signin.css'
import Input from '../Input/Input'

function SignIn() {
    return (
        <Grid container xs='12' justifyContent={'center'} md='12'>
            <div style={{ marginTop: '25px' }} className='signup-container' >
                <Grid xs='12' md='12' justifyContent={'center'} item >
                    <h1>Sign In</h1>

                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error mollitia iure, odit a sit ab.</p>
                    <Input label='Email or Phone' />
                    <Input label='Password' />

                    <p style={{ color: '#2274A5' }}>Forgot Password?</p>

                    <Button variant='contained' sx={{ borderRadius: '20px', width: '100%', height: '50px', mb: '15px', boxShadow: 0 }} >Sign In</Button>
                    <Button variant='contained' sx={{ borderRadius: '20px', width: '100%', height: '50px', boxShadow: 0, backgroundColor: 'black' }} >Sign In with Google</Button>

                    {/* <TextField sx={{mb:'15px'}} fullWidth  variant='filled' size='small' label='name'></TextField> */}

                    <p style={{ textAlign: 'center' }}>New to cleverhires? Sign up now!</p>
                </Grid>
            </div>
        </Grid>
    )
}

export default SignIn