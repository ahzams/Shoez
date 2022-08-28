import React from 'react'
import logo from '../assets/Shoez-logos_white.png'
import { Link, useNavigate } from "react-router-dom"

export default function Navbar({ count, page, userInfo }) {

    const navigate = useNavigate()

    window.onscroll = function () { scrollFunction() };

    const scrollFunction = () => {
        if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
            document.getElementById("header").style.width = "85vw";
            document.getElementById("header").style.borderRadius = "50px";
            document.getElementById("header").style.top = "8px";
        }
        else {
            document.getElementById("header").style.width = "100vw";
            document.getElementById("header").style.borderRadius = "0px";
            document.getElementById("header").style.top = "0px";
        }
    }

    return (
        <div className='nav-Section'>
            <nav className="navbar" id='header'>
                <div className="logo">
                    <img onClick={() => { navigate("/") }} src={logo} alt="" />
                </div>
                <div className="nav-list">
                    <span className="material-icons close">close</span>
                    <ul>
                        <li><Link className={page === 'Home' ? 'current' : ''} to="/">Home</Link></li>
                        <li><Link className={page === 'Shop' ? 'current' : ''} to="/Shop">Shop</Link></li>
                        <li><Link className={page === 'Gallery' ? 'current' : ''} to="/Gallery">Gallery</Link></li>
                        <li><Link className={page === 'About' ? 'current' : ''} to="/">About Us</Link></li>
                        <li><Link className={page === 'Contact' ? 'current' : ''} to="/">Contact</Link></li>
                    </ul>
                </div>
                <div className="icons">
                    <div style={{ display: "flex", alignItems: "center" }} onClick={() => navigate("/Login")}><span className="material-icons">account_circle</span>{userInfo ? userInfo.username : "SIGN IN"}</div>
                    <div onClick={() => navigate("/Cart")}>
                        <span className='cart'>{count}</span>
                        <i className='fas fa-shopping-cart' style={{ fontSize: "1.9em", marginLeft: "15px" }}></i><span style={{ position: "relative", left: "-6px" }}>Cart</span>
                    </div>
                </div>
                {/* <div className="hamburger">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div> */}
            </nav>
        </div>
    )
}
