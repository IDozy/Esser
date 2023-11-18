import React from 'react'
import Navbar from "../componets/navbar/Navbar"
import Info from "../componets/info/Info"
import Bumbles from '../componets/bumbles/Bumbles'
import InfoPrincipal from '../componets/infoPrincipal/InfoPrincipal'
const Home = () => {
  return (
    <div>
      <Navbar/>
      <Bumbles/>
      <InfoPrincipal/>
      <Info/>
    </div>
  )
}

export default Home
