import React from 'react'
import HeroSection from '../components/HeroSection'
import HotelCard from '../components/HotelCard'
import FeaturedDestination from '../components/FeaturedDestination'
import ExclusiveOffers from '../components/Exclusiveoffers'
import Testimonial from '../components/Testimonial'
import NewLatter from '../components/NewLatter'


function HomePage() {
  return (
    <div className=''>
        <HeroSection></HeroSection>
        <FeaturedDestination></FeaturedDestination>
        <ExclusiveOffers></ExclusiveOffers>
        <Testimonial></Testimonial>
        <NewLatter></NewLatter>
       
      
    </div>
  )
}

export default HomePage
