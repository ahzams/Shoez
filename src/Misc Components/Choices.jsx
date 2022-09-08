import React, { useState } from 'react'
import alphaTrainer from '../assets/alpha_trainer.png'
import dunkRetro from '../assets/dunk_retro.jpg'
import airForceLV8 from '../assets/airforcelv8.png'
import airForceBlack from '../assets/airforceblack.png'

export default function Choices() {

    const [shoe, setShoe] = useState(alphaTrainer)

    return (
        <div>
            <section id="Products">
                <div>
                    <h4 className="space">Products</h4>
                    <h1 className="space h-style">Top Choices!</h1>
                </div>

                <div id="slider">
                    <div className="slides">
                        <div className='navigate-manual'>
                            <button type='button' id='red' className='manual-btn' onClick={() => setShoe(alphaTrainer)}></button>
                            <button type='button' id='blue' className='manual-btn' onClick={() => setShoe(dunkRetro)}></button>
                            <button type='button' id='black' className='manual-btn' onClick={() => setShoe(airForceLV8)}></button>
                            <button type='button' id='gray' className='manual-btn' onClick={() => setShoe(airForceBlack)}></button>
                        </div>

                        <div id="redshoe" className="slide front">
                            <img src={shoe} alt="" />
                            <h2>Nike Air Max Alpha Trainer 4</h2>
                            <div className="price">
                                <span style={{ textDecoration: 'line-through', color: 'gray' }}>₹ 8,215</span>
                                <span>&#8377; 7,195</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
