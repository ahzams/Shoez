import React, { useEffect } from 'react'
import Choices from '../Misc Components/Choices'
import Discount from '../Misc Components/Discount'
import Features from '../Misc Components/Features'
import Hero from '../Misc Components/Hero'
import Footer from './Footer'
import Navbar from './Navbar'

export default function Main({ count, page, setPage , userInfo}) {

  useEffect(() => {
    setPage('Home')
  })

  return (
    <div>
      <Navbar count={count} page={page} userInfo={userInfo} />
      <Hero />
      <Choices />
      <Features />
      <Discount />
      <Footer />
    </div>
  )
}
