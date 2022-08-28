import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { database } from '../firebaseConfig'
import Cart from './Cart'

export default function Addtocart({count,setCount}) {

    const navigate = useNavigate()
    const [cartItems, setCartItems] = useState([])
    const [subtotal, setSubTotal] = useState(0)
    const [change, setChange] = useState(false);
    // const [original, setOriginal] = useState("")
    // const [prices, setPrices] = useState([])


    const fetchCartitems = async () => {
        const querySnapshot = await getDocs(collection(database, "cart"));
        const array = []
        const totalarray = [];
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            // console.log(doc.id, " => ", doc.data());
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
    },[change])

    return (
      <div className="cart-container">
        <div className="back" onClick={() => navigate(-1)}>
          <span className="material-symbols-outlined">keyboard_backspace</span>
        </div>
        <div className="addLeft">
          <div>
            <h2>Cart</h2>
            {cartItems &&
              cartItems.map((element, i) => {
                return (
                  <Cart
                    key={i}
                    id={element.shoeid}
                    count={count}
                    setCount={setCount}
                    imageUrl={element.imageurl}
                    shoename={element.shoename}
                    price={element.price}
                    setChange={setChange}
                    change={change}
                  />
                );
              })}
          </div>
        </div>
        <div className="addRight">
          <div className="summary">
            <div className="sum-head">
              <h2>Summary</h2>
            </div>
            <div className="cart-sub">
              <h3>Subtotal</h3>
              <h3 className="price">
                &#8377;
                {subtotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}.00
              </h3>
            </div>
            <div className="cart-sub">
              <h3>Estimated Delivery</h3>
              <h3 className="price">&#8377;50.00</h3>
            </div>
            <div className="cart-sub">
              <h3>Total</h3>
              <h3 className="price">
                &#8377;
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
      </div>
    );
}
