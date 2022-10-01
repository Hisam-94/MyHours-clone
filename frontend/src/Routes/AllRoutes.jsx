import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Sidebar from '../Pages/Application/Sidebar/Sidebar'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import SignUp from '../Pages/SignUp'
import Pricing from '../Pages/Pricepage/Pricing'
import { AddProject } from '../Pages/Projects/AddProject'
import Projects from '../Pages/Projects/Projects'
import Resources from '../Pages/Resources/Resources'
import Support from '../Pages/Support/Support'
import Work from '../Pages/Work'
import Editform from '../Pages/EditUser/Editform'
import Teamform from '../Pages/TeamFromValid/Teamform'
import Teamuser from '../Pages/TeamUser/Teamuser'
const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/use-cases' element={<Resources/>}/>
        <Route path='/pricing' element={<Pricing/>}/>
        <Route path='/how-it-works' element={<Work/>}/>
        <Route path='/support' element={<Support/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/addprojects' element={<AddProject/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/sidebar' element={<Sidebar/>}/>
        <Route path='/teamform' element={<Teamform/>}/>
        <Route path='/edit/:id' element={<Editform />}/>
        <Route path='/teamuser' element={<Teamuser/>}/>
    </Routes>
  )
}

export default AllRoutes