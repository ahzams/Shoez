import { collection, deleteDoc, doc, getDocs, query, updateDoc, where } from 'firebase/firestore';
import React, { useEffect } from 'react'
import { useState } from 'react'
import { database } from '../firebaseConfig';

export default function Cart({ id, userInfo, change, setChange, count, setCount, imageUrl, shoename, price }) {

  const [quantity, setQuantity] = useState(1);

  let cartName = userInfo ? userInfo.username : "guest123"

  const updateQuantity = async () => {
    const q = query(
      collection(database, cartName),
      where("cart.shoeid", "==", id)
    );

    const querySnapshot = await getDocs(q);
    let docid;
    querySnapshot.forEach((doc) => {
      console.log(doc.id);
      docid = doc.id;
    });
    const docupdate = doc(database, cartName, docid);
    updateDoc(docupdate, {
      quantity: Number(quantity),
    });
    setChange(!change)
  };

  const handleQuantity = async () => {
    const q = query(
      collection(database, cartName),
      where("cart.shoeid", "==", id)
    );

    const querySnapshot = await getDocs(q);
    console.log(querySnapshot._snapshot.docChanges.length);
    if (querySnapshot._snapshot.docChanges.length !== 0) {
      querySnapshot.forEach((doc) => {
        setQuantity(doc.data().quantity);
      });
    }
  };

  const handleRemove = async () => {
    const q = query(
      collection(database, cartName),
      where("cart.shoeid", "==", id)
    );

    const querySnapshot = await getDocs(q);
    var docid;
    querySnapshot.forEach((doc) => {
      console.log(doc.id);
      docid = doc.id;
    });
    deleteDoc(doc(database, cartName, docid));
    setChange(!change);
    setCount(Number(count) - Number(1));
  };

  useEffect(() => {
    handleQuantity()
  }, [])

  useEffect(() => {
    updateQuantity()
  }, [quantity])

  return (
    <div>
      <div className='left-sub'>
        <div className='cartLeft'>
          <img src={imageUrl} alt="" />
        </div>
        <div className='cartRight'>
          <div className='cart-head'>
            <h3>{shoename}</h3>
            <h3 className="price">&#8377; {price}</h3>
          </div>
          <div className='cart-funcs'>
            <div className='trash' onClick={handleRemove}>
              <i className='fa fa-trash'></i>Remove
            </div>
            <div className='q-container'>
              {/* <h3 style={{ marginRight: "10px", fontSize: "1.2em" }}>Qty</h3> */}
              <div className='q-Box' onClick={() => setQuantity(Number(quantity) - Number(1))}>
                <span className="material-symbols-outlined">
                  remove
                </span>
              </div>
              <div className='q-input'>
                <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} className='mob' />
              </div>
              <div className='q-Box' onClick={() => setQuantity(Number(quantity) + Number(1))}>
                <span className="material-symbols-outlined">
                  add
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  )
}
