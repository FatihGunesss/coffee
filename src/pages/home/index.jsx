import React from 'react'
import Hero from './components/hero'
import OurCollection from './components/ourCollections'
import ChooseUs from './components/chooseUs'
import Works from './components/works'

const Home = () => {
  return (
    <div>
      <Hero/>
      <OurCollection/>
      <ChooseUs/>
      <Works/>
    </div>
  )
}

export default Home