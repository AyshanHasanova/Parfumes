import React from 'react'
import Mehsullar from '../components/Mehsullar'
import Hero from '../components/Hero'
import MehsullarSlider from '../components/MehsullarSlider'
import Discount from '../components/Discount'


import Essential from '../components/Essential'
import Beauty from '../components/Beauty'
import Discover from '../components/Discover'


const Home = () => {
  return (
    <>
      <Hero/>
     <MehsullarSlider/>
     <Discount/>
   
  
     <Essential/>
     <Beauty/>
     <Discover/>
    </>

  )
}

export default Home