import React from 'react'
import { Button, FormControl } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'

// import * as yup from 'yup'

import './Register.css'
import Input from '../Input/Input'
import Container from '../Container/Container'


const initialValues = {
    email: '',
    firstName: '',
    lastName: '',
    phone: '',
    password: ''
}



// const handleSubmit = (values)=>{
//     console.log(values);
// }
const validate = (values) => {
    const errors = {};
    if (!values.email) errors.email = "Required";
    if (!values.password) errors.password = "Required";
    if(values.phone.length !== 10 || isNaN(values.phone)) errors.phone = "Invalid number"
    if (!values.email
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
        errors.email = 'Invalid email'
    }
    if (!values.firstName) errors.name = 'Required'
    if (!values.LastName) errors.name = 'Required'
    if (values.password.length < 8) errors.password = 'Minimum of 8 characters required'
    return errors;
}

function SignIn() {
    const formik = useFormik({
        initialValues,
        validate,
       onSubmit : ()=>{
        console.log('fasd');
       }

    })
    const navigate = useNavigate()

    return (
        <Container>
            <h1>Join us</h1>

            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error mollitia iure, odit a sit ab.</p>
            <form onSubmit={formik.handleSubmit} >

            
                <Input error={formik.errors.email && formik.touched.email} formik={formik} label='Email' name='email' autoFocus />              
                <Input error={formik.errors.firstName && formik.touched.firstName} formik={formik} label='First Name' name='firstName' />
                <Input error={formik.errors.lastName && formik.touched.lastName} formik={formik} label='last Name' name='lastName' />
                <Input error={formik.errors.phone && formik.touched.phone} formik={formik} label='Phone' name='phone' />
                <Input error={formik.errors.password && formik.touched.password} formik={formik} label='Password' name='password' />

                <p>By clicking Agree & Join, you agree to the CleverHire User Agreement, Privacy Policy, and Cookie Policy.</p>
                <button type='submit' onClick={formik.handleSubmit} >Submit</button>
                {/* <Button type='submit' onClick={formik.handleSubmit}  variant='contained' sx={{ borderRadius: '20px', width: '100%', height: '50px', boxShadow: 0 }} >Agree & Join</Button> */}
            </form>
            {/* <TextField sx={{mb:'15px'}} fullWidth  variant='filled' size='small' label='name'></TextField> */}
            <p style={{ textAlign: 'center' }} onClick={() => navigate('/signin')} >Already joined? Sign in !</p>

        </Container>

    )
}

export default SignIn