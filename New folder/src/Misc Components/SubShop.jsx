
import { useEffect, useState } from 'react';
import Shoecard from './Shoecard'

export default function SubShop({shoes, airMax, nikeDunk, airForce}) {
    
    const[show,setShow] = useState([]);

    useEffect(() => {
      setShow(shoes);
    },[]);

    const handleshoes=(t)=>{
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
              <h4 id="routput" className="f-weight space2">
                Price: &#8377;8,215 - &#8377;11,805
              </h4>
              <div className="price-slider">
                <input type="range" name="" id="rslider" />
              </div>
              <div className="filter-btn space2">
                <button className="btn">
                  <span className="material-icons">filter_alt</span>Filter
                </button>
              </div>
              <hr />
              <div className="filter-color">
                <h3 className="space2 f-weight">Filter by category</h3>
                <div className="links">
                  <li id="b4">
                    <button type="button" onClick={() => handleshoes(1)}>
                      1
                    </button>
                    All
                  </li>
                  <li id="b1">
                    <button type="button" onClick={() => handleshoes(2)}>
                      2
                    </button>
                    Air Max
                  </li>
                  <li id="b2">
                    <button type="button" onClick={() => handleshoes(3)}>
                      3
                    </button>
                    Air Force
                  </li>
                  <li id="b3">
                    <button type="button" onClick={() => handleshoes(4)}>
                      4
                    </button>
                    Nike Dunk
                  </li>
                </div>
              </div>
              <hr />
              <div className="filter-color">
                <h3 className="space2 f-weight">Filter by color</h3>
                <div className="links">
                  <li id="b">Black (1)</li>
                  <li id="bl">Blue (1)</li>
                  <li id="g">Gray (1)</li>
                  <li id="r">Red (1)</li>
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
            {show &&
              show.map((element, i) => {
                return (
                  <Shoecard
                    key={i}
                    id={element.shoeid}
                    name={element.shoename}
                    imageUrl={element.imageurl}
                    price={element.price}
                  />
                );
              })}
          </div>
        </section>
      </div>
    );
}
