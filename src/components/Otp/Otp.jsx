import React, { useState } from 'react'
import Container from '../Container/Container'
import { Button, TextField } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { verifyOtp } from '../../redux/actions/auth'


function Otp() {
    const [otp, setOtp] = useState('')
    const [disabled, setDisabled] = useState(true)

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { signupData } = useSelector((state) => state.user)

    const handleChange = (event) => {
        setOtp(event.target.value)
        if (otp.length === 3 && !isNaN(otp)) setDisabled(false)
        else setDisabled(true)
    }

    const handleSubmit = () => {
        let requestBody = {
            user: signupData,
            otp: otp
        }
        dispatch(verifyOtp(requestBody, navigate))
    }
    return (
        <div className='signin_page' >

        <Container>
            <h3 style={{ margin: '0', textAlign: 'center' }} >Enter the code that was sent to your mobile phone</h3>
            <p style={{ textAlign: 'center', fontSize: '14px', color: 'grey' }}>To finish registering, please enter the verification code we gave you.
                It might take a few minutes to receive your code.</p>

            <TextField onChange={handleChange} sx={{ mb: '15px' }} required fullWidth variant='filled' size='small' label={'code'} ></TextField>

            <Button onClick={handleSubmit} disabled={disabled} variant='contained' sx={{ borderRadius: '20px', width: '100%', height: '50px', boxShadow: 0 }} >Verify</Button>
            <p style={{ textAlign: 'center' }}>Did'nt Receive Code?</p>
            <h6 style={{ color: '#2274A5', textAlign: 'center', margin: '0' }}>Resend Code</h6>
        </Container>
        </div>
    )
}

export default Otp
