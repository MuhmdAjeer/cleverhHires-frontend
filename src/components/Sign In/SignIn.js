import React from 'react'

// import {useDispatch} from 'react-redux'
// import {signin} from '../../actions/auth'
import {  Button } from '@mui/material'
import { useNavigate , Link } from 'react-router-dom'

// import {useFormik} from 'formik'

import Container from '../Container/Container'
import './signin.css'
import Input from '../Input/Input'




function SignIn() {
//   dispatch(signin(data)) 
const navigate = useNavigate()
    return (
        <Container>
                    <h1>Sign In</h1>

                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error mollitia iure, odit a sit ab.</p>
                    <Input label='Email or Phone' />
                    <Input label='Password' />

                    <p style={{ color: '#2274A5' }}>Forgot Password?</p>

                    <Button  variant='contained' sx={{borderRadius: '20px', width: '100%', height: '50px', boxShadow: 0 }} >Sign In</Button>
                    <h6 style={{textAlign:'center',margin:'5px'}} >or</h6>
                    <Button variant='contained' sx={{ borderRadius: '20px', width: '100%', height: '50px', boxShadow: 0, backgroundColor: 'black' }} >Sign In with Google</Button>

                    {/* <TextField sx={{mb:'15px'}} fullWidth  variant='filled' size='small' label='name'></TextField> */}

                    <p style={{ textAlign: 'center' }} onClick={()=>navigate('/signup')}>New to cleverhires? Signup</p>
                </Container>

    )
}

export default SignIn