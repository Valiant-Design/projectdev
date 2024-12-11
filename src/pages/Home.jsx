import React from 'react'
import Header from '../components/Header'
import Faq from '../components/Faq'
import SpecialityMenu from '../components/SpecialityMenu'
import Banner from '../components/Banner'
import Marquee from '../components/marquee'

const Home = () => {
  return (
    <div>
      <Header />
      <SpecialityMenu />
      <Marquee />
      <Faq />
      <Banner />
    </div>
  )
}

export default Home