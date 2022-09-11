import React, { useEffect } from 'react'
import { useState } from 'react'
import Spinner from '../Misc Components/Spinner'
import SubShop from '../Misc Components/SubShop'
import Footer from './Footer'
import Navbar from './Navbar'
import { motion } from 'framer-motion'

export default function Shop({ count, page, userInfo, setPage, shoes, setShoes, airMax, nikeDunk, airForce }) {

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setPage('Shop')
  })

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  }, [])

  return (
    <>
      {
        loading ?
          <Spinner loading={loading} />
          :
          <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} exit={{ x: window.innerWidth }} transition={{ duration: 0.3 }}>
            <Navbar count={count} page={page} userInfo={userInfo} />
            <SubShop shoes={shoes} setShoes={setShoes} airMax={airMax} nikeDunk={nikeDunk} airForce={airForce} />
            <Footer />
          </motion.div>
      }
    </>
  )
}
