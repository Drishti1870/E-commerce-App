import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'

import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'
import Bestseller from '../components/Bestseller'




const Home = () => {
  return (
    <div>
      <Hero/>
     
      <LatestCollection/>
    <Bestseller/>
      <OurPolicy/>
      <NewsletterBox/>
    </div>
  )
}

export default Home