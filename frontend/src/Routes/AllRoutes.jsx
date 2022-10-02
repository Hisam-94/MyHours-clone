import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Sidebar from '../Pages/Application/Sidebar/Sidebar'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import SignUp from '../Pages/SignUp'
import Pricing from '../Pages/Pricepage/Pricing'
import Projects from '../Pages/Projects/Projects'
import Resources from '../Pages/Resources/Resources'
import Support from '../Pages/Support/Support'
import Work from '../Pages/Work'
import Addallproject from '../Pages/Projects/Addallproject'
import Teamuser from '../Pages/TeamUser/Teamuser'
import Teamform from '../Pages/TeamFromValid/Teamform'
import Editform from '../Pages/EditUser/Editform'
import { MembersPage } from '../Pages/Projects/MembersPage'
import Clients from '../Pages/Application/Clients/Clients'
import AddClient from '../Pages/Application/Clients/AddClient'
import EditClient from '../Pages/Application/Clients/EditClient'
import Allteam from '../Pages/AllTeam/Allteam'
import Addteam from '../Pages/AllTeam/Addteam'
import Editteam from '../Pages/AllTeam/Editteam'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/use-cases' element={<Resources/>}/>
        <Route path='/pricing' element={<Pricing/>}/>
        <Route path='/how-it-works' element={<Work/>}/>
        <Route path='/support' element={<Support/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/project-users' element={<MembersPage/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/addprojects' element={<Addallproject/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/sidebar' element={<Sidebar/>}/>
        <Route path='/teams' element={<Teamuser/>}/>
        <Route path='/addmember' element={<Teamform/>}/>
        <Route path='/edit/:id' element={<Editform/>}/>
        <Route path='/clients' element={<Clients/>}/>
        <Route path='/addclient' element={<AddClient/>}/>
        <Route path='/editclient/:id' element={<EditClient/>}/>        
        <Route path='/allteam' element={<Allteam/>}/>
        <Route path='/addteam' element={<Addteam/>}/>
        <Route path='/editteam/:id' element={<Editteam/>}/>
    </Routes>
  )
}

export default AllRoutes