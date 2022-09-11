import React, { useState } from 'react'
import logo from '../assets/Shoez-logos_white.png'
import { Link, useNavigate } from "react-router-dom"
import { animate, motion } from 'framer-motion'

export default function Navbar({ count, page, userInfo }) {

    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false)
    const [line1, setLine1] = useState(`line`)
    const [line2, setLine2] = useState(`line`)

    window.onscroll = function () { scrollFunction() };

    const scrollFunction = () => {
        if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
            if (window.innerWidth > 1290) {
                document.getElementById("header").style.width = "85vw";
                document.getElementById("header").style.borderRadius = "50px";
                document.getElementById("header").style.top = "8px";
            }
        }
        else {
            document.getElementById("header").style.width = "100vw";
            document.getElementById("header").style.borderRadius = "0px";
            document.getElementById("header").style.top = "0px";
        }
    }

    const handleLines = () => {
        return (!isOpen ?
            (
                setLine1(`lineOne`),
                setLine2(`lineTwo`),
                setIsOpen(!isOpen)
            ) :
            (
                setLine1(`line`),
                setLine2(`line`),
                setIsOpen(!isOpen)
            )
        )
    }

    const variants = {
        open: { opacity: 1, x: 0 },
        closed: { opacity: 0, x: "-100%" },
      }

    return (
        <div className='nav-Section'>
            <nav className="navbar" id='header'>
                <div className="logo">
                    <img onClick={() => { navigate("/") }} src={logo} alt="" />
                </div>
                <motion.div className={`menu ${isOpen ? "move" : "move2"}`}>
                    <div className="nav-List">
                        <ul>
                            <li><Link className={page === 'Home' ? 'current' : ''} to="/">Home</Link></li>
                            <li><Link className={page === 'Shop' ? 'current' : ''} to="/Shop">Shop</Link></li>
                            <li><Link className={page === 'Gallery' ? 'current' : ''} to="/Gallery">Gallery</Link></li>
                            <li><Link className={page === 'About' ? 'current' : ''} to="/About">About Us</Link></li>
                            <li><Link className={page === 'Contact' ? 'current' : ''} to="/">Contact</Link></li>
                        </ul>
                    </div>
                </motion.div>
                <div className="icons">
                    <div className='nav-sign' style={{ display: "flex", alignItems: "center", transition: "0.3s ease-in-out" }} onClick={() => navigate("/Login")}>
                        <i className="fas fa-user-circle" style={{ fontSize: "1.6em", padding: "0px", borderRadius: "20px", marginRight: "5px" }}></i>
                        {userInfo ? userInfo.username : "SIGN IN"}
                    </div>
                    <div className='cart-div' onClick={() => navigate("/Cart")}>
                        <span className='cart'>{count}</span>
                        <i className='fas fa-shopping-cart' id='cartLogo'></i><span className='c-span' style={{ position: "relative", left: "-6px" }}>Cart</span>
                    </div>
                </div>
                <div className="hamburger" onClick={handleLines}>
                    <div className={line1}></div>
                    <div className={line2}></div>
                </div>
            </nav>
        </div>
    )
}
