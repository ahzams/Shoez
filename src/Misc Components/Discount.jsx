import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Discount() {

    const navigate = useNavigate()

    return (
        <div>
            <section id="discount">
                <h4 className="space">Make an Order</h4>
                <h1 style={{fontSize: '4.0625em'}} className="f-weight space">Get a <span className="span-style">30%</span> discount
                    on<br />
                        your first order!</h1>
                <button style={{margin: '25px'}} onClick={() => navigate("/Shop")} className="btn space">Buy Now !</button>
            </section>
        </div>
    )
}
