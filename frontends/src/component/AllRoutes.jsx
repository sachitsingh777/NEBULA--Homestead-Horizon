import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Properties from '../Pages/Properties'
import AllProperties from '../Pages/Allproperties'
import Signup from '../Pages/Signup'
import Login from '../Pages/Login'
import BookingDetails from '../Pages/BookingDetail'
import PrivateRoute from './PrivateRoute'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<AllProperties/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/properties" element={
          <PrivateRoute>
<Properties/></PrivateRoute>}/>
        <Route path="/booking" element={<BookingDetails/>}/>
        
    </Routes>
  )
}

export default AllRoutes