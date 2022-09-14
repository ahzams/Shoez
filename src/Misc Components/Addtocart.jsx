import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { database } from '../firebaseConfig'
import Cart from './Cart'
import Spinner from './Spinner'
import { motion } from 'framer-motion'

export default function Addtocart({ userInfo, count, setCount }) {

    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [subtotal, setSubTotal] = useState(0)
    const [change, setChange] = useState(false);

    let cartName = userInfo ? userInfo.username : "guest123"

    const fetchCartitems = async () => {
        const querySnapshot = await getDocs(collection(database, cartName));
        const array = []
        const totalarray = [];
        querySnapshot.forEach((doc) => {
            array.push(doc.data().cart)
            let sum = Number(doc.data().price * doc.data().quantity);
            totalarray.push(sum);
        });
        setCartItems(array)
        let sum = 0;
        totalarray.map((item) => {
            sum += item;
            setSubTotal(sum);
        })
    }

    useEffect(() => {
        fetchCartitems()
    }, [change])

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    }, [])

    return (
        <>
            {
                loading ?
                    <Spinner loading={loading} />
                    :
                    <motion.div className='cart-container'>
                        <div className='back'>
                            <span className="material-symbols-outlined" onClick={() => navigate(-1)}>
                                keyboard_backspace
                            </span>
                            <h2>Cart</h2>
                        </div>
                        <div className='addLeft'>
                                {
                                    cartItems && cartItems.map((element, i) => {
                                        return <Cart userInfo={userInfo} key={i} id={element.shoeid} count={count} setCount={setCount} imageUrl={element.imageurl} shoename={element.shoename} price={element.price} setChange={setChange} change={change} />
                                    })
                                }

                        </div>
                        <div className='addRight'>
                            <div className='summary'>
                                <div className="sum-head">
                                    <h2>Summary</h2>
                                </div>
                                <div className='cart-sub'>
                                    <h3>Subtotal</h3>
                                    <h3 className='price'>&#8377;
                                        {subtotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}.00
                                    </h3>
                                </div>
                                <div className='cart-sub'>
                                    <h3>Estimated Delivery</h3>
                                    <h3 className='price'>&#8377; 50.00</h3>
                                </div>
                                <div className='cart-sub'>
                                    <h3>Total</h3>
                                    <h3 className='price'>&#8377;
                                        {(Number(subtotal) + Number(50))
                                            .toString()
                                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                        .00
                                    </h3>
                                </div>
                            </div>
                            <div className="summary-btns">
                                <button className="btn">Proceed to Checkout</button>
                            </div>
                        </div>
                    </motion.div>
            }
        </>
    )
}
