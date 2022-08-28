import React, { useEffect } from 'react'
import SubShop from '../Misc Components/SubShop'
import Footer from './Footer'
import Navbar from './Navbar'

export default function Shop({ count, page, userInfo, setPage, shoes, setShoes, airMax, nikeDunk, airForce }) {

  useEffect(() => {
    setPage('Shop')
  })

  return (
    <div>
      <Navbar count={count} page={page} userInfo={userInfo} />
      <SubShop shoes={shoes} setShoes={setShoes} airMax={airMax} nikeDunk={nikeDunk} airForce={airForce} />
      <Footer />
    </div>
  )
}
