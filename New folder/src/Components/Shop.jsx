import React, { useEffect } from 'react'
import SubShop from '../Misc Components/SubShop'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Shop({page,count, setPage,shoes, airMax, nikeDunk, airForce}) {

  useEffect(() => {
    setPage('Shop')
  })

  return (
    <div>
      <Navbar count={count} page={page} />
      <SubShop shoes={shoes} airMax={airMax} nikeDunk={nikeDunk} airForce={airForce} />
      <Footer />
    </div>
  )
}
