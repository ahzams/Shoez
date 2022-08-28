import React from 'react'
import featuredImg1 from '../assets/featured-img1.png'

export default function Features() {
    return (
        <div>
            <section id="featured">
                <div id="left-section">
                    <div className="head">
                        <h4>Featured</h4>
                        <h1 style={{fontSize: '2.5em'}} className="f-weight">You'll like your new sneakers!</h1>
                    </div>
                    <div className="hr"></div>
                    <div className="para">
                        <h3 style={{fontSize: '1em'}} className="f-weight"><i>Meet new brand sneakers, which fit for any weather
                            conditions and have a stylish design.</i></h3>
                    </div>

                    <div className="list">
                        <ul>
                            <div className="box1">
                                <li>Engineered mesh upper;</li>
                                <li>Trufuse midsole;</li>
                                <li>Overlays;</li>
                                <li>NDurance on the heel and toe;</li>
                                <li>Any weather conditions;</li>
                            </div>

                            <div className="box2">
                                <li>Easy care;</li>
                                <li>Water resistant;</li>
                                <li>Water resistant;</li>
                                <li>Blown rubber outsole.</li>
                            </div>
                        </ul>
                    </div>
                </div>

                <div id="right-section">
                    <img src={featuredImg1} alt="" />
                </div>
            </section>
        </div>
    )
}
