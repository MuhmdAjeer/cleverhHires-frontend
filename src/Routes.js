import React, { useState } from 'react'
import {Routes as Switch,Route,Navigate} from 'react-router-dom'

import SignIn from "./Pages/SignIn";
import Register from "./Pages/Register";
function Routes() {
    const [user,setUser] = useState(localStorage.getItem('user'))

  return (
    <Switch>
        <Route path='/' element={user ? <Navigate to='/'/> : <SignIn/>} />
        <Route path='/signup' element={user ? <Navigate to='/'/> : <Register/>} />
    </Switch>
  )
}

export default Routes