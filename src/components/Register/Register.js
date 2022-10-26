import React from 'react'
import { Grid, Button } from '@mui/material'

import './Register.css'
import Input from '../Input/Input'
import Container from '../Container/Container'

function SignIn() {
    return (
        <Container>
            <h1>Join us</h1>

            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error mollitia iure, odit a sit ab.</p>
            <Input label='Email or Phone' />
            <Input label='Password' />
            <Input label='First Name' />
            <Input label='last Name' />

            <p>By clicking Agree & Join, you agree to the CleverHire User Agreement, Privacy Policy, and Cookie Policy.</p>

            <Button variant='contained' sx={{ borderRadius: '20px', width: '100%', height: '50px', boxShadow: 0 }} >Agree & Join</Button>

            {/* <TextField sx={{mb:'15px'}} fullWidth  variant='filled' size='small' label='name'></TextField> */}
            <p style={{ textAlign: 'center' }}>Already joined? Sign in !</p>

        </Container>

    )
}

export default SignIn