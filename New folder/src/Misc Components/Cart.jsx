import { collection,deleteDoc, doc, getDocs, query, updateDoc, where } from 'firebase/firestore';
import React, { useEffect } from 'react'
import { database } from "../firebaseConfig";
import { useState } from 'react'

export default function Cart({ id, imageUrl, shoename, price , setChange, change,count,setCount}) {
  const[quantity,setQuantity]=useState(1);

  const updatequantity = async () => {
    const q = query(
      collection(database, "cart"),
      where("cart.shoeid", "==", id)
    );

    const querySnapshot = await getDocs(q);
    var docid;
    querySnapshot.forEach((doc) => {
      console.log(doc.id);
      docid = doc.id;
    });
    const docupdate = doc(database, "cart", docid);
    updateDoc(docupdate, {
      quantity: Number(quantity),
    });
    setChange(!change)
  };

   const handlequantity = async () => {
     const q = query(
       collection(database, "cart"),
       where("cart.shoeid", "==", id)
     );

     const querySnapshot = await getDocs(q);
     console.log(querySnapshot._snapshot.docChanges.length);
     if (querySnapshot._snapshot.docChanges.length != 0) {
       querySnapshot.forEach((doc) => {
         setQuantity(doc.data().quantity);
       });
     }
   };

   const handleremove = async () => {
     const q = query(
       collection(database, "cart"),
       where("cart.shoeid", "==", id)
     );

     const querySnapshot = await getDocs(q);
     var docid;
     querySnapshot.forEach((doc) => {
       console.log(doc.id);
       docid = doc.id;
     });
     deleteDoc(doc(database, "cart", docid));
     setChange(!change);
     setCount(Number(count)-Number(1));
   };

   useEffect(()=>{
    handlequantity()
   },[])

   useEffect(()=>{
    updatequantity()
   },[quantity])

  return (
    <div className="left-container">
      <div className="left-sub">
        <div className="cartLeft">
          <img src={imageUrl} alt="" />
        </div>
        <div className="cartRight">
          <div className="cart-head">
            <h3>{shoename}</h3>
            <h3 className="price">&#8377; {price}</h3>
          </div>
          <div style={{ display: "flex" }}>
            <div className="trash" onClick={handleremove}>
              <i className="fa fa-trash"></i>Remove
            </div>
            <div className="q-container">
              {/* <h3 style={{ marginRight: "10px", fontSize: "1.2em" }}>Qty</h3> */}
              <div className="q-Box">
                <span className="material-symbols-outlined" onClick={()=>setQuantity(Number(quantity)-Number(1))}>remove</span>
              </div>
              <div className="q-input">
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className="mob"
                />
              </div>
              <div className="q-Box">
                <span className="material-symbols-outlined" onClick={()=>setQuantity(Number(quantity)+Number(1))}>add</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}
