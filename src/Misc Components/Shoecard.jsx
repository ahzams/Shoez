import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Shoecard({name, price, imageUrl, id}) {

    const navigate = useNavigate()

    return (
        <div className="card" id="bdesc" onClick={() => navigate(`/Desc/${id}`)}>
            <div className="image">
                <img src={imageUrl} alt="" />
            </div>

            <div className="items">
                <h5 className="f-weight space2">Men's Shoes</h5>
                <h3 className="f-weight">{name}</h3>
                <div className="rating space2">
                    <span className="material-icons-outlined">star</span>
                    <span className="material-icons-outlined">star</span>
                    <span className="material-icons-outlined">star</span>
                    <span className="material-icons-outlined">star</span>
                    <span className="material-icons-outlined">star</span>
                </div>
                <h3 className="cardPrice">&#8377; {price}</h3>
            </div>
        </div>

    )
}
