
import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { database } from '../firebaseConfig';
import Shoecard from './Shoecard'
import multi from '../assets/multicolor.png'

export default function SubShop({ shoes, setShoes, airMax, nikeDunk, airForce }) {

    const [show, setShow] = useState([]);
    const [isOpen, setIsOpen] = useState(false)

    const fetchShoes = async () => {
        const querySnapshot = await getDocs(collection(database, "shoesdatabase"));
        const array = []
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            // console.log(doc.id, " => ", doc.data());
            array.push(doc.data().item)
        });
        setShow(array)
        // setShoes([...shoes, airMax])
    }

    useEffect(() => {
        fetchShoes()
        setShow(shoes);
    }, []);

    const handleShoes = (t) => {
        switch (t) {
            case 1:
                setShow(shoes);
                break;
            case 2:
                setShow(airMax);
                break;
            case 3:
                setShow(airForce);
                break;
            case 4:
                setShow(nikeDunk);
                break;
        }
    }

    return (
        <div>
            <section id="shop-bg">
                <h2 className="h-style">Shop</h2>
            </section>

            <section id="shop-items">
                <div className='top-func'>
                    <div className='filter-down'>
                        <button className='btn' onClick={() => setIsOpen(!isOpen)}>
                            <span class="material-symbols-outlined">
                                tune
                            </span>
                            Filter
                        </button>
                    </div >
                    <div className='search-bar'>
                        <input type="text" placeholder='Search' />
                        <button className='search-btn'>
                            <span className="material-icons-outlined">
                                search
                            </span>
                        </button>
                    </div>
                </div>
                <div className='section-container'>
                    <div className={`section1 scrollWidth ${isOpen ? "move3" : "disp"}`}>
                        <h3 className="f-weight space2">Filter by price</h3>
                        <div className="filter">
                            <div className='price-filter'>
                                {/* <input type="number" className='mob' max={25000} />
                            <div style={{display: "flex"}}>
                                <button className='price-filter-btn' style={{marginRight: "2px", borderRadius: "0 5px 5px 0"}}><span className="material-symbols-outlined">
                  remove
                  </span></button>
                  <button className='price-filter-btn' style={{borderRadius: "5px 0 0 5px"}}><span className="material-symbols-outlined">
                  add
                  </span></button>
                  </div>
                <input type="number" className='mob' max={25000} /> */}
                                <div className='price-input'>
                                    <input type="checkbox" />
                                    <li>&#8377; 8,000 - &#8377; 10,000</li>
                                </div>
                                <div className='price-input'>
                                    <input type="checkbox" />
                                    <li>&#8377; 10,000 - &#8377; 15,000</li>
                                </div>
                                <div className='price-input'>
                                    <input type="checkbox" />
                                    <li>&#62; 15,000</li>
                                </div>
                            </div>
                            <div className="filter-btn space2">
                                <button className="btn"><span className="material-icons">filter_alt</span>Filter</button>
                            </div>
                            <hr />
                            <div className="collection">
                                <h3 className="space2 f-weight">Filter by brand</h3>
                                <div className="links">
                                    <div className="price-input">
                                        <input type="checkbox" />
                                        <li onClick={() => handleShoes(1)}>All</li>
                                    </div>
                                    <div className="price-input">
                                        <input type="checkbox" />
                                        <li onClick={() => handleShoes(2)}>Air Max</li>
                                    </div>
                                    <div className="price-input">
                                        <input type="checkbox" />
                                        <li onClick={() => handleShoes(3)}>Air Force</li>
                                    </div>
                                    <div className="price-input">
                                        <input type="checkbox" />
                                        <li onClick={() => handleShoes(4)}>Nike Dunk</li>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className='filter-color'>
                                <h3 className='space2 f-weight' style={{ marginBottom: "5px" }}>Filter by Color</h3>
                                <div className='color-container'>
                                    <div className="color-box">
                                        <div className='colors'>
                                            <div className="color-type" style={{ backgroundColor: "black" }}></div>
                                            <h6>Black</h6>
                                        </div>
                                        <div className='colors'>
                                            <div className="color-type" style={{ backgroundColor: "blue" }}></div>
                                            <h6>Blue</h6>
                                        </div>
                                        <div className='colors'>
                                            <div className="color-type" style={{ backgroundColor: "brown" }}></div>
                                            <h6>Brown</h6>
                                        </div>
                                    </div>
                                    <div className="color-box">
                                        <div className='colors'>
                                            <div className="color-type" style={{ backgroundColor: "green" }}></div>
                                            <h6>Green</h6>
                                        </div>
                                        <div className='colors'>
                                            <div className="color-type" style={{ backgroundColor: "grey" }}></div>
                                            <h6>Grey</h6>
                                        </div>
                                        <div className='colors'>
                                            <div className="color-type" style={{ backgroundColor: "orange" }}></div>
                                            <h6>Orange</h6>
                                        </div>
                                    </div>
                                    <div className="color-box">
                                        <div className='colors'>
                                            <div className="color-type" style={{ backgroundColor: "pink" }}></div>
                                            <h6>Pink</h6>
                                        </div>
                                        <div className='colors'>
                                            <div className="color-type" style={{ backgroundColor: "purple" }}></div>
                                            <h6>Purple</h6>
                                        </div>
                                        <div className='colors'>
                                            <div className="color-type" style={{ backgroundColor: "red" }}></div>
                                            <h6>Red</h6>
                                        </div>
                                    </div>
                                    <div className="color-box">
                                        <div className='colors'>
                                            <div className="color-type" style={{ backgroundColor: "white" }}></div>
                                            <h6>White</h6>
                                        </div>
                                        <div className='colors'>
                                            <div className="color-type" style={{ backgroundColor: "yellow" }}></div>
                                            <h6>Yellow</h6>
                                        </div>
                                        <div className='colors'>
                                            <img src={multi} className="color-type" style={{height: "auto", width: "35px", borderRadius: "0", border: "none"}} />
                                            <h6>Multi-Color</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr />
                        </div>
                    </div>

                    <div className="section2">
                        {/* <div id="headings">
                        <h4 className="items-head">SORT BY POPULARITY</h4>
                        <h5 className="items-head">Showing 1-3 of 4 results</h5>
                    </div> */}
                        {
                            show && show.map((element, i) => {
                                return <Shoecard key={i} id={element.shoeid} name={element.shoename} imageUrl={element.imageurl} price={element.price} />
                            })
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}
