import React, { useEffect } from 'react'
import { useState } from 'react'
import Spinner from '../Misc Components/Spinner'
import SubShop from '../Misc Components/SubShop'
import Footer from './Footer'
import Navbar from './Navbar'
import { motion } from 'framer-motion'

export default function Shop({ count, page, userInfo, setPage, shoes, setShoes, airMax, nikeDunk, airForce }) {

  const [loading, setLoading] = useState(false)
  const [name, setName] = useState("shoesdatabase");
  const [lprice, setLPrice] = useState(0);
  const [hprice, setHPrice] = useState(25000);
  const [color, setColor] = useState('');

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
            <SubShop shoes={shoes} setShoes={setShoes} airMax={airMax} nikeDunk={nikeDunk} airForce={airForce} name={name} setName={setName} lprice={lprice} setLPrice={setLPrice} hprice={hprice} setHPrice={setHPrice} color={color} setColor={setColor} />
            <Footer />
          </motion.div>
      }
    </>
  )
}
