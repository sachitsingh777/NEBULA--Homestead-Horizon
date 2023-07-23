import React from 'react'
import { Navigate } from 'react-router-dom'
const hostData = JSON.parse(localStorage.getItem("host"))||""
const PrivateRoute = ({children}) => {
    console.log(hostData)
  return hostData==""?<Navigate to="/login" />:children
}

export default PrivateRoute