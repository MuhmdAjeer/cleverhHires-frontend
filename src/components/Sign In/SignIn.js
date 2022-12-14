import React, { useState } from 'react'

import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { TextField } from '@mui/material'
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import { signin } from '../../redux/actions/auth'

import Container from '../Container/Container'
import './signin.css'
import Loader from '../Loader'
import { adminLogin } from '../../redux/actions/admin'


const initialValues = {
    email: '',
    password: ''
}

const validate = (values) => {
    const errors = {};
    if (!values.email) errors.email = "Required";
    if (!values.password) errors.password = "Required";
    return errors;
}

function SignIn({admin}) {
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues,
        validate,
        onSubmit: (values) => {
            setLoading(true)
            if(admin){
                dispatch(adminLogin(values,navigate,setLoading))
            }else{
                dispatch(signin(values, navigate, setLoading))
            }
        }

    })

    if (loading) {
        return <Loader />
    }

    return (
        <div className='signin_page' >

        <Container>
            <h1>Sign In</h1>
            {
                !admin && <p>Get signed into the world of job hirers and seekers!</p>
            }
            <TextField sx={{ mb: '15px' }} value={formik.values.email} onChange={formik.handleChange} name='email' onBlur={formik.handleBlur} error={formik.errors.email && formik.touched.email} required fullWidth variant='filled' size='small' label={'Email'} ></TextField>
            <TextField type='password' sx={{ mb: '15px' }} value={formik.values.password} onChange={formik.handleChange} name='password' onBlur={formik.handleBlur} error={formik.errors.password && formik.touched.password} required fullWidth variant='filled' size='small' label={'Password'} ></TextField>


            <p style={{ color: '#2274A5' }}>Forgot Password?</p>

            <Button onClick={formik.handleSubmit} variant='contained' sx={{ borderRadius: '20px', width: '100%', height: '50px', boxShadow: 0 }} >Sign In</Button>

            {
                !admin && 
                <p style={{ textAlign: 'center' }} onClick={() => navigate('/signup')}>New to cleverhires? Signup</p>
            }
        </Container>
            </div>

    )
}

export default SignIn