import React from 'react'
import Description from '../Components/Home/Description'
import BussinessRatings from '../Components/Home/BussinessRatings'
import CoordinateTeam from '../Components/Home/CoordinateTeam'
import TrackingExpense from '../Components/Home/TrackingExpense'
import Reports from '../Components/Home/Reports'
import ToolsForOrganizations from '../Components/Home/ToolsForOrganizations'
import CustomerReviews from '../Components/Home/Customer Reviews/CustomerReviews'
import ContactDetails from '../Components/Home/ContactDetails'
import SuggestionBox from '../Components/Home/SuggestionBox'

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
      <ContactDetails/>
      <SuggestionBox/>      
    </div>
  )
}

export default Home