import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Login from '../Pages/Login'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        {/* <Route path='/how-it-works' element={<Product/>}/> */}
        {/* <Route path='/use-cases' element={<Resources/>}/> */}
        {/* <Route path='/pricing' element={<Pricing/>}/> */}
        {/* <Route path='/support' element={<Company/>}/> */}
        <Route path='/login' element={<Login/>}/>
        {/* <Route path='/signup' element={<SignUp/>}/> */}
    </Routes>
  )
}

export default AllRoutes