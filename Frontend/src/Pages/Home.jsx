// import React from 'react'

import About from "../components/About"
import Footer from "../components/Footer"
import HeroSection from "../components/HeroSection"
import Menu from "../components/Menu"
import Qualities from "../components/Qualities"
import Reservation from "../components/Reservation"
import Team from "../components/Team"
import WhoAreWe from "../components/WhoAreWe"
// import Navbar from "../components/Navbar"

const Home = () => {
  return (
    <>
    <HeroSection/>
    <About/>
    <Qualities/>
    <Menu />
    <WhoAreWe/>
    <Reservation/>
    <Team/>
   
    <Footer/>

    </>
  )
}

export default Home