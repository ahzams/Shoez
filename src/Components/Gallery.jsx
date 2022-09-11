import React, { useEffect } from 'react'
import { useState } from 'react'
import img1 from "../assets/img1.png"
import Spinner from '../Misc Components/Spinner'
import Footer from './Footer'
import Navbar from './Navbar'
import { motion } from 'framer-motion'

export default function Gallery({ page, count, setPage, userInfo }) {

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setPage('Gallery')
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
                    <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} exit={{ x: window.innerWidth }} transition={{ duration: 0.6 }}>
                        <Navbar page={page} count={count} userInfo={userInfo} />
                        <section id="gallery">
                            <div className="h-primary">
                                <h1 className="h-style f-weight">Gallery</h1>
                            </div>

                            <div className="boxes">
                                <div className="box">
                                    <img className="zoom" src={img1} alt="" />
                                    <img className="zoom" src={img1} alt="" />
                                    <img className="zoom" src={img1} alt="" />
                                </div>
                                <div className="box">
                                    <img className="zoom" src={img1} alt="" />
                                    <img className="zoom" src={img1} alt="" />
                                    <img className="zoom" src={img1} alt="" />
                                </div>
                                <div className="box">
                                    <img className="zoom" src={img1} alt="" />
                                    <img className="zoom" src={img1} alt="" />
                                    <img className="zoom" src={img1} alt="" />
                                </div>
                            </div>

                            <div id="imgBox" className="image-container">
                                <div id="caBox" className="carousel">
                                    <img id="imagehover" alt="" />
                                </div>
                                <span id="cross" className="material-icons">close</span>
                                <i id="prev" className="fas fa-chevron-left"></i>
                                <i id="next" className="fas fa-chevron-right"></i>
                            </div>
                        </section>
                        <Footer />
                    </motion.div>
            }
        </>
    )
}
