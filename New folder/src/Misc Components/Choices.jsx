import React, { useState } from 'react'
import redShoe from '../assets/red/red.png'
import blueShoe from '../assets/blue/blue.png'
import blackShoe from '../assets/black/black.png'
import grayShoe from '../assets/gray/gray.png'

export default function Choices() {

    const [shoe, setShoe] = useState(redShoe)

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
                            <button type='button' id='red' className='manual-btn' onMouseEnter={() => setShoe(redShoe)}></button>
                            <button type='button' id='blue' className='manual-btn' onMouseEnter={() => setShoe(blueShoe)}></button>
                            <button type='button' id='black' className='manual-btn' onMouseEnter={() => setShoe(blackShoe)}></button>
                            <button type='button' id='gray' className='manual-btn' onMouseEnter={() => setShoe(grayShoe)}></button>
                        </div>

                        <div id="redshoe" className="slide front">
                            <img src={shoe} alt="" />
                            <h2>NIKE Viale (GS) AH5554 600 University Red/White</h2>
                            <div className="price">
                                <span style={{ textDecoration: 'line-through', color: 'gray' }}>₹ 8,215</span>
                                <span>&#8377; 6,644</span>
                            </div>
                        </div>
                        {/* <div id="blueshoe" className="slide">
                            <img src={blueShoe} alt="" />
                            <h2>NIKE Viale (GS) AH5554 400 Gym Blue/White</h2>
                            <div className="price">
                                <span style={{margin: '0px 15px'}}>₹ 11,499</span>
                            </div>
                        </div>
                        <div id="blackshoe" className="slide">
                            <img src={blackShoe} alt="" />
                            <h2>NIKE Viale (GS) AH5554 001 Black</h2>
                            <div className="price">
                                <span style={{margin: '0px 15px'}}>₹ 9,930</span>
                            </div>
                        </div>
                        <div id="greyshoe" className="slide">
                            <img src={grayShoe} alt="" />
                            <h2>NIKE Viale (GS) AH5554 500 University Gray</h2>
                            <div className="price">
                                <span style={{margin: '0px 15px'}}>₹ 11,805</span>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
        </div>
    )
}
