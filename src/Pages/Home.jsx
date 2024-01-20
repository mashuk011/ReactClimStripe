import React from 'react'
import Hero from '../Components/Hero'
import Climate from '../Components/Climate'
import Wastefuture from '../Components/Wastefuture'
import Vision from '../Components/Vision'
import Product from '../Components/Product'
import Team from '../Components/Team'
import Mobile from '../Components/Mobile'
import ContactComp from '../Components/ContactComp'
import Impact from '../Components/Impact'
// import ScrollElement from '../Components/ScrollElement'

const Home = () => {
  return (
    <>
     <Hero/>
     <Climate />
     {/* <ScrollElement /> */}
     <Wastefuture />
     <Vision />
     <Product />
     <Team />
     <Mobile />
     <Impact />
     <ContactComp />
    </>
  )
}

export default Home
