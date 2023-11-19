import React from 'react'
import Navbar from "../componets/navbar/Navbar"
import Wave from "../componets/wave/Wave"
import Bumbles from '../componets/bumbles/Bumbles'
import Info from '../componets/info/Info'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Bumbles/>
      <Wave/>
      <Info/>
    </div>
  )
}

export default Home
