import React from 'react'
import logo from '../assets/Shoez-logos_white.png'

export default function Footer() {
    return (
        <div>
            <section id="footer">
                <div className="bg">

                    <div className="footer-box">
                        <div className="logo">
                            <img src={logo} alt="" />
                        </div>
                        <div className="desc">
                            Shoez is your place for athletic and casual shoes for the whole family from hundreds of name brands.
                        </div>

                        <div className="social">
                            <a href="/" target="blank" className="fa fa-instagram fa-2x"> </a>
                            <a href="/" target="blank" className="fa fa-facebook fa-2x"> </a>
                            <a href="/" target="blank" className="fa fa-youtube fa-2x"> </a>
                            <a href="/" target="blank" className="fa fa-twitter fa-2x"> </a>
                        </div>
                    </div>
                    <div className="footer-box">
                        <div className="h-secondary">
                            Contact Us
                        </div>
                        <div className="info">
                            <div className="add">
                                <span className="material-icons">phone</span>7065511033
                            </div>
                            <div className="add">
                                <span className="material-icons">place</span>New Delhi, Delhi-110025
                            </div>
                            <div className="add">
                                <span className="material-icons">email</span><span><a
                                    href="mailto: ahzam183@gmail.com">ahzam183@gmail.com</a></span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
