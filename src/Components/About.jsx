import React, { useEffect } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import adp from "../assets/ahzam1.png"
// import pdp from "../assets/pankaj.png"
import { useState } from 'react'
import Spinner from '../Misc Components/Spinner'
import { motion } from 'framer-motion'

export default function About({ count, page, userInfo, setPage }) {

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setPage('About')
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
                    <motion.div style={{ backgroundColor: "#181a1b" }} initial={{ width: 0 }} animate={{ width: "100%" }} exit={{ x: window.innerWidth }} transition={{ duration: 0.6 }}>
                        <Navbar count={count} page={page} userInfo={userInfo} />
                        <div className='about'>
                            <div className='about-container'>
                                <div className='about-pic'>
                                    <img src={adp} alt="" />
                                </div>
                                <h4>Ahzam Syed</h4>
                                <h3>Front End Developer</h3>
                                <div className='year'>
                                    <h2>Final Year ECE Student</h2>
                                </div>
                            </div>
                            <div className='about-container'>
                                <div className='about-pic'>
                                    {/* <img style={{width: "210px"}} src={pdp} alt="" /> */}
                                    <i className="fas fa-user-circle" style={{ fontSize: "12em", padding: "0px", borderRadius: "20px", marginRight: "5px" }}></i>
                                </div>
                                <h4>Pankaj .</h4>
                                <h3>Full-Stack Web Developer</h3>
                                <div className='year'>
                                    <h2>Final Year ECE Student</h2>
                                </div>
                            </div>
                        </div>
                        <Footer />
                    </motion.div>
            }
        </>
    )
}
