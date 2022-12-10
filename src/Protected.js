import React, { useEffect, useState } from 'react'
import { Navigate, useLocation } from 'react-router-dom'

const Protected = ({children}) => {

    const location = useLocation()
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))
  
  
    useEffect(() => {
      const token = user?.token;
      setUser(JSON.parse(localStorage.getItem('user')))
    }, [location])

    if(!user){
        return <Navigate to={'/signin'} />
    }
  return children
}

export default Protected