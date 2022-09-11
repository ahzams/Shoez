import React, { useEffect } from 'react'
import Choices from '../Misc Components/Choices'
import Discount from '../Misc Components/Discount'
import Features from '../Misc Components/Features'
import Hero from '../Misc Components/Hero'
import Footer from './Footer'
import Navbar from './Navbar'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Spinner from '../Misc Components/Spinner'

export default function Main({ count, page, setPage, userInfo }) {

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setPage('Home')
  })

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  }, [])


  return (
    <div>
      {
        loading ?
          <Spinner loading={loading} />
          :
          <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} exit={{ x: window.innerWidth }} transition={{ duration: 0.6 }}>
            <Navbar count={count} page={page} userInfo={userInfo} />
            <Hero />
            <Choices />
            <Features />
            <Discount />
            <Footer />
          </motion.div>
      }
    </div>
  )
}
