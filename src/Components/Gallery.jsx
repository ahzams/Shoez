import React, { useEffect } from 'react'
import img1 from "../assets/img1.png"
import Footer from './Footer'
import Navbar from './Navbar'

export default function Gallery({ page, setPage , userInfo}) {

    useEffect(() => {
        setPage('Gallery')
    })

    return (
        <div>
            <Navbar page={page} userInfo={userInfo} />
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
        </div>
    )
}
