import React from 'react'
import { Grid } from '@mui/material'
import './Container.css'


function Container({children}) {
  return (
            <Grid container xs='12' justifyContent={'center'} md='12'>
                <div style={{ marginTop: '25px' }} className='signup-container' >
                    <Grid xs='12' md='12' justifyContent={'center'} item >
                        {children}
                    </Grid>
                </div>
            </Grid>
        )
    }
    
export default Container