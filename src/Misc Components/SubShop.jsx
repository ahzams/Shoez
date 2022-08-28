
import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { database } from '../firebaseConfig';
import Shoecard from './Shoecard'

export default function SubShop({shoes, setShoes, airMax, nikeDunk, airForce}) {

    const[show, setShow] = useState([]);

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
      },[]);
  
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
                <div className="section1">
                    <h3 className="f-weight space2">Filter by price</h3>
                    <div className="filter">
                        <h4 id="routput" className="f-weight space2">Price: &#8377;8,215 - &#8377;11,805</h4>
                        <div className="price-slider">
                            <input type="range" name="" id="rslider" />
                        </div>
                        <div className="filter-btn space2">
                            <button className="btn"><span className="material-icons">filter_alt</span>Filter</button>
                        </div>
                        <hr />
                        <div className="filter-color">
                            <h3 className="space2 f-weight">Filter by color</h3>
                            <div className="links">
                                <li onClick={() => handleShoes(1)}>All</li>
                                <li onClick={() => handleShoes(2)}>Air Max</li>
                                <li onClick={() => handleShoes(3)}>Air Force</li>
                                <li onClick={() => handleShoes(4)}>Nike Dunk</li>
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
            </section>
        </div>
    )
}
