import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { database } from '../firebaseConfig'
import { addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc, where } from "firebase/firestore";
import ReactImageZoom from 'react-image-zoom';

export default function Descard({ userInfo, imageArray, shoename, id, count, setCount }) {

    const navigate = useNavigate()
    const [size, setSize] = useState([])
    const [cart, setCart] = useState([])
    const [quantity, setQuantity] = useState(1);
    const [present, setPresent] = useState(false);

    const fetchSizes = async () => {
        const querySnapshot = await getDocs(collection(database, "ShoeSizes"))
        querySnapshot.forEach((doc) => {
            setSize(...size, doc.data().data)
        })
    }

    let cartName = userInfo ? userInfo.username : "guest123"

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
        setPresent(false);
        setCount(Number(count) - Number(1));
    };

    const updateQuantity = async () => {
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
        const docupdate = doc(database, cartName, docid);
        updateDoc(docupdate, {
            quantity: Number(quantity),
        });
    }

    const handleQuantity = async () => {
        const q = query(
            collection(database, cartName),
            where("cart.shoeid", "==", id)
        );

        const querySnapshot = await getDocs(q);
        console.log(querySnapshot._snapshot.docChanges.length);
        if (querySnapshot._snapshot.docChanges.length != 0) {
            setPresent(true);
            querySnapshot.forEach((doc) => {
                setQuantity(doc.data().quantity);
            });
        }
    }

    const handleAdd = async () => {
        const q = query(
            collection(database, "shoesdatabase"),
            where("item.shoeid", "==", id)
        )

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            console.log(doc.data().item)
            setCart(doc.data().item)
        })
    }

    const handleData = () => {
        console.log("CLicked")
        let price1 = cart.price.replace(",", "");
        // console.log(price1);
        const collectionref = collection(database, cartName);
        addDoc(collectionref, {
            cart,
            quantity: Number(quantity),
            price: Number(price1),
        }).then(() => {
            alert("data added");
        }).catch((err) => {
            alert(err.message);
        })

        setPresent(true);
        setCount(Number(count) + Number(1));
    }

    useEffect(() => {
        fetchSizes()
        handleQuantity()
        handleAdd()
    }, [])

    useEffect(() => {
        updateQuantity()
    }, [quantity])

    return (
        <div>
            <section id="shop-products">
                <div className="left-container">
                    {
                        imageArray.map((item, i) => {
                            return (
                                <div key={i} className="top">
                                    <img src={item} alt="" />
                                </div>
                            )
                        })
                    }
                </div>
                <div className="right-container">
                    <div className="description">
                        <h2 className="f-weight h-style">{shoename}</h2>
                        {/* <div className="rating space2">
                            <span className="material-icons-outlined">star</span>
                            <span className="material-icons-outlined">star</span>
                            <span className="material-icons-outlined">star</span>
                            <span className="material-icons-outlined">star</span>
                            <span className="material-icons-outlined">star</span>
                        </div> */}
                        <h2 className="price">&#8377; 9,930.00</h2>
                        {/* <div className="text space2 f-style f-weight">If you are in a search of fine shoes which would meet your
                            design
                            and functional requirements, and meanwhile you are willing to save your time, an online store is
                            a perfect option for you.
                        </div> */}

                        <div className="quantity">
                            <h3>Select Size</h3>
                            <div className='sizes'>
                                {
                                    size.Sizes && size.Sizes.map((item, i) => {
                                        return <div key={i} className='sizeBox'>{item}</div>
                                    })
                                }
                            </div>
                        </div>

                        <div className="quantity">
                            <h4>Quantity</h4>
                            <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                        </div>
                        <div className="input-btns">
                            <button className="btn" style={{ marginBottom: '5px' }}>Buy Now</button>
                            <button className="btn" style={{ backgroundColor: "black" }} onClick={present ? handleRemove : handleData}>{present ? "Remove from Cart" : "Add to Cart"}<i className="fas fa-shopping-cart"></i></button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
