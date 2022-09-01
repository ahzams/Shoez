import React, { useEffect } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import adp from "../assets/ahzam1.png"
import pdp from "../assets/pankaj.png"

export default function About({count, page, userInfo, setPage}) {

    useEffect(() => {
        setPage('About')
    })

    return (
        <div style={{backgroundColor: "#181a1b"}}>
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
                        <i className="fas fa-user-circle" style={{fontSize: "12em", padding: "0px", borderRadius: "20px", marginRight: "5px"}}></i>
                    </div>
                    <h4>Pankaj .</h4>
                    <h3>Full-Stack Web Developer</h3>
                    <div className='year'>
                        <h2>Final Year ECE Student</h2>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
