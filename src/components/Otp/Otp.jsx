import React from 'react'
import Container from '../Container/Container'
import {Button} from '@mui/material'
import Input from '../Input/Input'

function Otp() {
    return (
        <Container>
            <h3 style={{ margin: '0', textAlign: 'center' }} >Enter the code that was sent to your mobile phone</h3>
            <p  style={{textAlign:'center',fontSize:'14px',color:'grey'}}>To finish registering, please enter the verification code we gave you.
                It might take a few minutes to receive your code.</p>

            <Input label='Code'/>
            <Button variant='contained' sx={{ borderRadius: '20px', width: '100%', height: '50px', boxShadow: 0 }} >Verify</Button>
            <p style={{textAlign:'center'}}>Did'nt Receive Code?</p>
            <h6 style={{color:'#2274A5',textAlign:'center',margin:'0'}}>Resend Code</h6>
        </Container>
    )
}

export default Otp