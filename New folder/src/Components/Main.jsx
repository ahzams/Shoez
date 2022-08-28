import React, { useEffect } from 'react'
import Navbar from "./Navbar"
import Choices from '../Misc Components/Choices'
import Discount from '../Misc Components/Discount'
import Features from '../Misc Components/Features'
import Hero from '../Misc Components/Hero'
import Footer from './Footer'

export default function Main({count, page , setPage}) {

  useEffect(() => {
    setPage('Home')
  })

  return (
    <div>
      <Navbar count={count} page={page} />
      <Hero />
      <Choices />
      <Features />
      <Discount />
      <Footer />
    </div>
  )
}
