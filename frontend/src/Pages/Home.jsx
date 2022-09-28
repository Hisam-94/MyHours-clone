import React from 'react'
import Description from '../Components/Home/Description'
import BussinessRatings from '../Components/Home/BussinessRatings'
import CoordinateTeam from '../Components/Home/CoordinateTeam'
import TrackingExpense from '../Components/Home/TrackingExpense'

const Home = () => {
  return (
    <div>
      <Description/>
      <BussinessRatings/>
      <CoordinateTeam/>
      <TrackingExpense/>      
    </div>
  )
}

export default Home