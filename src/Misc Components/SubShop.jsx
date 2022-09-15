
import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { database } from '../firebaseConfig';
import Shoecard from './Shoecard'
import multi from '../assets/multicolor.png'

export default function SubShop({ shoes, setShoes, airMax, nikeDunk, airForce, name, setName, lprice, setLPrice, hprice, setHPrice, color, setColor }) {

    const [show, setShow] = useState([]);
    const [isOpen, setIsOpen] = useState(false)
    const [search, setSearch] = useState('');
    const [check1, setCheck1] = useState(false);
    const [check2, setCheck2] = useState(false);
    const [check3, setCheck3] = useState(false);
    const [check4, setCheck4] = useState(false);
    const [check5, setCheck5] = useState(false);
    const [check6, setCheck6] = useState(false);
    const [check7, setCheck7] = useState(false);

    const fetchShoes = async () => {
        const querySnapshot = await getDocs(collection(database, "shoesdatabase"));
        const array = []
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            // console.log(doc.id, " => ", doc.data());
            array.push(doc.data().data)
        });
        setShow(array)
        // setShoes([...shoes, airMax])
    }

    const fetchAll = async (name, lprice, hprice) => {
        const querySnapshot = await getDocs(collection(database, name));
        const array = [];
        querySnapshot.forEach((doc) => {
            let r = doc.data().data.price;
            let price1 = r.replace(",", "");
            console.log(doc.data().data.shoename);
            console.log(price1);
            if (Number(price1) > Number(lprice) && Number(price1) < Number(hprice)) {
                array.push(doc.data().data);
            }
        });
        setShow(array);
        //console.log(show);
    };

    const fetchcolor = async (name, lprice, hprice, color) => {
        const querySnapshot = await getDocs(collection(database, name));
        const array = [];
        querySnapshot.forEach((doc) => {
            let r = doc.data().data.price;
            let price1 = r.replace(",", "");
            let shoecolor = doc.data().data.color;
            //console.log(shoecolor);
            //console.log(doc.data().data.shoename);
            //console.log(price1);
            if (Number(price1) > Number(lprice) && Number(price1) < Number(hprice) && shoecolor === color) {
                array.push(doc.data().data);
            }
        });
        setShow(array);
        //console.log(show);
    }

    const handlesearch = () => {
        let searchname = search.toLowerCase();
        searchname = searchname.replace(/\s/g, "");
        console.log(searchname);
        const array = [];
        shoes.map((element) => {
            let name = element.shoename;
            let sname = name.replace(/\s/g, "");
            let lname = sname.toLowerCase();
            console.log(lname);
            if (lname.includes(searchname)) {
                array.push(element);
            }
        })
        setShow(array);
    }

    useEffect(() => {
        fetchShoes()
    }, []);

    const handlecheck = (t) => {
        switch (t) {
            case 1:
                setCheck1(!check1)
                setCheck2(false);
                setCheck3(false);
                !check1 ? setLPrice(8000) : setLPrice(0);
                !check1 ? setHPrice(10000) : setHPrice(25000);
                break;
            case 2:
                setCheck1(false);
                setCheck2(!check2);
                setCheck3(false);
                !check2 ? setLPrice(10000) : setLPrice(0);
                !check2 ? setHPrice(15000) : setHPrice(25000);
                break;
            case 3:
                setCheck1(false);
                setCheck2(false);
                setCheck3(!check3);
                !check3 ? setLPrice(15000) : setLPrice(0);
                !check3 ? setHPrice(25000) : setHPrice(25000);
                break;
            default:
                setCheck1(false);
                setCheck2(false);
                setCheck3(false);
                break;
        }
    };

    const handleShoes = (t) => {
        switch (t) {
            case 1:
                setCheck4(!check4);
                setCheck5(false);
                setCheck6(false);
                setCheck7(false);
                !check4 ? setName('shoesdatabase') : setName('shoesdatabase');
                break;
            case 2:
                setCheck5(!check5);
                setCheck4(false);
                setCheck6(false);
                setCheck7(false);
                !check5 ? setName("airmax") : setName("shoesdatabase");
                break;
            case 3:
                setCheck6(!check6);
                setCheck4(false);
                setCheck5(false);
                setCheck7(false);
                !check6 ? setName("airforce") : setName("shoesdatabase");
                break;
            case 4:
                setCheck7(!check7);
                setCheck4(false);
                setCheck5(false);
                setCheck6(false);
                !check7 ? setName("nikedunk") : setName("shoesdatabase");
                break;
            default:
                setCheck7(false);
                setCheck4(false);
                setCheck5(false);
                setCheck6(false);
        }
    };

    useEffect(() => {
        // console.log(name);
        // console.log(lprice);
        // console.log(hprice);
        // console.log(color);
        if (color.length > 1) {
            fetchcolor(name, lprice, hprice, color);
        } else {
            fetchAll(name, lprice, hprice);
        }
        //  if(name === 'shoesdatabase') {
        //    fetchAll(lprice,hprice); 
        //  } else if(name === 'airmax') {
        //   fetchairmax(lprice, hprice);
        //  } else if(name === 'airforce') {
        //   fetchairforce(lprice, hprice);
        //  } else if(name === 'nikedunk') {
        //   fetchnikedunk(lprice,hprice);
        //  }
    }, [name, lprice, hprice, color])

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
                            {isOpen ? "Show Filters" : "Hide Filters"}
                        </button>
                    </div >
                    <div className='search-bar'>
                        <button className='search-btn' onClick={handlesearch}>
                            <span className="material-icons-outlined">
                                search
                            </span>
                        </button>
                        <input type="text" placeholder='Search' value={search} onChange={(e) => setSearch(e.target.value)} />
                    </div>
                </div>
                <div className='section-container'>
                    <div className={`section1 scrollWidth ${isOpen ? "disp" : "move3"}`}>
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
                                    <input type="checkbox" checked={check1} onChange={() => handlecheck(1)} />
                                    <li>&#8377; 8,000 - &#8377; 10,000</li>
                                </div>
                                <div className='price-input'>
                                    <input type="checkbox" checked={check2} onChange={() => handlecheck(2)} />
                                    <li>&#8377; 10,000 - &#8377; 15,000</li>
                                </div>
                                <div className='price-input'>
                                    <input type="checkbox" checked={check2} onChange={() => handlecheck(3)} />
                                    <li>&#62; 15,000</li>
                                </div>
                            </div>
                            {/* <div className="filter-btn space2">
                                <button className="btn"><span className="material-icons">filter_alt</span>Filter</button>
                            </div> */}
                            <hr />
                            <div className="collection">
                                <h3 className="space2 f-weight">Filter by brand</h3>
                                <div className="links">
                                    <div className="price-input">
                                        <input
                                            type="checkbox"
                                            checked={check4}
                                            onChange={() => handleShoes(1)}
                                        />
                                        <li>All</li>
                                    </div>
                                    <div className="price-input">
                                        <input
                                            type="checkbox"
                                            checked={check5}
                                            onChange={() => handleShoes(2)}
                                        />
                                        <li>Air Max</li>
                                    </div>
                                    <div className="price-input">
                                        <input
                                            type="checkbox"
                                            checked={check6}
                                            onChange={() => handleShoes(3)}
                                        />
                                        <li>Air Force</li>
                                    </div>
                                    <div className="price-input">
                                        <input
                                            type="checkbox"
                                            checked={check7}
                                            onChange={() => handleShoes(4)}
                                        />
                                        <li>Nike Dunk</li>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className='filter-color'>
                                <h3 className='space2 f-weight' style={{ marginBottom: "5px" }}>Filter by Color</h3>
                                <div className="color-container">
                                    <div className="color-box">
                                        <div className="colors">
                                            <div
                                                className={
                                                    color === "Black"
                                                        ? "color-type selTick"
                                                        : "color-type"
                                                }
                                                style={{ backgroundColor: "black" }}
                                                onClick={() =>
                                                    color !== "Black" ? setColor("Black") : setColor("")
                                                }
                                            ></div>
                                            <h6>Black</h6>
                                        </div>
                                        <div className="colors">
                                            <div
                                                className={
                                                    color === "Blue" ? "color-type selTick" : "color-type"
                                                }
                                                style={{ backgroundColor: "blue" }}
                                                onClick={() =>
                                                    color !== "Blue" ? setColor("Blue") : setColor("")
                                                }
                                            ></div>
                                            <h6>Blue</h6>
                                        </div>
                                        <div className="colors">
                                            <div
                                                className={
                                                    color === "Brown"
                                                        ? "color-type selTick"
                                                        : "color-type"
                                                }
                                                style={{ backgroundColor: "brown" }}
                                                onClick={() =>
                                                    color !== "Brown" ? setColor("Brown") : setColor("")
                                                }
                                            ></div>
                                            <h6>Brown</h6>
                                        </div>
                                    </div>
                                    <div className="color-box">
                                        <div className="colors">
                                            <div
                                                className={
                                                    color === "Green"
                                                        ? "color-type selTick"
                                                        : "color-type"
                                                }
                                                style={{ backgroundColor: "green" }}
                                                onClick={() =>
                                                    color !== "Green" ? setColor("Green") : setColor("")
                                                }
                                            ></div>
                                            <h6>Green</h6>
                                        </div>
                                        <div className="colors">
                                            <div
                                                className={
                                                    color === "Grey" ? "color-type selTick" : "color-type"
                                                }
                                                style={{ backgroundColor: "grey" }}
                                                onClick={() =>
                                                    color !== "Grey" ? setColor("Grey") : setColor("")
                                                }
                                            ></div>
                                            <h6>Grey</h6>
                                        </div>
                                        <div className="colors">
                                            <div
                                                className={
                                                    color === "Orange"
                                                        ? "color-type selTick"
                                                        : "color-type"
                                                }
                                                style={{ backgroundColor: "orange" }}
                                                onClick={() =>
                                                    color !== "Orange" ? setColor("Orange") : setColor("")
                                                }
                                            ></div>
                                            <h6>Orange</h6>
                                        </div>
                                    </div>
                                    <div className="color-box">
                                        <div className="colors">
                                            <div
                                                className={
                                                    color === "Pink" ? "color-type selTick" : "color-type"
                                                }
                                                style={{ backgroundColor: "pink" }}
                                                onClick={() =>
                                                    color !== "Pink" ? setColor("Pink") : setColor("")
                                                }
                                            ></div>
                                            <h6>Pink</h6>
                                        </div>
                                        <div className="colors">
                                            <div
                                                className={
                                                    color === "Purple"
                                                        ? "color-type selTick"
                                                        : "color-type"
                                                }
                                                style={{ backgroundColor: "purple" }}
                                                onClick={() =>
                                                    color !== "Purple" ? setColor("Purple") : setColor("")
                                                }
                                            ></div>
                                            <h6>Purple</h6>
                                        </div>
                                        <div className="colors">
                                            <div
                                                className={
                                                    color === "Red" ? "color-type selTick" : "color-type"
                                                }
                                                style={{ backgroundColor: "red" }}
                                                onClick={() =>
                                                    color !== "Red" ? setColor("Red") : setColor("")
                                                }
                                            ></div>
                                            <h6>Red</h6>
                                        </div>
                                    </div>
                                    <div className="color-box">
                                        <div className="colors">
                                            <div
                                                className={
                                                    color === "White"
                                                        ? "color-type bTick"
                                                        : "color-type"
                                                }
                                                style={{ backgroundColor: "white" }}
                                                onClick={() =>
                                                    color !== "White" ? setColor("White") : setColor("")
                                                }
                                            ></div>
                                            <h6>White</h6>
                                        </div>
                                        <div className="colors">
                                            <div
                                                className={
                                                    color === "Yellow"
                                                        ? "color-type selTick"
                                                        : "color-type"
                                                }
                                                style={{ backgroundColor: "yellow" }}
                                                onClick={() =>
                                                    color !== "Yellow" ? setColor("Yellow") : setColor("")
                                                }
                                            ></div>
                                            <h6>Yellow</h6>
                                        </div>
                                        <div className="colors">
                                            <div
                                                className={
                                                    color === "Multicolor"
                                                        ? "color-type selTick"
                                                        : "color-type"
                                                }

                                                style={{border: "none"}}

                                                onClick={() =>
                                                    color !== "Multicolor"
                                                        ? setColor("Multicolor")
                                                        : setColor("")
                                                }
                                            >
                                                <img src={multi} alt="" />
                                            </div>
                                            <h6>Multicolor</h6>
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
