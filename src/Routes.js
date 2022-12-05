import React, { useEffect, useState } from 'react'
import { Routes as Switch, Route, Navigate, useLocation } from 'react-router-dom'

import SignIn from "./Pages/SignIn";
import Register from "./Pages/Register";
import Verifyotp from "./Pages/Verifyotp";
import Home from './Pages/Home/Home';
import BecomeHirer from './Pages/user/BecomeHirer';
import Protected from './Protected';
import PostJob from './Pages/user/jobs/PostJob';
import Jobs from './Pages/user/jobs/Jobs';
import Connections from './Pages/user/connections/Connections';
import Profile from './Pages/user/profile/Profile';
import PostedJobs from './Pages/user/jobs/posted-jobs/PostedJobs';
import UserJobApplication from './Pages/user/jobs/userapplications/UserJobApplication';
import AdminLogin from './Pages/admin/AdminLogin';




function Routes() {
  const location = useLocation()
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))


  useEffect(() => {
    const token = user?.token;
    setUser(JSON.parse(localStorage.getItem('user')))
  }, [location])

  return (
    <Switch>
      {/* //auth */}
      <Route path='/signin' element={user ? <Navigate to='/' /> : <SignIn />} />
      <Route path='/signup' element={user ? <Navigate to='/' /> : <Register />} />
      <Route path='/verify' element={user ? <Navigate to='/' /> : <Verifyotp />} />

      {/* <Route path='/become-hirer' element={<Protected Children={<BecomeHirer/>} />} /> */}
      <Route path='/' element={user ? <Home/> : <Navigate to='/signin' />} />
 
      <Route path='/become-hirer' element={user ? <BecomeHirer/> : <Navigate to='/signin' />} />
      <Route  path='/post-job' element={<PostJob/>} /> 
      <Route  path='/jobs' element={<Jobs/>} /> 
      <Route  path='/connections' element={<Connections/>} /> 
      <Route  path='/profile/:username' element={<Profile/>} /> 
      <Route  path='/posted-jobs' element={<PostedJobs/>} /> 
      <Route  path='posted-jobs/:id' element={<UserJobApplication/>} /> 

      <Route path='/admin/login' element={<AdminLogin/>} />



      
      <Route path='*' element={<h1>not found</h1>} />
    </Switch>
  )
}

export default Routes