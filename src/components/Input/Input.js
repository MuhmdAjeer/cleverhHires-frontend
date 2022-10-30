import React from 'react'
import {TextField}  from '@mui/material'

function Input({label,name,formik,error,password}) {

  return (
      password ? 
      <TextField type='password' error={error} value={formik.values.name} name={name} onChange={formik.handleChange} onBlur={formik.handleBlur} sx={{mb:'5px'}} required  fullWidth variant='filled' size='small' label={label} ></TextField>
    :
    <TextField  error={error} value={formik.values.name} name={name} onChange={formik.handleChange} onBlur={formik.handleBlur} sx={{mb:'10px'}} required  fullWidth variant='filled' size='small' label={label} ></TextField>

  )
}

export default Input