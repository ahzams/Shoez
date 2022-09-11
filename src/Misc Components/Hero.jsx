import React from 'react'
import { useNavigate } from 'react-router-dom'
import bg1 from '../assets/bg-1.png'
import { motion } from 'framer-motion'

export default function Hero() {

    const navigate = useNavigate()
    return (
        <div>
            <section id="inside-content">
                <div className="left-box">
                    <div className="head-container">
                        <div className="red-line"></div>
                        {/*eslint-disable-next-line*/}
                        <h4 style={{ padding: '5px 0px', fontSize: '1em' }} className="f-weight">Choose your suitable sneakers!</h4>
                    </div>
                    {/*eslint-disable-next-line*/}

                    <h2 style={{ padding: '10px 0px', fontSize: '3.125em' }} className="f-weight">Nike Air Max with <span
                        className="span-style">30%</span> discount!
                    </h2>
                    {/*eslint-disable-next-line*/}
                    <h3 style={{ fontSize: '0.9375em' }} className="f-weight f-style">Meet the shoes perfect suit to active
                        lifestyle!<br />Your
                        feet won't feel any fatigue!</h3>
                    <div className="buttons">
                        <button className="btn" onClick={() => navigate("/Shop")}>Buy Sneakers</button>
                    </div>
                </div>
                <div className="right-box">
                    <h1>NIKE</h1>
                    <img src={bg1} alt="" />
                </div>
            </section>
        </div>
    )
}
