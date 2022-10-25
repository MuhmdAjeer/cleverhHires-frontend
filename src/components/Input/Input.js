import React from 'react'
import {TextField}  from '@mui/material'

function Input({label}) {
  return (
    <TextField sx={{mb:'15px'}} fullWidth variant='filled' size='small' label={label} ></TextField>
  )
}

export default Input