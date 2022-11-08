import React, { useEffect, useState } from 'react'
import { Routes as Switch, Route, Navigate, useLocation } from 'react-router-dom'

import SignIn from "./Pages/SignIn";
import Register from "./Pages/Register";
import Verifyotp from "./Pages/Verifyotp";
import Home from './Pages/Home/Home';
import BecomeHirer from './Pages/user/BecomeHirer';



function Routes() {
  const location = useLocation()
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))


  useEffect(() => {
    const token = user?.token;
    setUser(JSON.parse(localStorage.getItem('user')))
  }, [location])

  return (
    <Switch>
      <Route path='/' element={user ? <Home/> : <Navigate to='/signin' />} />
      <Route path='/become-hirer' element={user ? <BecomeHirer/> : <Navigate to='/signin' />} />
      <Route path='/signin' element={user ? <Navigate to='/' /> : <SignIn />} />
      <Route path='/signup' element={user ? <Navigate to='/' /> : <Register />} />
      <Route path='/verify' element={user ? <Navigate to='/' /> : <Verifyotp />} />
    </Switch>
  )
}

export default Routes