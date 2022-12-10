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
import { Chat } from './Pages/chat/Chat';




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

      <Route path='/' element={<Protected children={<Home/>} />} />
      <Route path='/become-hirer' element={<Protected children={<BecomeHirer/>} />} />
      <Route  path='/post-job' element={<Protected children={<PostJob/>} />} /> 
      <Route  path='/jobs' element={<Protected children={<Jobs/>}/>} /> 
      <Route  path='/connections' element={ <Protected children={<Connections/>} />} /> 
      <Route  path='/profile/:username' element={ <Protected children={<Profile/>} />} /> 
      <Route  path='/posted-jobs' element={<Protected children={<PostedJobs/> } />} /> 
      <Route  path='/posted-jobs/:id' element={<Protected children={<UserJobApplication/>} />} /> 
      <Route  path='/chats' element={ <Protected children={<Chat/>} />} /> 
      <Route path='/admin/login' element={ user ? <Navigate to='/'/> : <AdminLogin/>} />

      <Route path='*' element={<h1>not found</h1>} />
    </Switch>
  )
}

export default Routes