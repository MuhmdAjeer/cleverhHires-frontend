import React from 'react'
import {TextField}  from '@mui/material'

function Input({label,name,formik,error}) {

  return (

      <TextField error={error} value={formik.values.name} name={name} onChange={formik.handleChange} onBlur={formik.handleBlur} sx={{mb:'15px'}} required  fullWidth variant='filled' size='small' label={label} ></TextField>

  )
}

export default Input