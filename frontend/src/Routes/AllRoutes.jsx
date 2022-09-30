import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Sidebar from '../Pages/Application/Sidebar/Sidebar'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import SignUp from '../Pages/SignUp'
import Pricing from '../Pages/Pricepage/Pricing'
import Resources from '../Pages/Resources/Resources'
import Support from '../Pages/Support/Support'
import Work from '../Pages/Work'


const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/use-cases' element={<Resources/>}/>
        <Route path='/pricing' element={<Pricing/>}/>
        <Route path='/how-it-works' element={<Work/>}/>
        <Route path='/support' element={<Support/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/sidebar' element={<Sidebar/>}/>
    </Routes>
  )
}

export default AllRoutes