import React from 'react'
import Description from '../Components/Home/Description'
import BussinessRatings from '../Components/Home/BussinessRatings'
import CoordinateTeam from '../Components/Home/CoordinateTeam'
import TrackingExpense from '../Components/Home/TrackingExpense'
import Reports from '../Components/Home/Reports'
import ToolsForOrganizations from '../Components/Home/ToolsForOrganizations'
import CustomerReviews from '../Components/Home/Customer Reviews/CustomerReviews'

const Home = () => {
  return (
    <div>
      <Description/>
      <BussinessRatings/>
      <CoordinateTeam/>
      <TrackingExpense/>
      <Reports/>
      <ToolsForOrganizations/>
      <CustomerReviews/>      
    </div>
  )
}

export default Home